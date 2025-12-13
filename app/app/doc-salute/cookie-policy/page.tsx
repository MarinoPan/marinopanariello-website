import { LegalLayout } from '../../../components/LegalLayout'

export const metadata = {
  title: 'Cookie Policy - Helsa',
  description: 'Cookie policy per l\'app Helsa con dettagli sui cookie tecnici, storage locale e servizi di terze parti.',
}

export default function Page() {
  return (
    <LegalLayout>
      <header className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Cookie Policy</h1>
        <p>
          <strong>Helsa</strong>
          <br />
          <em>Ultimo aggiornamento: 13 Dicembre 2024 | Versione 1.1</em>
        </p>
      </header>

      <section className="rounded-xl border-l-4 border-violet-500 bg-violet-50 px-5 py-4">
        <strong>Informativa sintetica:</strong> Helsa utilizza cookie e tecnologie similari esclusivamente per finalità tecniche essenziali al funzionamento dell&apos;applicazione. Non utilizziamo cookie per profilazione pubblicitaria. Per l&apos;analisi del servizio, utilizziamo strumenti che rispettano la privacy degli utenti.
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">1. Cosa sono i Cookie</h2>
        <p>I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web o utilizzi un&apos;applicazione. Servono a memorizzare informazioni utili per migliorare l&apos;esperienza di navigazione.</p>
        <p>Nel contesto di un&apos;applicazione mobile come Helsa, utilizziamo anche tecnologie equivalenti come:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Local Storage:</strong> memorizzazione locale nel browser o nell&apos;app</li>
          <li><strong>SQLite Database:</strong> database locale per dati offline</li>
          <li><strong>Secure Storage:</strong> memorizzazione sicura per dati sensibili</li>
          <li><strong>SDK Storage:</strong> dati memorizzati dai servizi di terze parti integrati</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">2. Base Giuridica</h2>
        <p>Ai sensi dell&apos;Art. 122 del Codice Privacy italiano e delle Linee Guida del Garante Privacy sui cookie (10 giugno 2021), distinguiamo tra:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Cookie tecnici:</strong> non richiedono consenso (Art. 122, comma 1)</li>
          <li><strong>Cookie analitici di prima parte:</strong> equiparati ai tecnici se anonimizzati</li>
          <li><strong>Cookie di profilazione:</strong> richiedono consenso preventivo (non utilizzati)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">3. Cookie e Tecnologie Utilizzate</h2>

        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-xl font-semibold text-slate-700 flex items-center gap-2">
              Cookie Tecnici Essenziali
              <span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-800">Necessari</span>
            </h3>
            <p className="mt-2">Questi cookie sono indispensabili per il funzionamento dell&apos;applicazione e non possono essere disattivati.</p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
                <thead className="bg-violet-100 text-slate-700">
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Nome</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Fornitore</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Finalità</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Durata</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">sb-access-token</td>
                    <td className="border border-slate-200 px-4 py-3">Supabase</td>
                    <td className="border border-slate-200 px-4 py-3">Token di autenticazione JWT</td>
                    <td className="border border-slate-200 px-4 py-3">1 ora</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">sb-refresh-token</td>
                    <td className="border border-slate-200 px-4 py-3">Supabase</td>
                    <td className="border border-slate-200 px-4 py-3">Token per rinnovo sessione</td>
                    <td className="border border-slate-200 px-4 py-3">7 giorni</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">auth_session</td>
                    <td className="border border-slate-200 px-4 py-3">Helsa</td>
                    <td className="border border-slate-200 px-4 py-3">Stato della sessione locale</td>
                    <td className="border border-slate-200 px-4 py-3">Sessione</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">biometric_enabled</td>
                    <td className="border border-slate-200 px-4 py-3">Helsa</td>
                    <td className="border border-slate-200 px-4 py-3">Preferenza autenticazione biometrica</td>
                    <td className="border border-slate-200 px-4 py-3">Persistente</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">onboarding_completed</td>
                    <td className="border border-slate-200 px-4 py-3">Helsa</td>
                    <td className="border border-slate-200 px-4 py-3">Stato completamento tutorial iniziale</td>
                    <td className="border border-slate-200 px-4 py-3">Persistente</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">theme_preference</td>
                    <td className="border border-slate-200 px-4 py-3">Helsa</td>
                    <td className="border border-slate-200 px-4 py-3">Preferenza tema chiaro/scuro</td>
                    <td className="border border-slate-200 px-4 py-3">Persistente</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-xl font-semibold text-slate-700 flex items-center gap-2">
              Storage Locale Database
              <span className="rounded bg-red-100 px-2 py-1 text-xs font-medium text-red-800">Necessario</span>
            </h3>
            <p className="mt-2">Helsa utilizza un database SQLite locale per permettere l&apos;utilizzo offline dell&apos;applicazione.</p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
                <thead className="bg-violet-100 text-slate-700">
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Nome</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Finalità</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Dati Memorizzati</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">helsa.db</td>
                    <td className="border border-slate-200 px-4 py-3">Database locale principale</td>
                    <td className="border border-slate-200 px-4 py-3">Documenti, appuntamenti, farmaci, categorie, profili</td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">sync_metadata</td>
                    <td className="border border-slate-200 px-4 py-3">Sincronizzazione cloud</td>
                    <td className="border border-slate-200 px-4 py-3">Timestamp ultima sync, stato sincronizzazione</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-xl font-semibold text-slate-700 flex items-center gap-2">
              Cookie di Autenticazione Social
              <span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">Su Richiesta</span>
            </h3>
            <p className="mt-2">Utilizzati solo se scegli di accedere con Apple ID o Google. Gestiti interamente dai rispettivi provider.</p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
                <thead className="bg-violet-100 text-slate-700">
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Provider</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Finalità</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Apple Sign In</td>
                    <td className="border border-slate-200 px-4 py-3">Autenticazione con Apple ID</td>
                    <td className="border border-slate-200 px-4 py-3">
                      <a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple Privacy</a>
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Google Sign In</td>
                    <td className="border border-slate-200 px-4 py-3">Autenticazione con account Google</td>
                    <td className="border border-slate-200 px-4 py-3">
                      <a className="text-blue-600 underline-offset-4 hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-xl font-semibold text-slate-700 flex items-center gap-2">
              Cookie Analitici e di Monitoraggio
              <span className="rounded bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">Analitici</span>
            </h3>
            <p className="mt-2">Utilizziamo strumenti per comprendere come viene utilizzata l&apos;applicazione e migliorare la stabilità del servizio.</p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
                <thead className="bg-violet-100 text-slate-700">
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Servizio</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Finalità</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Dati Raccolti</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Server</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3 font-semibold">PostHog</td>
                    <td className="border border-slate-200 px-4 py-3">Product analytics</td>
                    <td className="border border-slate-200 px-4 py-3">Eventi di utilizzo, info dispositivo, ID anonimo</td>
                    <td className="border border-slate-200 px-4 py-3 font-semibold">EU (eu.i.posthog.com)</td>
                    <td className="border border-slate-200 px-4 py-3">
                      <a className="text-blue-600 underline-offset-4 hover:underline" href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer">PostHog Privacy</a>
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Sentry</td>
                    <td className="border border-slate-200 px-4 py-3">Crash reporting e error tracking</td>
                    <td className="border border-slate-200 px-4 py-3">Stack trace errori, device info, breadcrumbs</td>
                    <td className="border border-slate-200 px-4 py-3">EU</td>
                    <td className="border border-slate-200 px-4 py-3">
                      <a className="text-blue-600 underline-offset-4 hover:underline" href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer">Sentry Privacy</a>
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Expo Analytics</td>
                    <td className="border border-slate-200 px-4 py-3">Metriche di utilizzo app</td>
                    <td className="border border-slate-200 px-4 py-3">Aperture app, versione, piattaforma</td>
                    <td className="border border-slate-200 px-4 py-3">USA</td>
                    <td className="border border-slate-200 px-4 py-3">
                      <a className="text-blue-600 underline-offset-4 hover:underline" href="https://expo.dev/privacy" target="_blank" rel="noopener noreferrer">Expo Privacy</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 space-y-3">
              <h4 className="text-lg font-semibold text-slate-700">Dettagli su PostHog</h4>
              <p>PostHog è il nostro strumento principale di product analytics. Ecco come lo utilizziamo:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold text-slate-700">Cosa raccogliamo:</p>
                  <ul className="list-disc space-y-1 pl-6 text-sm">
                    <li>Eventi del ciclo di vita dell&apos;app (apertura, chiusura, background)</li>
                    <li>Azioni nell&apos;app (navigazione tra schermate, utilizzo funzionalità)</li>
                    <li>Informazioni sul dispositivo (tipo, OS, versione app)</li>
                    <li>Identificatore utente anonimizzato</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-slate-700">Cosa NON raccogliamo:</p>
                  <ul className="list-disc space-y-1 pl-6 text-sm">
                    <li>Contenuto dei documenti sanitari</li>
                    <li>Dati personali identificativi</li>
                    <li>Informazioni sui farmaci o appuntamenti</li>
                    <li>Nessun dato sensibile</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-xl border-l-4 border-green-500 bg-green-50 px-5 py-4 mt-3">
                <p className="font-semibold">Garanzie GDPR:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm mt-2">
                  <li><strong>Server EU:</strong> tutti i dati sono elaborati e conservati nell&apos;Unione Europea (eu.i.posthog.com)</li>
                  <li><strong>Anonimizzazione:</strong> gli identificatori utente sono pseudonimizzati</li>
                  <li><strong>Nessuna profilazione pubblicitaria</strong></li>
                  <li><strong>Conservazione limitata:</strong> 2 anni</li>
                  <li>Puoi richiedere la cancellazione dei tuoi dati analytics contattandoci</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5">
            <h3 className="text-xl font-semibold text-slate-700 flex items-center gap-2">
              Cookie per Servizi di Pagamento
              <span className="rounded bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">Su Acquisto</span>
            </h3>
            <p className="mt-2">Attivati solo se decidi di sottoscrivere un abbonamento Pro.</p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
                <thead className="bg-violet-100 text-slate-700">
                  <tr>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Servizio</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Finalità</th>
                    <th className="border border-slate-200 px-4 py-3 font-semibold">Privacy Policy</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">RevenueCat</td>
                    <td className="border border-slate-200 px-4 py-3">Gestione abbonamenti e acquisti in-app</td>
                    <td className="border border-slate-200 px-4 py-3">
                      <a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">RevenueCat Privacy</a>
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Apple App Store</td>
                    <td className="border border-slate-200 px-4 py-3">Elaborazione pagamenti iOS</td>
                    <td className="border border-slate-200 px-4 py-3">
                      <a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer">Apple Privacy</a>
                    </td>
                  </tr>
                  <tr className="odd:bg-white even:bg-slate-50">
                    <td className="border border-slate-200 px-4 py-3">Google Play Store</td>
                    <td className="border border-slate-200 px-4 py-3">Elaborazione pagamenti Android</td>
                    <td className="border border-slate-200 px-4 py-3">
                      <a className="text-blue-600 underline-offset-4 hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">4. Cookie di Terze Parti</h2>
        <p>I servizi di terze parti integrati nell&apos;applicazione possono impostare propri cookie. Helsa non ha controllo diretto su questi cookie. Di seguito l&apos;elenco dei servizi utilizzati:</p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
            <thead className="bg-slate-100 text-slate-700">
              <tr>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Servizio</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Categoria</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Paese Server</th>
                <th className="border border-slate-200 px-4 py-3 font-semibold">Trasferimento Extra-UE</th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Supabase</td>
                <td className="border border-slate-200 px-4 py-3">Backend & Database</td>
                <td className="border border-slate-200 px-4 py-3">UE (Francoforte)</td>
                <td className="border border-slate-200 px-4 py-3">No</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3 font-semibold">PostHog</td>
                <td className="border border-slate-200 px-4 py-3 font-semibold">Product Analytics</td>
                <td className="border border-slate-200 px-4 py-3 font-semibold">UE</td>
                <td className="border border-slate-200 px-4 py-3 font-semibold">No</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Sentry</td>
                <td className="border border-slate-200 px-4 py-3">Error Tracking</td>
                <td className="border border-slate-200 px-4 py-3">UE</td>
                <td className="border border-slate-200 px-4 py-3">Possibile (SCC)</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">RevenueCat</td>
                <td className="border border-slate-200 px-4 py-3">Pagamenti</td>
                <td className="border border-slate-200 px-4 py-3">USA</td>
                <td className="border border-slate-200 px-4 py-3">Sì (DPF)</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Expo</td>
                <td className="border border-slate-200 px-4 py-3">Distribuzione App</td>
                <td className="border border-slate-200 px-4 py-3">USA</td>
                <td className="border border-slate-200 px-4 py-3">Sì (DPF)</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Apple</td>
                <td className="border border-slate-200 px-4 py-3">Auth & Pagamenti</td>
                <td className="border border-slate-200 px-4 py-3">USA/Irlanda</td>
                <td className="border border-slate-200 px-4 py-3">Sì (SCC)</td>
              </tr>
              <tr className="odd:bg-white even:bg-slate-50">
                <td className="border border-slate-200 px-4 py-3">Google</td>
                <td className="border border-slate-200 px-4 py-3">Auth & Pagamenti</td>
                <td className="border border-slate-200 px-4 py-3">USA/Irlanda</td>
                <td className="border border-slate-200 px-4 py-3">Sì (SCC)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p><strong>Legenda:</strong></p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>DPF:</strong> EU-US Data Privacy Framework</li>
          <li><strong>SCC:</strong> Standard Contractual Clauses (Clausole Contrattuali Standard)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">5. Come Gestiamo i Cookie nell&apos;App Mobile</h2>
        <p>Essendo Helsa un&apos;applicazione mobile nativa, la gestione dei cookie e dello storage locale avviene in modo diverso rispetto ai siti web tradizionali:</p>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.1 Storage Locale</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>I dati locali sono memorizzati nella sandbox dell&apos;applicazione</li>
            <li>Non sono accessibili da altre applicazioni</li>
            <li>Vengono eliminati con la disinstallazione dell&apos;app</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.2 Secure Storage</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Token di autenticazione e dati sensibili sono memorizzati in modo sicuro</li>
            <li>Su iOS: Keychain</li>
            <li>Su Android: Encrypted Shared Preferences</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.3 Eliminazione Dati</h3>
          <p>Per eliminare tutti i dati locali puoi:</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Usare la funzione &quot;Elimina account&quot; nelle impostazioni dell&apos;app</li>
            <li>Disinstallare l&apos;applicazione dal dispositivo</li>
            <li>Cancellare i dati dell&apos;app dalle impostazioni del sistema operativo</li>
          </ol>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">6. Come Gestire i Cookie sul Web</h2>
        <p>Se accedi a Helsa tramite browser web, puoi gestire i cookie attraverso le impostazioni del tuo browser:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie</li>
          <li><strong>Firefox:</strong> Impostazioni → Privacy e sicurezza → Cookie</li>
          <li><strong>Safari:</strong> Preferenze → Privacy → Gestisci dati siti web</li>
          <li><strong>Edge:</strong> Impostazioni → Cookie e autorizzazioni sito</li>
        </ul>
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4">
          <strong>Attenzione:</strong> La disattivazione dei cookie tecnici potrebbe compromettere il funzionamento dell&apos;applicazione.
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">7. I Tuoi Diritti</h2>
        <p>In relazione ai cookie e alle tecnologie di tracciamento, hai diritto a:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Essere informato</strong> su quali cookie utilizziamo (questa policy)</li>
          <li><strong>Rifiutare</strong> i cookie non essenziali (non ne utilizziamo)</li>
          <li><strong>Revocare</strong> il consenso in qualsiasi momento (per cookie opzionali)</li>
          <li><strong>Richiedere la cancellazione</strong> dei dati raccolti tramite cookie</li>
          <li><strong>Opporti</strong> al trattamento per finalità di marketing (non applicabile)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">8. Minori</h2>
        <p>Helsa non utilizza cookie per profilazione e non raccoglie dati per finalità di marketing. I cookie tecnici necessari al funzionamento del servizio sono gli stessi per tutti gli utenti, indipendentemente dall&apos;età.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">9. Aggiornamenti della Policy</h2>
        <p>Questa Cookie Policy può essere aggiornata periodicamente. Ti informeremo di eventuali modifiche significative tramite:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Notifica nell&apos;applicazione</li>
          <li>Aggiornamento della data &quot;Ultimo aggiornamento&quot; in cima a questo documento</li>
          <li>Email (se hai fornito il tuo indirizzo)</li>
        </ul>
        <p>Ti invitiamo a consultare periodicamente questa pagina per rimanere informato.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">10. Contatti</h2>
        <p>Per qualsiasi domanda relativa a questa Cookie Policy o al trattamento dei tuoi dati:</p>
        <div className="rounded-xl border border-slate-200 bg-violet-50 px-5 py-4">
          <p>
            <strong>Email:</strong> <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a>
            <br />
            <strong>Titolare:</strong> Marino Panariello
            <br />
            <strong>Indirizzo:</strong> Via Alcide De Gasperi 49, Torre del Greco (NA), Italia
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">11. Link Utili</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><a className="text-blue-600 underline-offset-4 hover:underline" href="/app/doc-salute/privacy-policy">Privacy Policy completa</a></li>
          <li><a className="text-blue-600 underline-offset-4 hover:underline" href="/app/doc-salute/terms-of-service">Termini di Servizio</a></li>
          <li><a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.garanteprivacy.it/cookie" target="_blank" rel="noopener noreferrer">Garante Privacy - Cookie</a></li>
          <li><a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer">Your Online Choices (opt-out pubblicità)</a></li>
        </ul>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>© 2024 Helsa. Tutti i diritti riservati.</p>
        <p>
          <a className="hover:underline" href="/app/doc-salute/privacy-policy">Privacy Policy</a> | <a className="hover:underline" href="/app/doc-salute/terms-of-service">Termini di Servizio</a> | <a className="hover:underline" href="/app/doc-salute/cookie-policy">Cookie Policy</a>
        </p>
      </footer>
    </LegalLayout>
  )
}
