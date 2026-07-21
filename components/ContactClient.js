'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CONTACT_EMAIL = 'info@hrsrobot.co.uk';

export default function ContactClient() {
  const [form, setForm] = useState({ email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  // Prefill subject/message from URL params so links like the /products
  // "Request this robot" buttons land on a ready-to-send enquiry. Read from
  // the URL on mount (client-only) to avoid a Suspense boundary for
  // useSearchParams during static generation.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const subject = params.get('subject');
    const message = params.get('message');
    if (subject || message) {
      setForm((prev) => ({
        ...prev,
        ...(subject ? { subject } : {}),
        ...(message ? { message } : {}),
      }));
    }
  }, []);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Honeypot: real visitors never tick this hidden box.
    if (e.target.botcheck?.checked) return;
    setStatus('submitting');
    setErrorMsg('');
    try {
      // Web3Forms' free plan only accepts submissions from the browser, so we
      // post to it directly. The access key is a public NEXT_PUBLIC_* value
      // (it only allows sending to the inbox configured for this form).
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          from_name: 'HRS Website — Contact Form',
          subject: `[HRS Website] ${form.subject}`,
          email: form.email, // sets the reply-to so the team can respond directly
          replyto: form.email,
          message: form.message,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus('success');
        setForm({ email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Could not send your message. Please check your connection and try again.');
    }
  };

  return (
    <main className="bg-white flex-1">

      {/* ── Hero banner ── */}
      <div className="relative w-full h-[300px] md:h-[380px] overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/contact_us_robot_bg.png"
          alt="Humanoid robot on a factory floor — HRS"
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />

        {/* Title pinned to bottom of banner */}
        <div className="absolute bottom-0 left-0 right-0 max-w-[1440px] mx-auto px-6 md:px-16 pb-10">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-black/60">
            <Link href="/" className="hover:text-black/90 transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-black/90 font-medium">Contact</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Let&apos;s talk robots.
          </h1>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-24 items-start">

          {/* ── Left: contact details ── */}
          <div className="space-y-8">

            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              Whether you&apos;re exploring your first deployment or ready to run a factory trial, we&apos;re here to help.
            </p>

            {/* Email */}
            <div className="flex gap-4">
              <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-400 mb-1">Email</p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-gray-900 font-medium hover:text-gray-600 transition-colors">
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-400 mb-1">Telephone</p>
                <a href="tel:+441686621138" className="block text-gray-900 font-medium hover:text-gray-600 transition-colors">+44 (0) 1686 621138</a>
                <a href="tel:+447852355187" className="block text-gray-900 font-medium hover:text-gray-600 transition-colors">+44 (0) 7852 355187</a>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4">
              <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold tracking-wide uppercase text-gray-400 mb-1">Address</p>
                <address className="not-italic text-gray-900 font-medium leading-relaxed">
                  Humanoid Robot Solutions Ltd<br />
                  Unit 45, Mochdre Industrial Estate<br />
                  Newtown, Powys<br />
                  SY16 4LE
                </address>
              </div>
            </div>

          </div>

          {/* ── Right: form ── */}
          <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-10">
            {status === 'success' ? (
              <div className="text-center py-10">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50 border border-green-100">
                  <svg className="h-7 w-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-1.5">Message sent</h2>
                <p className="text-sm text-gray-500 mb-6 max-w-xs mx-auto leading-relaxed">
                  Thanks for getting in touch — we&apos;ll reply to your email within one business day.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-semibold text-gray-900 mb-1">Send us a message</h2>
                <p className="text-sm text-gray-500 mb-8">We&apos;ll respond within one business day.</p>

                <form onSubmit={handleSubmit} className="space-y-5">

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Your email <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="e.g. Factory trial enquiry"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell us about your operation, what tasks you're looking to automate, and where you're based."
                      value={form.message}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-200 transition resize-none"
                    />
                  </div>

                  {/* Honeypot — hidden from people, catches bots */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />

                  {status === 'error' && (
                    <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full rounded-xl bg-gray-900 text-white text-sm font-semibold py-3.5 hover:bg-gray-700 active:scale-[0.98] transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
                  >
                    {status === 'submitting' ? 'Sending…' : 'Send'}
                  </button>

                </form>
              </>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
