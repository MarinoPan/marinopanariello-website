import { LegalLayout } from '../../../components/LegalLayout'

export const metadata = {
  title: 'Termini e Condizioni – All Party Animation',
  description: "Termini d'uso del gestionale All Party Animation per il personale autorizzato.",
}

export default function Page() {
  return (
    <LegalLayout>
      <header className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Termini e Condizioni</h1>
        <p className="text-slate-600">Ultimo aggiornamento: 16 settembre 2025</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">1. Informazioni sul Fornitore</h2>
        <p>
          Il gestionale <strong>All Party Animation</strong> è di proprietà di <strong>Marino Panariello</strong>, con sede legale in Alcide De Gasperi 49, 80059 Torre
          del Greco (NA), Italia. Contatti:{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a>, PEC{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@pec.it">marinopanariello@pec.it</a>, sito ufficiale{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="https://marinopanariello.com">https://marinopanariello.com</a>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">2. Oggetto</h2>
        <p>
          I presenti Termini disciplinano l’uso interno del gestionale “All Party Animation” (di seguito, “Piattaforma”), destinato all’agenzia di animazione e
          al relativo personale autorizzato. La Piattaforma offre funzionalità di gestione eventi, animatori, materiali e comunicazioni interne. È vietato
          qualsiasi utilizzo diverso da quello autorizzato.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">3. Accesso e Registrazione</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Per accedere è necessario un account creato o approvato dal titolare.</li>
          <li>L’utente è responsabile della riservatezza delle proprie credenziali e di ogni attività compiuta con il proprio account.</li>
          <li>È vietata la condivisione dell’account con terzi o l’utilizzo da parte di utenti non autorizzati.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">4. Utilizzo Consentito</h2>
        <p>
          L’utente si impegna a utilizzare la Piattaforma nel rispetto delle normative vigenti, incluse quelle in materia di privacy, diritto d’autore e
          sicurezza informatica. È vietato:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Accedere a dati o risorse cui non si è autorizzati.</li>
          <li>Modificare, copiare o diffondere contenuti senza autorizzazione.</li>
          <li>Introdurre malware, tentare attacchi o compromettere la sicurezza della Piattaforma.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">5. Servizi Esterni e Componenti</h2>
        <p>La Piattaforma utilizza servizi esterni per garantire funzionalità tecniche:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Supabase</strong> per autenticazione e gestione dati.
          </li>
          <li>
            <strong>Vercel</strong> per hosting e raccolta di dati analitici aggregati.
          </li>
          <li>
            <strong>Firebase / Capacitor Push Notifications</strong> per la gestione dei token di notifica e l’invio di notifiche push.
          </li>
        </ul>
        <p>L’uso della Piattaforma implica l’accettazione dei termini di tali servizi terzi, per quanto compatibili.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">6. Proprietà Intellettuale</h2>
        <p>
          Tutti i contenuti, il codice sorgente, il design e la documentazione della Piattaforma sono di proprietà di Marino Panariello. È vietata qualsiasi
          riproduzione o utilizzo oltre gli scopi operativi interni senza consenso scritto.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">7. Limitazione di Responsabilità</h2>
        <p>
          Il titolare adotta misure ragionevoli per garantire continuità e sicurezza del servizio, ma non può garantire assenza totale di interruzioni. Nei
          limiti consentiti dalla legge, è esclusa ogni responsabilità per danni indiretti, perdita di profitti o dati derivanti dall’uso della Piattaforma.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">8. Privacy e Cookie</h2>
        <p>
          Il trattamento dei dati personali è disciplinato dalla{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="/app/allparty-animation/privacy-policy.html">Privacy Policy</a> e l’utilizzo dei
          cookie è regolato dalla{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="/app/allparty-animation/cookie-policy.html">Cookie Policy</a>. L’utente è tenuto a consultarle regolarmente.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">9. Modifiche ai Termini</h2>
        <p>
          I Termini possono essere aggiornati per motivi tecnici, normativi o organizzativi. Le versioni aggiornate sono pubblicate sul sito ufficiale; l’uso
          continuato della Piattaforma implica accettazione delle modifiche.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">10. Legge Applicabile e Foro Competente</h2>
        <p>
          I Termini sono disciplinati dalla legge italiana. Per ogni controversia è competente in via esclusiva il Foro di Napoli, salvo diversa disposizione
          inderogabile di legge.
        </p>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>
          Per domande sui Termini, scrivi a{' '}
          <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a>.
        </p>
      </footer>
    </LegalLayout>
  )
}
