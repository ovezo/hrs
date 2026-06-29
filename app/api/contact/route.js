/*
 * POST /api/contact
 *
 * Receives a contact-form submission from the website and forwards it to
 * Web3Forms, which delivers it to the inbox tied to the access key
 * (info@hrsrobot.co.uk). The visitor's email is set as the reply-to so the
 * team can respond directly.
 *
 * Setup: put your Web3Forms access key in WEB3FORMS_ACCESS_KEY (see .env /
 * Vercel project env vars). Get a key for free at https://web3forms.com.
 */

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

function isValidEmail(value) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(request) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const { email, subject, message, botcheck } = data || {};

  // Honeypot: real visitors never tick this. Return success so bots move on.
  if (botcheck) {
    return Response.json({ ok: true });
  }

  if (!isValidEmail(email) || !subject?.trim() || !message?.trim()) {
    return Response.json(
      { ok: false, error: 'Please provide a valid email, subject and message.' },
      { status: 400 },
    );
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  if (!accessKey) {
    console.error('WEB3FORMS_ACCESS_KEY is not set — cannot send contact form.');
    return Response.json(
      { ok: false, error: 'The contact form is not configured yet. Please email us directly at info@hrsrobot.co.uk.' },
      { status: 500 },
    );
  }

  try {
    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        from_name: 'HRS Website — Contact Form',
        subject: `[HRS Website] ${subject.trim()}`,
        email: email.trim(), // Web3Forms uses this as the reply-to address
        replyto: email.trim(),
        message: message.trim(),
        'Sender email': email.trim(), // also shown in the email body for clarity
      }),
    });

    const result = await res.json().catch(() => ({}));

    if (res.ok && result.success) {
      return Response.json({ ok: true });
    }

    console.error('Web3Forms rejected the submission:', res.status, result);
    return Response.json(
      { ok: false, error: result.message || 'Could not send your message. Please try again.' },
      { status: 502 },
    );
  } catch (err) {
    console.error('Contact form send failed:', err);
    return Response.json(
      { ok: false, error: 'Could not reach the mail service. Please try again later.' },
      { status: 502 },
    );
  }
}
