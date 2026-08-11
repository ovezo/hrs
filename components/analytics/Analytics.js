'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';
import { CONSENT_EVENT, applyConsent, readConsent } from './consent';

/**
 * Mounts the analytics tags — but only once the visitor has actually opted in.
 *
 * Google's "advanced" consent mode would have us load gtag.js immediately with
 * everything denied, so it can still send cookieless pings for modelling. We
 * don't: HRS runs no Google Ads, so there is nothing for that modelling to
 * feed, and "no request leaves the browser until consent" is the easier
 * position to defend under PECR. The consent-mode defaults still go out in the
 * root layout so the signal is correct the moment a tag does load.
 */
export default function Analytics({ gaId, clarityId, productionHost }) {
  const [consent, setConsent] = useState(null);
  // Keeps dev machines and Vercel preview deployments out of the live
  // property. The IDs live in the committed .env, so they are present in every
  // environment — this is what makes that safe. Checked on the client because
  // only the browser knows which host actually served the page.
  const [onProductionHost, setOnProductionHost] = useState(false);

  useEffect(() => {
    const strip = (host) => host.replace(/^www\./, '');
    setOnProductionHost(
      !productionHost || strip(window.location.hostname) === strip(productionHost),
    );
  }, [productionHost]);

  useEffect(() => {
    setConsent(readConsent());
    const onChange = (event) => setConsent(event.detail);
    window.addEventListener(CONSENT_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_EVENT, onChange);
  }, []);

  // Re-assert consent once the tags exist: on a return visit the stored
  // decision predates them, so the update pushed at click time was a no-op.
  useEffect(() => {
    if (consent) applyConsent(consent);
  }, [consent]);

  if (consent !== 'granted' || !onProductionHost) return null;

  return (
    <>
      {gaId ? <GoogleAnalytics gaId={gaId} /> : null}

      {clarityId ? (
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window,document,"clarity","script","${clarityId}");
  window.clarity('consentv2',{ad_Storage:"denied",analytics_Storage:"granted"});`}
        </Script>
      ) : null}
    </>
  );
}
