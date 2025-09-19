import { LegalLayout } from '../../../components/LegalLayout'

export const metadata = {
  title: 'Cookie Policy – All Party Animation',
  description: 'Cookie policy del gestionale All Party Animation con l’elenco delle tecnologie impiegate.',
}

export default function Page() {
  return (
    <LegalLayout>
      <header className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Cookie Policy</h1>
        <p className="text-slate-600">Ultimo aggiornamento: 16 settembre 2025</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">1. Che cosa sono i cookie</h2>
        <p>
          I cookie sono piccoli file di testo che i siti web inviano al browser dell’utente, dove vengono memorizzati per essere poi ritrasmessi agli
          stessi siti alle visite successive. Tecnologie affini (localStorage, sessionStorage, beacon, pixel) possono svolgere funzioni analoghe. In questa
          pagina tali strumenti sono indicati collettivamente come “cookie”.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">2. Utilizzo nella Piattaforma All Party Animation</h2>
        <p>
          Il gestionale interno utilizza prevalentemente cookie tecnici e strumenti analoghi necessari al funzionamento dell’interfaccia. Non vengono
          impiegati cookie di profilazione o marketing.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">3. Cookie e tecnologie impiegate</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Strumento</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Finalità</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Durata</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">
                  <strong>sidebar:state</strong> (cookie tecnico)
                </td>
                <td className="border border-slate-200 px-4 py-3">Memorizza lo stato aperto/chiuso della sidebar per migliorare l’esperienza di navigazione.</td>
                <td className="border border-slate-200 px-4 py-3">7 giorni</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">
                  <strong>pushNotificationRedirect</strong> (localStorage)
                </td>
                <td className="border border-slate-200 px-4 py-3">Gestisce il reindirizzamento dell’utente dopo l’apertura di una notifica push.</td>
                <td className="border border-slate-200 px-4 py-3">Fino a rimozione manuale (cancellato al primo utilizzo utile).</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">
                  <strong>Token Firebase</strong> (localStorage / plugin nativo)
                </td>
                <td className="border border-slate-200 px-4 py-3">Conserva il token dispositivo per ricevere notifiche push tramite Firebase.</td>
                <td className="border border-slate-200 px-4 py-3">Finché l’utente non revoca il consenso alle notifiche.</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">
                  <strong>Cookie Vercel Analytics</strong> (eventuali)
                </td>
                <td className="border border-slate-200 px-4 py-3">Raccolgono informazioni aggregate sul traffico per migliorare stabilità e performance della Piattaforma.</td>
                <td className="border border-slate-200 px-4 py-3">Variabile; dati anonimizzati/aggregati.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-600">
          L’elenco è aggiornato periodicamente. Potrebbero essere presenti cookie tecnici dei servizi esterni indicati nella Privacy Policy.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">4. Gestione dei cookie</h2>
        <p>
          Poiché la Piattaforma è ad uso interno e utilizza solo cookie tecnici/strumenti necessari, non è richiesto un banner di consenso. L’utente può
          comunque intervenire tramite le impostazioni del proprio browser o dispositivo per bloccare o cancellare i cookie.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <a className="text-blue-600 underline-offset-4 hover:underline" href="https://support.google.com/chrome/answer/95647">Google Chrome</a>
          </li>
          <li>
            <a className="text-blue-600 underline-offset-4 hover:underline" href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie">Mozilla Firefox</a>
          </li>
          <li>
            <a className="text-blue-600 underline-offset-4 hover:underline" href="https://support.apple.com/it-it/guide/safari/sfri11471/mac">Safari</a>
          </li>
          <li>
            <a
              className="text-blue-600 underline-offset-4 hover:underline"
              href="https://support.microsoft.com/it-it/topic/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>
        <p>
          Disabilitare i cookie tecnici potrebbe compromettere alcune funzionalità (es. memorizzazione della sidebar o accesso alle notifiche).
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">5. Aggiornamenti della Cookie Policy</h2>
        <p>
          La presente Cookie Policy può essere aggiornata per riflettere modifiche tecniche o normative. Eventuali variazioni significative saranno
          comunicate tramite i canali interni o sul sito ufficiale.
        </p>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>
          Per informazioni aggiuntive scrivi a{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a>.
        </p>
      </footer>
    </LegalLayout>
  )
}
