import { LegalLayout } from '../../../components/LegalLayout'

export const metadata = {
  title: 'Cookie Policy - Fiabe Magiche',
  description: 'Cookie Policy per l’app Fiabe Magiche con dettagli su cookie, dati tecnici e servizi di terze parti.',
}

export default function Page() {
  return (
    <LegalLayout>
      <header className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">COOKIE POLICY</h1>
        <p>
          <strong>Fiabe Magiche</strong>
          <br />
          <em>Ultimo aggiornamento: 14 Agosto 2025</em>
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">1. COSA SONO I COOKIE</h2>
        <p>
          I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo (computer, tablet, smartphone) durante la
          navigazione su un sito web o l&apos;utilizzo di un&apos;applicazione. Questi file permettono al sito o all&apos;app di
          &quot;ricordare&quot; le tue azioni e preferenze per un determinato periodo di tempo.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">2. UTILIZZO DEI COOKIE NELLA NOSTRA APP</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-700">2.1 App Mobile (iOS/Android)</h3>
          <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 px-5 py-4">
            <strong>BUONA NOTIZIA:</strong> La nostra applicazione mobile <strong>NON utilizza cookie tradizionali</strong> nel senso classico del termine.
          </div>
          <p>Tuttavia, per il corretto funzionamento dell&apos;app, utilizziamo:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Tipo di dato</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Finalità</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Durata</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Storage locale</td>
                  <td className="border border-slate-200 px-4 py-3">Salvare storie create e preferenze utente</td>
                  <td className="border border-slate-200 px-4 py-3">Fino alla disinstallazione</td>
                  <td className="border border-slate-200 px-4 py-3">Necessario</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Identificatori app</td>
                  <td className="border border-slate-200 px-4 py-3">Gestione abbonamenti RevenueCat</td>
                  <td className="border border-slate-200 px-4 py-3">Durata abbonamento</td>
                  <td className="border border-slate-200 px-4 py-3">Funzionale</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Preferenze sistema</td>
                  <td className="border border-slate-200 px-4 py-3">Impostazioni audio, tema, lingua</td>
                  <td className="border border-slate-200 px-4 py-3">Fino alla disinstallazione</td>
                  <td className="border border-slate-200 px-4 py-3">Necessario</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Cache temporanea</td>
                  <td className="border border-slate-200 px-4 py-3">Migliorare performance app</td>
                  <td className="border border-slate-200 px-4 py-3">7 giorni (pulizia automatica)</td>
                  <td className="border border-slate-200 px-4 py-3">Tecnico</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-700">2.2 Versione Web (se utilizzata)</h3>
          <p>Se accedi alla versione web della nostra applicazione, potrebbero essere utilizzati i seguenti cookie:</p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Nome</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Finalità</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Durata</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">session_id</td>
                  <td className="border border-slate-200 px-4 py-3">Mantenere la sessione utente attiva</td>
                  <td className="border border-slate-200 px-4 py-3">Sessione browser</td>
                  <td className="border border-slate-200 px-4 py-3">Necessario</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">preferences</td>
                  <td className="border border-slate-200 px-4 py-3">Ricordare le impostazioni scelte</td>
                  <td className="border border-slate-200 px-4 py-3">30 giorni</td>
                  <td className="border border-slate-200 px-4 py-3">Funzionale</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">language</td>
                  <td className="border border-slate-200 px-4 py-3">Ricordare la lingua selezionata</td>
                  <td className="border border-slate-200 px-4 py-3">1 anno</td>
                  <td className="border border-slate-200 px-4 py-3">Funzionale</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">3. COOKIE DI TERZE PARTI</h2>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-700">3.1 Servizi di intelligenza artificiale</h3>
          <p>I servizi AI che utilizziamo potrebbero impostare propri cookie quando generano contenuti:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Google Gemini</strong>: Per la generazione del testo delle storie
              <br />
              <em>
                Policy: <a className="text-blue-600 underline-offset-4 hover:underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy</a>
              </em>
            </li>
            <li>
              <strong>Runware API</strong>: Per la generazione delle immagini
              <br />
              <em>
                Policy: <a className="text-blue-600 underline-offset-4 hover:underline" href="https://runware.ai/privacy" target="_blank" rel="noopener noreferrer">https://runware.ai/privacy</a>
              </em>
            </li>
            <li>
              <strong>ElevenLabs</strong> (se utilizzato): Per la sintesi vocale premium
              <br />
              <em>
                Policy: <a className="text-blue-600 underline-offset-4 hover:underline" href="https://elevenlabs.io/privacy" target="_blank" rel="noopener noreferrer">https://elevenlabs.io/privacy</a>
              </em>
            </li>
          </ul>
          <div className="rounded-xl border-l-4 border-rose-500 bg-rose-50 px-5 py-4">
            <strong>IMPORTANTE:</strong> Questi servizi di terze parti potrebbero utilizzare cookie o tecnologie simili secondo le loro rispettive policy sulla privacy. Ti consigliamo di consultare le loro informative per maggiori dettagli.
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-slate-700">3.2 Gestione pagamenti</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>RevenueCat</strong>: Gestione abbonamenti e analisi uso
              <br />
              <em>
                Policy: <a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer">https://www.revenuecat.com/privacy</a>
              </em>
            </li>
            <li>
              <strong>Apple App Store / Google Play</strong>: Processamento pagamenti
              <br />
              <em>Secondo le rispettive policy di Apple e Google</em>
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">4. TIPOLOGIE DI COOKIE</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.1 Cookie necessari</h3>
          <p>Questi cookie sono essenziali per il funzionamento dell&apos;app e non possono essere disattivati. Includono:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Salvataggio delle storie create</li>
            <li>Mantenimento delle preferenze utente</li>
            <li>Funzionalità di sicurezza base</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.2 Cookie funzionali</h3>
          <p>Questi cookie migliorano l&apos;esperienza d&apos;uso e possono essere gestiti:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Ricordare la lingua scelta</li>
            <li>Salvare le impostazioni audio</li>
            <li>Mantenere le preferenze di personalizzazione</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.3 Cookie di performance</h3>
          <p>Ci aiutano a capire come viene utilizzata l&apos;app per migliorarla:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Statistiche d&apos;uso anonime</li>
            <li>Analisi delle prestazioni</li>
            <li>Identificazione di errori tecnici</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">5. GESTIONE DELLE PREFERENZE</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.1 App Mobile</h3>
          <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 px-5 py-4">
            <strong>Gestione semplificata:</strong> Nelle impostazioni dell&apos;app puoi:
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Cancellare tutti i dati salvati</li>
              <li>Disattivare il salvataggio delle preferenze</li>
              <li>Gestire le impostazioni di privacy</li>
              <li>Esportare o eliminare le tue storie</li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.2 Versione Web</h3>
          <p>Se utilizzi la versione web, puoi gestire i cookie tramite:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Impostazioni browser</strong>: Ogni browser permette di gestire i cookie nelle impostazioni
            </li>
            <li>
              <strong>Strumenti online</strong>: Estensioni per la gestione avanzata dei cookie
            </li>
            <li>
              <strong>Modalità incognito</strong>: Per navigare senza salvare cookie
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.3 Istruzioni per browser principali</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Chrome</strong>: Impostazioni → Privacy e sicurezza → Cookie e altri dati dei siti
            </li>
            <li>
              <strong>Firefox</strong>: Impostazioni → Privacy e sicurezza → Cookie e dati dei siti web
            </li>
            <li>
              <strong>Safari</strong>: Preferenze → Privacy → Gestisci dati siti web
            </li>
            <li>
              <strong>Edge</strong>: Impostazioni → Privacy, ricerca e servizi → Cookie
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">6. CONSEGUENZE DELLA DISATTIVAZIONE</h2>
        <div className="rounded-xl border-l-4 border-rose-500 bg-rose-50 px-5 py-4">
          <strong>Attenzione:</strong> La disattivazione di alcuni cookie potrebbe limitare le funzionalità dell&apos;app:
          <ul className="mt-3 list-disc space-y-2 pl-6">
            <li>Perdita delle storie salvate</li>
            <li>Reset delle preferenze ad ogni avvio</li>
            <li>Possibili problemi con gli abbonamenti</li>
            <li>Esperienza utente degradata</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">7. SICUREZZA E PROTEZIONE</h2>
        <p>Tutti i dati salvati localmente sono protetti da:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Crittografia</strong>: Dati sensibili crittografati
          </li>
          <li>
            <strong>Accesso limitato</strong>: Solo l&apos;app può accedere ai propri dati
          </li>
          <li>
            <strong>Pulizia automatica</strong>: Cache temporanea eliminata periodicamente
          </li>
          <li>
            <strong>Controllo utente</strong>: Possibilità di eliminare tutto in qualsiasi momento
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">8. AGGIORNAMENTI DELLA POLICY</h2>
        <p>Questa Cookie Policy può essere aggiornata periodicamente. Ti informeremo di modifiche significative tramite:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Notifica nell&apos;app</li>
          <li>Aggiornamento di questa pagina</li>
          <li>Email (se fornita)</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">9. CONTATTI</h2>
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
          <p className="font-semibold">Per domande sui cookie:</p>
          <p>Email: <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a></p>
          <p>Oggetto: &quot;Cookie Policy - Fiabe Magiche&quot;</p>
          <p className="mt-4 font-semibold">Risposta garantita entro: 30 giorni lavorativi</p>
          <p className="mt-4 font-semibold">Link utili:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <a className="text-blue-600 underline-offset-4 hover:underline" href="/app/storie-narrative/privacy-policy.html">Privacy Policy completa</a>
            </li>
            <li>
              <a className="text-blue-600 underline-offset-4 hover:underline" href="https://www.garanteprivacy.it/cookie" target="_blank" rel="noopener noreferrer">
                Guida Garante Privacy sui Cookie
              </a>
            </li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>© 2024 Fiabe Magiche. Tutti i diritti riservati.</p>
        <p>Questa Cookie Policy è conforme alle normative europee sui cookie e alla Direttiva ePrivacy</p>
      </footer>
    </LegalLayout>
  )
}
