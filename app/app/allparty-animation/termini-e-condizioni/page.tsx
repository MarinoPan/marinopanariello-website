import { LegalLayout } from '../../../components/LegalLayout'

export const metadata = {
  title: 'Terms and Conditions – All Party Animation',
  description: 'Terms of use for the All Party Animation management platform reserved for authorised staff.',
}

export default function Page() {
  return (
    <LegalLayout>
      <header className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Terms and Conditions</h1>
        <p className="text-slate-600">Last updated: 16 September 2025</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">1. Provider information</h2>
        <p>
          The <strong>All Party Animation</strong> management platform is owned by <strong>Marino Panariello</strong>, registered at Alcide De Gasperi 49, 80059 Torre del Greco (NA), Italy. Contacts:{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a>, Certified Email{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@pec.it">marinopanariello@pec.it</a>, official website{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="https://marinopanariello.com">https://marinopanariello.com</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">2. Purpose</h2>
        <p>
          These Terms govern the internal use of the “All Party Animation” management platform (hereafter, the “Platform”), reserved for the animation agency and its authorised staff. The Platform provides event management, talent coordination, asset tracking, and internal communication features. Any use beyond the authorised scope is prohibited.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">3. Access and registration</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Access requires an account created or approved by the owner.</li>
          <li>Users are responsible for keeping their credentials confidential and for all activity performed through their account.</li>
          <li>Account sharing with third parties or use by unauthorised persons is forbidden.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">4. Acceptable use</h2>
        <p>
          Users agree to operate the Platform in compliance with applicable laws, including privacy, copyright, and information security regulations. It is forbidden to:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Access data or resources without proper authorisation.</li>
          <li>Modify, copy, or distribute content without permission.</li>
          <li>Inject malware, attempt attacks, or compromise the Platform&apos;s security.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">5. Third-party services</h2>
        <p>The Platform relies on external providers to ensure technical functionality:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Supabase</strong> for authentication and data management.
          </li>
          <li>
            <strong>Vercel</strong> for hosting and aggregate analytics.
          </li>
          <li>
            <strong>Firebase / Capacitor Push Notifications</strong> to manage notification tokens and deliver push notifications.
          </li>
        </ul>
        <p>Using the Platform entails acceptance of the relevant third-party terms, where applicable.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">6. Intellectual property</h2>
        <p>
          All content, source code, design, and documentation of the Platform belong to Marino Panariello. Reproduction or use beyond internal operational purposes is prohibited without written consent.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">7. Limitation of liability</h2>
        <p>
          The owner adopts reasonable measures to ensure service continuity and security but cannot guarantee the complete absence of interruptions. To the extent permitted by law, all liability for indirect damages, loss of profits, or data arising from use of the Platform is excluded.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">8. Privacy and cookies</h2>
        <p>
          Personal data processing is governed by the{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="/app/allparty-animation/privacy-policy.html">Privacy Policy</a>, and cookie usage is covered by the{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="/app/allparty-animation/cookie-policy.html">Cookie Policy</a>. Users must review them regularly.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">9. Changes to the Terms</h2>
        <p>
          The Terms may be updated for technical, regulatory, or organisational reasons. Updated versions are published on the official website; continued use of the Platform implies acceptance of any changes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">10. Governing law and jurisdiction</h2>
        <p>
          These Terms are governed by Italian law. Any dispute falls under the exclusive jurisdiction of the Court of Naples, unless mandatory law provides otherwise.
        </p>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>
          For questions about these Terms, contact{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a>.
        </p>
      </footer>
    </LegalLayout>
  )
}
