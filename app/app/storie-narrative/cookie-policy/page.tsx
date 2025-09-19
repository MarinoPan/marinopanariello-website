import { LegalLayout } from '../../../components/LegalLayout'

export const metadata = {
  title: 'Cookie Policy - Fiabe Magiche',
  description: 'Cookie policy for the Fiabe Magiche app with details about technical storage, analytics, and third-party services.',
}

export default function Page() {
  return (
    <LegalLayout>
      <header className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">COOKIE POLICY</h1>
        <p>
          <strong>Fiabe Magiche</strong>
          <br />
          <em>Last updated: 14 August 2025</em>
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">1. WHAT ARE COOKIES</h2>
        <p>
          Cookies are small text files stored on your device (computer, tablet, smartphone) while you browse a website or use an application. They allow the
          site or app to remember your actions and preferences for a period of time.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">2. HOW COOKIES ARE USED IN OUR APP</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-700">2.1 Mobile app (iOS / Android)</h3>
          <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 px-5 py-4">
            <strong>GOOD NEWS:</strong> The mobile application <strong>does not use traditional cookies</strong> in the classic sense.
          </div>
          <p>However, to keep the app running smoothly, we rely on the following storage mechanisms:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Data type</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Purpose</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Retention</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Category</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Local storage</td>
                  <td className="border border-slate-200 px-4 py-3">Saves created stories and user preferences</td>
                  <td className="border border-slate-200 px-4 py-3">Until uninstalled</td>
                  <td className="border border-slate-200 px-4 py-3">Essential</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">App identifiers</td>
                  <td className="border border-slate-200 px-4 py-3">Manage RevenueCat subscriptions</td>
                  <td className="border border-slate-200 px-4 py-3">Subscription length</td>
                  <td className="border border-slate-200 px-4 py-3">Functional</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">System preferences</td>
                  <td className="border border-slate-200 px-4 py-3">Audio, theme, and language settings</td>
                  <td className="border border-slate-200 px-4 py-3">Until uninstalled</td>
                  <td className="border border-slate-200 px-4 py-3">Essential</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Temporary cache</td>
                  <td className="border border-slate-200 px-4 py-3">Improve app performance</td>
                  <td className="border border-slate-200 px-4 py-3">7 days (auto cleanup)</td>
                  <td className="border border-slate-200 px-4 py-3">Technical</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-700">2.2 Web version (if accessed)</h3>
          <p>If you use the web version of the application, the following cookies may be involved:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Name</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Purpose</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Duration</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">fiabeMagiche:session</td>
                  <td className="border border-slate-200 px-4 py-3">Maintains the user session during navigation</td>
                  <td className="border border-slate-200 px-4 py-3">Session</td>
                  <td className="border border-slate-200 px-4 py-3">Essential</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">themePreference</td>
                  <td className="border border-slate-200 px-4 py-3">Stores light/dark theme selection</td>
                  <td className="border border-slate-200 px-4 py-3">12 months</td>
                  <td className="border border-slate-200 px-4 py-3">Functional</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">analyticsConsent</td>
                  <td className="border border-slate-200 px-4 py-3">Registers the user choice for analytics tools</td>
                  <td className="border border-slate-200 px-4 py-3">6 months</td>
                  <td className="border border-slate-200 px-4 py-3">Preference</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">cacheAssets</td>
                  <td className="border border-slate-200 px-4 py-3">Optimises loading of static assets</td>
                  <td className="border border-slate-200 px-4 py-3">30 days</td>
                  <td className="border border-slate-200 px-4 py-3">Technical</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">3. THIRD-PARTY SERVICES</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-700">3.1 Artificial intelligence</h3>
          <p>To generate stories, illustrations, and narration we rely on trusted partners:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Google Gemini</strong>: Generates story text
              <br />
              <em>
                Policy:{' '}
                <a className="text-blue-600 underline-offset-4 hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                  https://policies.google.com/privacy
                </a>
              </em>
            </li>
            <li>
              <strong>Runware API</strong>: Produces personalised images
              <br />
              <em>
                Policy:{' '}
                <a className="text-blue-600 underline-offset-4 hover:underline" href="https://runware.ai/privacy" target="_blank" rel="noopener noreferrer">
                  https://runware.ai/privacy
                </a>
              </em>
            </li>
            <li>
              <strong>ElevenLabs</strong> (if enabled): Provides premium voice synthesis
              <br />
              <em>
                Policy:{' '}
                <a className="text-blue-600 underline-offset-4 hover:underline" href="https://elevenlabs.io/privacy" target="_blank" rel="noopener noreferrer">
                  https://elevenlabs.io/privacy
                </a>
              </em>
            </li>
          </ul>
          <div className="rounded-xl border-l-4 border-rose-500 bg-rose-50 px-5 py-4">
            <strong>IMPORTANT:</strong> These third parties may use cookies or similar technologies under their own privacy policies. Please review their notices for more details.
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-700">3.2 Payments and subscriptions</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>RevenueCat</strong>: Manages subscriptions and usage analytics
              <br />
              <em>
                Policy:{' '}
                <a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">
                  https://www.revenuecat.com/privacy
                </a>
              </em>
            </li>
            <li>
              <strong>Apple App Store / Google Play</strong>: Process payments according to their respective policies
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">4. TYPES OF COOKIES</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.1 Essential cookies</h3>
          <p>These are required for the app to function and cannot be disabled. They cover:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Saving created stories</li>
            <li>Maintaining user preferences</li>
            <li>Core security features</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.2 Functional cookies</h3>
          <p>They enhance the experience and can be managed in settings:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Remembering language selection</li>
            <li>Saving audio preferences</li>
            <li>Keeping personalisation choices</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.3 Performance cookies</h3>
          <p>They help us understand how the app is used so we can improve it:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Anonymous usage statistics</li>
            <li>Performance analysis</li>
            <li>Identification of technical errors</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">5. HOW TO MANAGE COOKIES</h2>
        <p>You can manage cookies and local data via browser or device settings:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Clear local storage/data</strong>: Remove all stories and preferences saved on the device
          </li>
          <li>
            <strong>Disable analytics (web)</strong>: Use the in-app toggle or browser extensions such as uBlock, Privacy Badger, or Brave shields
          </li>
          <li>
            <strong>Use private/Incognito mode</strong>: Browse without saving cookies
          </li>
        </ul>
        <p>If you prefer to control cookies from your browser, visit the official support pages:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <a className="text-blue-600 underline-offset-4 hover:underline" href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">
              Google Chrome
            </a>
          </li>
          <li>
            <a className="text-blue-600 underline-offset-4 hover:underline" href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer">
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a className="text-blue-600 underline-offset-4 hover:underline" href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer">
              Safari
            </a>
          </li>
          <li>
            <a className="text-blue-600 underline-offset-4 hover:underline" href="https://support.microsoft.com/topic/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">
              Microsoft Edge
            </a>
          </li>
        </ul>
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4">
          <strong>Note:</strong> Disabling certain cookies or storage features may limit some app functions, such as keeping stories offline or applying personalisation.
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">6. HOW WE PROTECT YOUR DATA</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Secure storage</strong>: Stories are encrypted locally and never shared without consent
          </li>
          <li>
            <strong>Limited access</strong>: Only the app can read its own data; no external services can fetch it directly
          </li>
          <li>
            <strong>User control</strong>: You can delete stories, cache, and preferences at any time
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">7. UPDATES TO THIS COOKIE POLICY</h2>
        <p>
          This policy may be updated to reflect new features, regulatory changes, or third-party adjustments. Significant updates will be communicated in the app, via email (if provided), or on this page.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">8. CONTACT</h2>
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
          <p className="font-semibold">Need help or want to exercise your privacy rights?</p>
          <p>
            Email:{' '}
            <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">
              marinopanariello@gmail.com
            </a>
          </p>
          <p>We reply within 30 days.</p>
        </div>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>© 2024 Fiabe Magiche. All rights reserved.</p>
        <p>This policy complies with the EU General Data Protection Regulation (GDPR) 2016/679.</p>
      </footer>
    </LegalLayout>
  )
}
