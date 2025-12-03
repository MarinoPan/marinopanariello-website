import { LegalLayout } from '../../../components/LegalLayout'

export const metadata = {
  title: 'Privacy Policy - DocSalute',
  description: 'Informativa sulla privacy per l\'app DocSalute con dettagli sulla raccolta dati, utilizzo e diritti GDPR.',
}

export default function Page() {
  return (
    <LegalLayout>
      <header className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Informativa sulla Privacy</h1>
        <p>
          <strong>DocSalute</strong>
          <br />
          <em>Ultimo aggiornamento: 3 Dicembre 2024 | Versione 1.0</em>
        </p>
      </header>

      <section className="rounded-xl border-l-4 border-violet-500 bg-violet-50 px-5 py-4">
        <strong>Sintesi:</strong> DocSalute raccoglie i tuoi dati sanitari per permetterti di archiviarli e gestirli. I dati sono criptati, sincronizzati in modo sicuro sui nostri server e <strong>non vengono mai venduti a terzi</strong>. Utilizziamo servizi di terze parti per autenticazione, storage, pagamenti e monitoraggio errori.
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">1. Titolare del Trattamento</h2>
        <p>Il Titolare del trattamento dei dati personali è:</p>
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
          <p>
            <strong>Marino Panariello</strong>
            <br />
            Email: <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a>
            <br />
            Indirizzo: Via Alcide De Gasperi 49, Torre del Greco (NA), Italia
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">2. Categorie di Dati Raccolti</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">2.1 Dati di Account</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Dato</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Finalità</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Base Giuridica</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Obbligatorietà</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Indirizzo email</td>
                  <td className="border border-slate-200 px-4 py-3">Registrazione, login, comunicazioni di servizio</td>
                  <td className="border border-slate-200 px-4 py-3">Contratto</td>
                  <td className="border border-slate-200 px-4 py-3"><span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-800">Obbligatorio</span></td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Password (hash bcrypt)</td>
                  <td className="border border-slate-200 px-4 py-3">Autenticazione sicura</td>
                  <td className="border border-slate-200 px-4 py-3">Contratto</td>
                  <td className="border border-slate-200 px-4 py-3"><span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-800">Obbligatorio</span></td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Nome/cognome</td>
                  <td className="border border-slate-200 px-4 py-3">Personalizzazione, intestazione documenti</td>
                  <td className="border border-slate-200 px-4 py-3">Contratto</td>
                  <td className="border border-slate-200 px-4 py-3"><span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">Facoltativo</span></td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Apple ID / Google ID</td>
                  <td className="border border-slate-200 px-4 py-3">Autenticazione social (se utilizzata)</td>
                  <td className="border border-slate-200 px-4 py-3">Contratto</td>
                  <td className="border border-slate-200 px-4 py-3"><span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">Facoltativo</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">2.2 Dati Sanitari (Categorie Particolari ex art. 9 GDPR)</h3>
          <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4">
            <strong>Dati Sensibili:</strong> I documenti che carichi possono contenere informazioni relative alla tua salute. Questi dati sono trattati <strong>esclusivamente</strong> per fornirti il servizio richiesto, sulla base del tuo <strong>consenso esplicito</strong> fornito al momento della registrazione.
          </div>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Categoria</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Esempi</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Conservazione</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Documenti sanitari</td>
                  <td className="border border-slate-200 px-4 py-3">Referti, prescrizioni, cartelle cliniche, esami</td>
                  <td className="border border-slate-200 px-4 py-3">Fino a cancellazione utente</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Allegati</td>
                  <td className="border border-slate-200 px-4 py-3">PDF, immagini di documenti medici</td>
                  <td className="border border-slate-200 px-4 py-3">Fino a cancellazione utente</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Appuntamenti medici</td>
                  <td className="border border-slate-200 px-4 py-3">Data, luogo, medico, specialità, note</td>
                  <td className="border border-slate-200 px-4 py-3">Fino a cancellazione utente</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Farmaci e terapie</td>
                  <td className="border border-slate-200 px-4 py-3">Nome farmaco, dosaggio, frequenza, promemoria</td>
                  <td className="border border-slate-200 px-4 py-3">Fino a cancellazione utente</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Profili familiari</td>
                  <td className="border border-slate-200 px-4 py-3">Nome, data nascita, relazione parentale</td>
                  <td className="border border-slate-200 px-4 py-3">Fino a cancellazione utente</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">2.3 Dati Tecnici (Raccolti Automaticamente)</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Dato</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Finalità</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Conservazione</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Tipo dispositivo, modello, OS</td>
                  <td className="border border-slate-200 px-4 py-3">Compatibilità, debug</td>
                  <td className="border border-slate-200 px-4 py-3">90 giorni</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Versione app</td>
                  <td className="border border-slate-200 px-4 py-3">Supporto, aggiornamenti</td>
                  <td className="border border-slate-200 px-4 py-3">90 giorni</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Indirizzo IP</td>
                  <td className="border border-slate-200 px-4 py-3">Sicurezza, geolocalizzazione server</td>
                  <td className="border border-slate-200 px-4 py-3">30 giorni</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Log di errore (crash report)</td>
                  <td className="border border-slate-200 px-4 py-3">Debug, miglioramento stabilità</td>
                  <td className="border border-slate-200 px-4 py-3">90 giorni</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Timestamp accessi</td>
                  <td className="border border-slate-200 px-4 py-3">Sicurezza, audit</td>
                  <td className="border border-slate-200 px-4 py-3">1 anno</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Identificatori anonimi</td>
                  <td className="border border-slate-200 px-4 py-3">Analytics aggregate</td>
                  <td className="border border-slate-200 px-4 py-3">2 anni</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">2.4 Dati di Pagamento</h3>
          <p>DocSalute <strong>non memorizza</strong> direttamente dati di carte di credito o metodi di pagamento. I pagamenti sono gestiti da:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Apple App Store</strong> - per utenti iOS</li>
            <li><strong>Google Play Store</strong> - per utenti Android</li>
            <li><strong>RevenueCat</strong> - per gestione abbonamenti cross-platform</li>
          </ul>
          <p>Riceviamo solo conferma dell&apos;avvenuto pagamento e stato dell&apos;abbonamento (attivo/scaduto).</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">3. Finalità e Basi Giuridiche del Trattamento</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Finalità</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Base Giuridica (GDPR)</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Dati Coinvolti</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Erogazione del servizio (archiviazione, sync, promemoria)</td>
                <td className="border border-slate-200 px-4 py-3">Art. 6.1.b - Esecuzione contratto</td>
                <td className="border border-slate-200 px-4 py-3">Account, documenti, appuntamenti, farmaci</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Trattamento dati sanitari</td>
                <td className="border border-slate-200 px-4 py-3">Art. 9.2.a - Consenso esplicito</td>
                <td className="border border-slate-200 px-4 py-3">Tutti i dati sanitari</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Gestione abbonamenti e fatturazione</td>
                <td className="border border-slate-200 px-4 py-3">Art. 6.1.b - Esecuzione contratto</td>
                <td className="border border-slate-200 px-4 py-3">Email, stato abbonamento</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Comunicazioni di servizio (sicurezza, aggiornamenti critici)</td>
                <td className="border border-slate-200 px-4 py-3">Art. 6.1.b - Esecuzione contratto</td>
                <td className="border border-slate-200 px-4 py-3">Email</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Monitoraggio errori e stabilità app</td>
                <td className="border border-slate-200 px-4 py-3">Art. 6.1.f - Legittimo interesse</td>
                <td className="border border-slate-200 px-4 py-3">Dati tecnici, crash report</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Analytics e miglioramento servizio</td>
                <td className="border border-slate-200 px-4 py-3">Art. 6.1.a - Consenso</td>
                <td className="border border-slate-200 px-4 py-3">Dati di utilizzo anonimizzati</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Adempimenti legali e fiscali</td>
                <td className="border border-slate-200 px-4 py-3">Art. 6.1.c - Obbligo legale</td>
                <td className="border border-slate-200 px-4 py-3">Dati transazionali</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">4. Servizi di Terze Parti (Sub-responsabili)</h2>
        <p>Per erogare il servizio, ci avvaliamo dei seguenti fornitori tecnologici:</p>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.1 Supabase Inc.</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Ruolo</th>
                  <td className="border border-slate-200 px-4 py-3">Database cloud, autenticazione, file storage</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Dati trattati</th>
                  <td className="border border-slate-200 px-4 py-3">Tutti i dati utente (criptati)</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Sede</th>
                  <td className="border border-slate-200 px-4 py-3">USA (con opzione server EU - Francoforte)</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Garanzie</th>
                  <td className="border border-slate-200 px-4 py-3">SOC 2 Type II, GDPR DPA, Standard Contractual Clauses</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Privacy Policy</th>
                  <td className="border border-slate-200 px-4 py-3">
                    <a className="text-blue-600 underline-offset-4 hover:underline" href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer">supabase.com/privacy</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.2 Sentry (Functional Software Inc.)</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Ruolo</th>
                  <td className="border border-slate-200 px-4 py-3">Monitoraggio errori e crash reporting</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Dati trattati</th>
                  <td className="border border-slate-200 px-4 py-3">Stack trace, info dispositivo, ID utente anonimizzato</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Sede</th>
                  <td className="border border-slate-200 px-4 py-3">USA (server EU disponibili)</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Garanzie</th>
                  <td className="border border-slate-200 px-4 py-3">SOC 2 Type II, GDPR DPA, Data Processing Addendum</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Privacy Policy</th>
                  <td className="border border-slate-200 px-4 py-3">
                    <a className="text-blue-600 underline-offset-4 hover:underline" href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">sentry.io/privacy</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.3 RevenueCat Inc.</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Ruolo</th>
                  <td className="border border-slate-200 px-4 py-3">Gestione abbonamenti in-app</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Dati trattati</th>
                  <td className="border border-slate-200 px-4 py-3">ID utente, stato abbonamento, ricevute acquisto</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Sede</th>
                  <td className="border border-slate-200 px-4 py-3">USA</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Garanzie</th>
                  <td className="border border-slate-200 px-4 py-3">GDPR compliant, DPA disponibile</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Privacy Policy</th>
                  <td className="border border-slate-200 px-4 py-3">
                    <a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">revenuecat.com/privacy</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.4 Apple Inc. / Google LLC</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Ruolo</th>
                  <td className="border border-slate-200 px-4 py-3">Distribuzione app, pagamenti in-app, autenticazione social</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Dati trattati</th>
                  <td className="border border-slate-200 px-4 py-3">Account Apple/Google (se usato per login), transazioni</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Privacy Policy</th>
                  <td className="border border-slate-200 px-4 py-3">
                    <a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple Privacy</a> | <a className="text-blue-600 underline-offset-4 hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.5 Expo / React Native (Meta)</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Ruolo</th>
                  <td className="border border-slate-200 px-4 py-3">Framework sviluppo, notifiche push, aggiornamenti OTA</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Dati trattati</th>
                  <td className="border border-slate-200 px-4 py-3">Push token, dati diagnostici</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <th className="border border-slate-200 bg-violet-50 px-4 py-3 font-semibold text-slate-700">Privacy Policy</th>
                  <td className="border border-slate-200 px-4 py-3">
                    <a className="text-blue-600 underline-offset-4 hover:underline" href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer">expo.dev/privacy</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">5. Trasferimento Dati Extra-UE</h2>
        <p>Alcuni dei nostri fornitori hanno sede negli Stati Uniti. Il trasferimento dei dati avviene nel rispetto del GDPR mediante:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Standard Contractual Clauses (SCC)</strong> - Clausole contrattuali tipo approvate dalla Commissione Europea</li>
          <li><strong>EU-US Data Privacy Framework</strong> - Per fornitori certificati</li>
          <li><strong>Binding Corporate Rules</strong> - Ove applicabili</li>
        </ul>
        <p>Puoi richiedere copia delle garanzie appropriate contattandoci all&apos;indirizzo email indicato.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">6. Conservazione dei Dati</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Categoria</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Periodo di Conservazione</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Dopo Cancellazione Account</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Dati account</td>
                <td className="border border-slate-200 px-4 py-3">Durata del rapporto contrattuale</td>
                <td className="border border-slate-200 px-4 py-3">Cancellati entro 30 giorni</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Documenti e allegati</td>
                <td className="border border-slate-200 px-4 py-3">Fino a cancellazione da parte dell&apos;utente</td>
                <td className="border border-slate-200 px-4 py-3">Cancellati entro 30 giorni</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Backup</td>
                <td className="border border-slate-200 px-4 py-3">30 giorni (rolling backup)</td>
                <td className="border border-slate-200 px-4 py-3">Purgati entro 60 giorni</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Log tecnici</td>
                <td className="border border-slate-200 px-4 py-3">90 giorni</td>
                <td className="border border-slate-200 px-4 py-3">N/A (anonimizzati)</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Dati di fatturazione</td>
                <td className="border border-slate-200 px-4 py-3">10 anni (obbligo fiscale)</td>
                <td className="border border-slate-200 px-4 py-3">Conservati per obbligo legale</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Consensi e audit trail</td>
                <td className="border border-slate-200 px-4 py-3">5 anni dall&apos;ultima interazione</td>
                <td className="border border-slate-200 px-4 py-3">Conservati per tutela legale</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">7. Sicurezza dei Dati</h2>
        <p>Implementiamo misure tecniche e organizzative adeguate:</p>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">Crittografia</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>TLS 1.3 per tutte le comunicazioni in transito</li>
            <li>AES-256 per dati a riposo nel database</li>
            <li>Hashing bcrypt per le password</li>
            <li>Expo SecureStore per token sul dispositivo</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">Controllo Accessi</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Row Level Security (RLS) su database</li>
            <li>Autenticazione JWT con refresh token</li>
            <li>Autenticazione biometrica opzionale (Face ID/Touch ID)</li>
            <li>Timeout sessione automatico</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">Infrastruttura</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Server in data center certificati (SOC 2, ISO 27001)</li>
            <li>Backup giornalieri automatici</li>
            <li>Monitoraggio 24/7 con alerting</li>
            <li>Piano di disaster recovery</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">8. I Tuoi Diritti (Artt. 15-22 GDPR)</h2>
        <p>In qualità di interessato, hai diritto a:</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Diritto</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Descrizione</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Come Esercitarlo</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3"><strong>Accesso</strong> (Art. 15)</td>
                <td className="border border-slate-200 px-4 py-3">Ottenere conferma del trattamento e copia dei tuoi dati</td>
                <td className="border border-slate-200 px-4 py-3">Email o funzione in-app</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3"><strong>Rettifica</strong> (Art. 16)</td>
                <td className="border border-slate-200 px-4 py-3">Correggere dati inesatti o incompleti</td>
                <td className="border border-slate-200 px-4 py-3">Direttamente in-app o email</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3"><strong>Cancellazione</strong> (Art. 17)</td>
                <td className="border border-slate-200 px-4 py-3">Richiedere l&apos;eliminazione dei tuoi dati (&quot;diritto all&apos;oblio&quot;)</td>
                <td className="border border-slate-200 px-4 py-3">Impostazioni → Elimina account</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3"><strong>Limitazione</strong> (Art. 18)</td>
                <td className="border border-slate-200 px-4 py-3">Limitare il trattamento in determinate circostanze</td>
                <td className="border border-slate-200 px-4 py-3">Email</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3"><strong>Portabilità</strong> (Art. 20)</td>
                <td className="border border-slate-200 px-4 py-3">Ricevere i dati in formato strutturato (JSON/CSV)</td>
                <td className="border border-slate-200 px-4 py-3">Impostazioni → Esporta dati</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3"><strong>Opposizione</strong> (Art. 21)</td>
                <td className="border border-slate-200 px-4 py-3">Opporti al trattamento per legittimo interesse</td>
                <td className="border border-slate-200 px-4 py-3">Email</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3"><strong>Revoca consenso</strong> (Art. 7)</td>
                <td className="border border-slate-200 px-4 py-3">Revocare il consenso in qualsiasi momento</td>
                <td className="border border-slate-200 px-4 py-3">Impostazioni o email</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Risponderemo entro <strong>30 giorni</strong> dalla richiesta. Per richieste complesse, il termine può essere esteso di ulteriori 60 giorni con preavviso motivato.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">9. Cancellazione Account e Dati</h2>
        <p>Puoi richiedere la cancellazione completa in due modi:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li><strong>In-app:</strong> Impostazioni → Account → Elimina account</li>
          <li><strong>Email:</strong> Scrivi a <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a></li>
        </ol>
        <p>La cancellazione comporta:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Eliminazione irreversibile di tutti i documenti e allegati</li>
          <li>Rimozione dei dati dai server entro 30 giorni</li>
          <li>Purging dei backup entro 60 giorni</li>
          <li>Conservazione dei soli dati necessari per obblighi legali</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">10. Minori</h2>
        <p>DocSalute non è destinato a minori di 16 anni. Non raccogliamo consapevolmente dati di minori di 16 anni senza il consenso verificabile di un genitore o tutore.</p>
        <p>Se sei un genitore e ritieni che tuo figlio abbia fornito dati personali, contattaci immediatamente per la rimozione.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">11. Cookie e Tecnologie di Tracciamento</h2>
        <p>L&apos;applicazione mobile <strong>non utilizza cookie</strong> nel senso tradizionale. Utilizziamo:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>SecureStore:</strong> Per memorizzare token di autenticazione in modo sicuro sul dispositivo</li>
          <li><strong>AsyncStorage:</strong> Per preferenze utente e cache locale</li>
          <li><strong>SQLite:</strong> Per archiviazione offline dei documenti</li>
        </ul>
        <p>Per maggiori dettagli, consulta la nostra <a className="text-blue-600 underline-offset-4 hover:underline" href="/app/doc-salute/cookie-policy">Cookie Policy</a>.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">12. Modifiche alla Privacy Policy</h2>
        <p>Ci riserviamo di aggiornare questa informativa. In caso di modifiche sostanziali:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Ti invieremo una notifica in-app</li>
          <li>Ti invieremo un&apos;email (se hai un account)</li>
          <li>Aggiorneremo la data &quot;Ultimo aggiornamento&quot;</li>
          <li>Per modifiche che richiedono nuovo consenso, lo richiederemo esplicitamente</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">13. Reclami</h2>
        <p>Se ritieni che il trattamento dei tuoi dati violi il GDPR, hai diritto di proporre reclamo a:</p>
        <div className="rounded-xl border border-slate-200 bg-orange-50 px-5 py-4">
          <p>
            <strong>Garante per la Protezione dei Dati Personali</strong>
            <br />
            Piazza Venezia 11 - 00187 Roma
            <br />
            Email: <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:protocollo@gpdp.it">protocollo@gpdp.it</a>
            <br />
            PEC: <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:protocollo@pec.gpdp.it">protocollo@pec.gpdp.it</a>
            <br />
            Sito: <a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">14. Contatti</h2>
        <div className="rounded-xl border border-slate-200 bg-violet-50 px-5 py-4 space-y-4">
          <div>
            <p className="font-semibold">Per questioni relative alla privacy:</p>
            <p>Email: <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a></p>
          </div>
          <div>
            <p className="font-semibold">Titolare del trattamento:</p>
            <p>
              Marino Panariello
              <br />
              Via Alcide De Gasperi 49, Torre del Greco (NA), Italia
              <br />
              Email: <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>© 2024 DocSalute. Tutti i diritti riservati.</p>
        <p>Questa informativa è stata redatta in conformità al Regolamento UE 2016/679 (GDPR).</p>
      </footer>
    </LegalLayout>
  )
}
