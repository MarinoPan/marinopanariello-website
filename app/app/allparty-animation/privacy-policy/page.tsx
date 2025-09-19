import { LegalLayout } from '../../../components/LegalLayout'

export const metadata = {
  title: 'Privacy Policy – All Party Animation',
  description: 'Informativa sul trattamento dei dati personali per il gestionale All Party Animation.',
}

export default function Page() {
  return (
    <LegalLayout>
      <header className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Informativa Privacy</h1>
        <p className="text-slate-600">Ultimo aggiornamento: 16 settembre 2025</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">1. Titolare del Trattamento</h2>
        <p>
          Il titolare del trattamento è <strong>Marino Panariello</strong>, Alcide De Gasperi 49, 80059 Torre del Greco (NA), Italia. Contatti:{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a>, PEC{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@pec.it">marinopanariello@pec.it</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">2. Dati Raccolti</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Dati anagrafici e di contatto</strong>: nome, cognome, email, eventuale numero di telefono forniti in fase di registrazione.
          </li>
          <li>
            <strong>Credenziali di accesso</strong>: email e password gestite tramite Supabase con misure di hashing.
          </li>
          <li>
            <strong>Dati operativi</strong>: informazioni su eventi, materiali e attività interne registrate dagli utenti.
          </li>
          <li>
            <strong>Dati tecnici</strong>: indirizzo IP, identificativi del dispositivo, log di accesso generati dal provider di hosting (Vercel) e dal database (Supabase).
          </li>
          <li>
            <strong>Token push</strong>: identificativi generati tramite Firebase/Capacitor per l’invio di notifiche, associati all’account Supabase.
          </li>
          <li>
            <strong>Cookie e tecnologie simili</strong>: cookie funzionali come “sidebar:state”, dati salvati in localStorage per la gestione dei reindirizzamenti da notifiche push, oltre a eventuali cookie tecnici del provider di hosting e analytics.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">3. Finalità e Basi Giuridiche</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Finalità</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Base giuridica</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Gestione account, autenticazione e autorizzazioni interne.</td>
                <td className="border border-slate-200 px-4 py-3">Esecuzione di misure precontrattuali/contrattuali (art. 6.1.b GDPR).</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Comunicazioni operative e invio di notifiche push.</td>
                <td className="border border-slate-200 px-4 py-3">Interesse legittimo del titolare nel coordinare l’agenzia (art. 6.1.f GDPR).</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Analisi dell’utilizzo della Piattaforma e miglioramento del servizio.</td>
                <td className="border border-slate-200 px-4 py-3">Interesse legittimo del titolare; i dati sono aggregati/anonymizzati (art. 6.1.f GDPR).</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Adempimento obblighi di legge e risposte a richieste dell’autorità.</td>
                <td className="border border-slate-200 px-4 py-3">Obbligo legale (art. 6.1.c GDPR).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">4. Conservazione dei Dati</h2>
        <p>
          I dati sono conservati per il tempo necessario a erogare la Piattaforma e adempiere agli obblighi fiscali/contabili. Gli account inattivi possono
          essere disattivati o anonimizzati trascorsi 24 mesi senza accessi, salvo richieste differenti dell’organizzazione.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">5. Comunicazione e Trasferimento</h2>
        <p>
          I dati sono trattati principalmente in ambito UE/SEE. Fornitori come Vercel e Supabase possono trasferire informazioni verso paesi extra UE (es. USA)
          adottando misure contrattuali (Standard Contractual Clauses) e tecniche adeguate. Non esiste profilazione o vendita dei dati a terzi.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">6. Sicurezza</h2>
        <p>
          Sono adottate misure tecniche e organizzative per proteggere i dati: autenticazione con Supabase, connessioni cifrate (HTTPS), gestione centralizzata
          degli accessi, logging delle operazioni. Gli utenti sono tenuti a mantenere riservate le credenziali e aggiornare le password regolarmente.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">7. Diritti degli Interessati</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Accesso, rettifica, cancellazione e limitazione del trattamento.</li>
          <li>Opposizione al trattamento basato su interesse legittimo.</li>
          <li>Portabilità dei dati forniti.</li>
          <li>Revoca del consenso (se prestato) senza pregiudicare i trattamenti precedenti.</li>
          <li>Reclamo al Garante per la protezione dei dati personali (www.garanteprivacy.it).</li>
        </ul>
        <p>
          Per esercitare i diritti, invia una richiesta a{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a> o alla PEC indicata.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">8. Servizi Terzi</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Supabase</strong> (database e autenticazione) –{' '}
            <a className="text-blue-600 underline-offset-4 hover:underline" href="https://supabase.com/docs/guides/platform/privacy">Privacy Policy</a>.
          </li>
          <li>
            <strong>Vercel</strong> (hosting e analytics) –{' '}
            <a className="text-blue-600 underline-offset-4 hover:underline" href="https://vercel.com/legal/privacy-policy">Privacy Policy</a>.
          </li>
          <li>
            <strong>Firebase Cloud Messaging</strong> (notifiche push) –{' '}
            <a className="text-blue-600 underline-offset-4 hover:underline" href="https://firebase.google.com/support/privacy">Privacy Policy</a>.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">9. Modifiche all’Informativa</h2>
        <p>
          Il titolare può aggiornare la presente informativa per adeguarla a modifiche normative o organizzative. Le versioni aggiornate sono pubblicate sul
          sito ufficiale. L’uso continuato della Piattaforma implica l’accettazione delle modifiche.
        </p>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>
          Per qualsiasi dubbio in materia di privacy, contatta{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a>.
        </p>
      </footer>
    </LegalLayout>
  )
}
