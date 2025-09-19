import { LegalLayout } from '../../../components/LegalLayout'

export const metadata = {
  title: 'Cookie Policy – All Party Animation',
  description: 'Cookie policy for the All Party Animation management platform with the list of technologies in use.',
}

export default function Page() {
  return (
    <LegalLayout>
      <header className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Cookie Policy</h1>
        <p className="text-slate-600">Last updated: 16 September 2025</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">1. What cookies are</h2>
        <p>
          Cookies are small text files stored by websites in the user&apos;s browser and sent back to the same sites on subsequent visits. Related technologies (localStorage, sessionStorage, beacons, pixels) can serve similar purposes. Throughout this page these tools are collectively referred to as “cookies”.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">2. Use within the All Party Animation platform</h2>
        <p>
          The internal tool mainly relies on technical cookies and similar mechanisms required for the interface to function. No profiling or marketing cookies are used.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">3. Cookies and technologies in use</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Tool</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Purpose</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">
                  <strong>sidebar:state</strong> (technical cookie)
                </td>
                <td className="border border-slate-200 px-4 py-3">Stores the open/closed state of the sidebar to improve navigation.</td>
                <td className="border border-slate-200 px-4 py-3">7 days</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">
                  <strong>pushNotificationRedirect</strong> (localStorage)
                </td>
                <td className="border border-slate-200 px-4 py-3">Handles user redirection after opening a push notification.</td>
                <td className="border border-slate-200 px-4 py-3">Until manual removal (cleared after first use).</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">
                  <strong>Firebase token</strong> (localStorage / native plugin)
                </td>
                <td className="border border-slate-200 px-4 py-3">Stores the device token required to receive Firebase push notifications.</td>
                <td className="border border-slate-200 px-4 py-3">Until the user revokes notification consent.</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">
                  <strong>Vercel Analytics cookies</strong> (if enabled)
                </td>
                <td className="border border-slate-200 px-4 py-3">Collect aggregate traffic insights to improve platform stability and performance.</td>
                <td className="border border-slate-200 px-4 py-3">Variable; anonymised/aggregated data.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-600">
          The list is updated periodically. Technical cookies from external services listed in the Privacy Policy may be present.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">4. Managing cookies</h2>
        <p>
          Because the platform is for internal use and relies solely on technical/essential cookies, no consent banner is required. Users can still manage cookies through browser or device settings to block or delete them.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <a className="text-blue-600 underline-offset-4 hover:underline" href="https://support.google.com/chrome/answer/95647">Google Chrome</a>
          </li>
          <li>
            <a className="text-blue-600 underline-offset-4 hover:underline" href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox">Mozilla Firefox</a>
          </li>
          <li>
            <a className="text-blue-600 underline-offset-4 hover:underline" href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac">Safari</a>
          </li>
          <li>
            <a
              className="text-blue-600 underline-offset-4 hover:underline"
              href="https://support.microsoft.com/topic/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          Disabling technical cookies may affect certain features (e.g., sidebar preferences or notification access).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">5. Cookie policy updates</h2>
        <p>
          This cookie policy may be updated to reflect technical or regulatory changes. Significant updates will be communicated through internal channels or on the official website.
        </p>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>
          For additional information contact{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a>.
        </p>
      </footer>
    </LegalLayout>
  )
}
