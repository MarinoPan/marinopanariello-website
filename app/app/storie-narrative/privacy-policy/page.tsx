import { LegalLayout } from '../../../components/LegalLayout'

export const metadata = {
  title: 'Privacy Policy - Fiabe Magiche',
  description: 'Informativa sulla privacy dell’app Fiabe Magiche con dettagli su dati raccolti, finalità e diritti GDPR.',
}

export default function Page() {
  return (
    <LegalLayout>
      <header className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">INFORMATIVA SULLA PRIVACY</h1>
        <p>
          <strong>Fiabe Magiche</strong>
          <br />
          <em>Ultimo aggiornamento: 14 Agosto 2025</em>
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">1. CHI SIAMO</h2>
        <p>Fiabe Magiche è un&apos;applicazione mobile che permette ai bambini di creare storie personalizzate utilizzando intelligenza artificiale.</p>
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
          <p>
            <strong>Sviluppatore:</strong> Marino Panariello
            <br />
            <strong>Contatto:</strong> <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a>
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">2. INFORMAZIONI RACCOLTE</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">2.1 Dati forniti volontariamente</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Nome del bambino</strong> (opzionale): utilizzato solo per personalizzare le storie
            </li>
            <li>
              <strong>Età del bambino</strong>: per garantire contenuti appropriati all&apos;età
            </li>
            <li>
              <strong>Preferenze creative</strong>: ambientazioni e protagonisti preferiti per le storie
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">2.2 Dati generati dall&apos;app</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Storie create</strong>: testi, immagini e audio delle storie generate
            </li>
            <li>
              <strong>Preferenze di utilizzo</strong>: storie preferite e frequenza di lettura
            </li>
            <li>
              <strong>Dati tecnici minimi</strong>: versione app, tipo dispositivo (solo per supporto tecnico)
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">2.3 Dati di abbonamento</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Informazioni pagamento</strong>: gestite esclusivamente da Apple/Google tramite RevenueCat
            </li>
            <li>
              <strong>Status abbonamento</strong>: attivo/inattivo per abilitare funzioni premium
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">3. COME UTILIZZIAMO I DATI</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">3.1 Finalità principali</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Personalizzazione</strong>: creare storie su misura per il bambino
            </li>
            <li>
              <strong>Funzionalità app</strong>: salvare e organizzare le storie create
            </li>
            <li>
              <strong>Contenuti appropriati</strong>: filtrare contenuti in base all&apos;età
            </li>
            <li>
              <strong>Gestione abbonamenti</strong>: abilitare funzioni premium
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">3.2 Base giuridica (GDPR)</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Consenso</strong>: per dati opzionali come nome del bambino
            </li>
            <li>
              <strong>Interesse legittimo</strong>: per funzionalità essenziali dell&apos;app
            </li>
            <li>
              <strong>Esecuzione contratto</strong>: per gestione abbonamenti
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">4. CONDIVISIONE DATI</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.1 Servizi di intelligenza artificiale</h3>
          <p>Per generare le storie utilizziamo:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Google Gemini</strong>: per creare i testi delle storie
            </li>
            <li>
              <strong>Runware API</strong>: per generare immagini personalizzate
            </li>
            <li>
              <strong>Amazon Polly</strong>: per generare audio
            </li>
          </ul>
          <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50 px-5 py-4">
            <strong>IMPORTANTE:</strong> Questi servizi ricevono solo i parametri necessari (età, ambientazione, nome protagonista) ma NON hanno accesso alle storie salvate o ad altri dati personali.
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.2 Gestione pagamenti</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>RevenueCat</strong>: gestisce gli abbonamenti in modo sicuro
            </li>
            <li>
              <strong>App Store/Google Play</strong>: processano i pagamenti secondo le loro policy
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.3 Non condividiamo MAI</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Non vendiamo dati a terzi</li>
            <li>Non usiamo dati per pubblicità</li>
            <li>Non creiamo profili per marketing</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">5. SICUREZZA E CONSERVAZIONE</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.1 Archiviazione locale</h3>
          <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50 px-5 py-4">
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Tutti i dati sono salvati localmente</strong> sul dispositivo
              </li>
              <li>
                <strong>Crittografia</strong>: dati sensibili sono crittografati
              </li>
              <li>
                <strong>Nessun cloud</strong>: non carichiamo dati su server esterni
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.2 Conservazione</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Dati app</strong>: conservati fino alla disinstallazione
            </li>
            <li>
              <strong>Backup</strong>: solo locali, gestiti dall&apos;utente
            </li>
            <li>
              <strong>Cancellazione</strong>: possibile in qualsiasi momento dalle impostazioni
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">6. DIRITTI DELL&apos;UTENTE (GDPR)</h2>
        <p>Hai diritto a:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Accesso</strong>: vedere quali dati abbiamo
          </li>
          <li>
            <strong>Rettifica</strong>: correggere dati inesatti
          </li>
          <li>
            <strong>Cancellazione</strong>: eliminare tutti i dati
          </li>
          <li>
            <strong>Portabilità</strong>: esportare le tue storie
          </li>
          <li>
            <strong>Opposizione</strong>: opporti al trattamento
          </li>
          <li>
            <strong>Limitazione</strong>: limitare l&apos;uso dei dati
          </li>
        </ul>
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4">
          <strong>Come esercitare i diritti:</strong> Contattaci a marinopanariello@gmail.com o usa le impostazioni dell&apos;app.
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">7. BAMBINI E CONSENSO</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">7.1 Protezione minori</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>App progettata specificamente per bambini 0-12 anni</li>
            <li>Contenuti sempre appropriati e sicuri</li>
            <li>Nessuna raccolta di dati sensibili</li>
            <li>Controllo genitoriale integrato</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">7.2 Consenso genitoriale</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Sotto i 13 anni</strong>: richiesto consenso del genitore
            </li>
            <li>
              <strong>Installazione</strong>: implica consenso per funzionalità base
            </li>
            <li>
              <strong>Dati opzionali</strong>: consenso esplicito richiesto
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">8. TRASFERIMENTI INTERNAZIONALI</h2>
        <p>I servizi AI utilizzati possono comportare trasferimenti verso:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Stati Uniti</strong> (Google, Amazon)
          </li>
          <li>
            <strong>Europa</strong> (alcuni server Runware)
          </li>
        </ul>
        <p>Tutti i fornitori garantiscono protezioni adeguate secondo GDPR.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">9. MODIFICHE ALLA PRIVACY POLICY</h2>
        <p>Ti informeremo di modifiche significative tramite:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Notifica nell&apos;app</li>
          <li>Email (se fornita)</li>
          <li>Aggiornamento su questa pagina</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">10. CONTATTI E RECLAMI</h2>
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
          <p className="font-semibold">Per domande sulla privacy:</p>
          <p>Email: <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a></p>
          <p>Risposta entro: 30 giorni</p>
          <p className="mt-4 font-semibold">Per reclami:</p>
          <p>Puoi contattare l&apos;Autorità Garante per la protezione dei dati personali del tuo paese.</p>
          <p className="mt-4 font-semibold">Autorità di controllo Italia:</p>
          <p>Garante per la protezione dei dati personali<br />Email: garante@gpdp.it</p>
        </div>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p>© 2024 Fiabe Magiche. Tutti i diritti riservati.</p>
        <p>Questa informativa è conforme al Regolamento Generale sulla Protezione dei Dati (GDPR) UE 2016/679</p>
      </footer>
    </LegalLayout>
  )
}
