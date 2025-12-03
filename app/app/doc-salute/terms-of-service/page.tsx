import { LegalLayout } from '../../../components/LegalLayout'

export const metadata = {
  title: 'Termini di Servizio - DocSalute',
  description: 'Termini e condizioni di servizio per l\'app DocSalute, che copre regole d\'utilizzo, abbonamenti, protezione dati e diritti degli utenti.',
}

export default function Page() {
  return (
    <LegalLayout>
      <header className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">Termini e Condizioni di Servizio</h1>
        <p>
          <strong>DocSalute</strong>
          <br />
          <em>Ultimo aggiornamento: 3 Dicembre 2024 | Versione 1.0</em>
        </p>
      </header>

      <section className="rounded-xl border-l-4 border-violet-500 bg-violet-50 px-5 py-4">
        <strong>Sintesi:</strong> DocSalute ti permette di archiviare e gestire i tuoi documenti sanitari. Usando l&apos;app accetti questi termini. L&apos;app <strong>non fornisce consulenza medica</strong>. Sei responsabile dei contenuti che carichi.
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">1. Definizioni</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>&quot;Servizio&quot;</strong>: L&apos;applicazione mobile DocSalute e tutte le sue funzionalità</li>
          <li><strong>&quot;Utente&quot; / &quot;Tu&quot;</strong>: Qualsiasi persona che utilizza il Servizio</li>
          <li><strong>&quot;Titolare&quot; / &quot;Noi&quot;</strong>: Marino Panariello, proprietario e gestore di DocSalute</li>
          <li><strong>&quot;Contenuti&quot;</strong>: Documenti, immagini, dati e informazioni caricati dall&apos;Utente</li>
          <li><strong>&quot;Account&quot;</strong>: L&apos;insieme di credenziali e dati associati a un Utente registrato</li>
          <li><strong>&quot;Abbonamento Pro&quot;</strong>: Piano a pagamento con funzionalità aggiuntive</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">2. Accettazione dei Termini</h2>
        <p>Accedendo o utilizzando DocSalute, dichiari di:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Aver letto, compreso e accettato integralmente questi Termini</li>
          <li>Aver letto e accettato la nostra <a className="text-blue-600 underline-offset-4 hover:underline" href="/app/doc-salute/privacy-policy">Privacy Policy</a></li>
          <li>Avere almeno 16 anni di età</li>
          <li>Avere la capacità giuridica di stipulare contratti vincolanti</li>
        </ul>
        <p>Se non accetti questi Termini, non puoi utilizzare il Servizio.</p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">3. Descrizione del Servizio</h2>
        <p>DocSalute è un&apos;applicazione mobile che consente di:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Archiviare e organizzare documenti sanitari (referti, prescrizioni, esami)</li>
          <li>Gestire appuntamenti medici con promemoria</li>
          <li>Tracciare farmaci e terapie con reminder giornalieri</li>
          <li>Creare profili per i membri della famiglia</li>
          <li>Sincronizzare i dati tra dispositivi (con account registrato)</li>
          <li>Funzionare offline con sincronizzazione automatica</li>
        </ul>

        <div className="rounded-xl border-l-4 border-red-500 bg-red-50 px-5 py-4">
          <strong>DISCLAIMER MEDICO IMPORTANTE</strong>
          <p className="mt-2">DocSalute è uno strumento di <strong>organizzazione personale</strong> e <strong>NON</strong>:</p>
          <ul className="list-disc space-y-2 pl-6 mt-2">
            <li>Fornisce diagnosi mediche</li>
            <li>Offre consulenza o raccomandazioni mediche</li>
            <li>Sostituisce il parere di medici o professionisti sanitari</li>
            <li>È un dispositivo medico certificato</li>
          </ul>
          <p className="mt-3"><strong>Per qualsiasi decisione relativa alla tua salute, consulta SEMPRE un medico qualificato.</strong></p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">4. Registrazione e Account</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.1 Creazione Account</h3>
          <p>Per utilizzare le funzionalità di sincronizzazione cloud, devi creare un account fornendo:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Un indirizzo email valido e accessibile</li>
            <li>Una password sicura (minimo 6 caratteri)</li>
          </ul>
          <p>Puoi anche registrarti tramite Apple ID o Google Account.</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.2 Obblighi dell&apos;Utente</h3>
          <p>Ti impegni a:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Fornire informazioni accurate e veritiere</li>
            <li>Mantenere aggiornati i dati del tuo account</li>
            <li>Custodire le credenziali di accesso in modo sicuro</li>
            <li>Non condividere l&apos;accesso al tuo account con terzi</li>
            <li>Notificarci immediatamente in caso di accesso non autorizzato</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.3 Sicurezza dell&apos;Account</h3>
          <p>Sei l&apos;unico responsabile di tutte le attività effettuate con il tuo account. Ti consigliamo di:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Utilizzare una password unica e complessa</li>
            <li>Attivare l&apos;autenticazione biometrica (Face ID/Touch ID)</li>
            <li>Non accedere da dispositivi condivisi o non sicuri</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">5. Piani e Abbonamenti</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.1 Piano Gratuito</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Funzionalità</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Limite</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Documenti archiviabili</td>
                  <td className="border border-slate-200 px-4 py-3">5 documenti</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Profili familiari</td>
                  <td className="border border-slate-200 px-4 py-3">1 profilo</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Funzionalità offline</td>
                  <td className="border border-slate-200 px-4 py-3">Base</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Sincronizzazione cloud</td>
                  <td className="border border-slate-200 px-4 py-3">Limitata</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.2 Abbonamento Pro</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Funzionalità</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Incluso</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Documenti archiviabili</td>
                  <td className="border border-slate-200 px-4 py-3">Illimitati</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Profili familiari</td>
                  <td className="border border-slate-200 px-4 py-3">Illimitati</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Sincronizzazione cloud</td>
                  <td className="border border-slate-200 px-4 py-3">Completa</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Backup automatici</td>
                  <td className="border border-slate-200 px-4 py-3">Inclusi</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Supporto prioritario</td>
                  <td className="border border-slate-200 px-4 py-3">Incluso</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.3 Prezzi e Fatturazione</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Piano</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Prezzo</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Pro Mensile</td>
                  <td className="border border-slate-200 px-4 py-3">€2,99/mese</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Pro Annuale</td>
                  <td className="border border-slate-200 px-4 py-3">€19,99/anno (risparmio ~44%)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>I prezzi sono IVA inclusa e possono variare in base al paese. Il prezzo definitivo è mostrato nello store.</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.4 Rinnovo e Cancellazione</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>L&apos;abbonamento si rinnova <strong>automaticamente</strong> alla scadenza</li>
            <li>Puoi cancellare in qualsiasi momento dalle impostazioni dello store</li>
            <li>La cancellazione deve avvenire almeno <strong>24 ore prima</strong> del rinnovo</li>
            <li>Dopo la cancellazione, l&apos;accesso Pro rimane attivo fino a fine periodo</li>
            <li>Al termine, l&apos;account torna al piano Gratuito (i dati vengono conservati)</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.5 Rimborsi</h3>
          <p>I rimborsi sono gestiti secondo le politiche di:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li><strong>Apple App Store:</strong> <a className="text-blue-600 underline-offset-4 hover:underline" href="https://support.apple.com/it-it/HT204084" target="_blank" rel="noopener noreferrer">Richiedi rimborso Apple</a></li>
            <li><strong>Google Play Store:</strong> <a className="text-blue-600 underline-offset-4 hover:underline" href="https://support.google.com/googleplay/answer/2479637" target="_blank" rel="noopener noreferrer">Richiedi rimborso Google</a></li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">6. Contenuti dell&apos;Utente</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">6.1 Proprietà</h3>
          <p>Mantieni <strong>tutti i diritti</strong> sui contenuti che carichi su DocSalute. Non rivendichiamo alcuna proprietà intellettuale sui tuoi documenti.</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">6.2 Licenza Limitata</h3>
          <p>Caricando contenuti, ci concedi una licenza limitata, non esclusiva e revocabile per:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Archiviare i contenuti sui nostri server</li>
            <li>Sincronizzarli tra i tuoi dispositivi</li>
            <li>Creare backup per la sicurezza dei dati</li>
            <li>Visualizzarli nell&apos;app a te solo</li>
          </ul>
          <p>Questa licenza termina automaticamente alla cancellazione dei contenuti o dell&apos;account.</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">6.3 Responsabilità sui Contenuti</h3>
          <p>Sei l&apos;unico responsabile dei contenuti che carichi e garantisci che:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Hai il diritto di caricarli (sono tuoi o hai autorizzazione)</li>
            <li>Non violano diritti di terzi (privacy, copyright, etc.)</li>
            <li>Non contengono materiale illegale</li>
            <li>Non contengono malware o codice dannoso</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">6.4 Backup e Perdita Dati</h3>
          <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4">
            <strong>Importante:</strong> Sebbene effettuiamo backup regolari, ti consigliamo di mantenere <strong>copie locali</strong> dei documenti più importanti. Non siamo responsabili per eventuali perdite di dati dovute a cause di forza maggiore, errori tecnici o cancellazione accidentale da parte tua.
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">7. Uso Accettabile</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">7.1 Usi Consentiti</h3>
          <p>Puoi utilizzare DocSalute per:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Archiviare i tuoi documenti sanitari personali</li>
            <li>Gestire documenti di familiari con il loro consenso</li>
            <li>Organizzare appuntamenti e promemoria medici</li>
            <li>Qualsiasi uso personale e non commerciale</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">7.2 Usi Vietati</h3>
          <p>È severamente vietato:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Caricare contenuti illegali, offensivi o che violano diritti di terzi</li>
            <li>Tentare di accedere a dati di altri utenti</li>
            <li>Utilizzare l&apos;app per scopi commerciali senza autorizzazione</li>
            <li>Reverse engineering, decompilare o disassemblare l&apos;app</li>
            <li>Utilizzare bot, scraper o metodi automatizzati</li>
            <li>Interferire con il funzionamento del servizio</li>
            <li>Eludere misure di sicurezza o limitazioni</li>
            <li>Rivendere o sublicenziare l&apos;accesso al servizio</li>
            <li>Impersonare altri utenti o entità</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">8. Proprietà Intellettuale</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">8.1 Diritti del Titolare</h3>
          <p>DocSalute, inclusi:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Nome, logo e marchi</li>
            <li>Design, interfaccia grafica e UX</li>
            <li>Codice sorgente e architettura software</li>
            <li>Documentazione e contenuti editoriali</li>
          </ul>
          <p>Sono di proprietà esclusiva del Titolare e protetti dalle leggi sulla proprietà intellettuale.</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">8.2 Licenza d&apos;Uso</h3>
          <p>Ti concediamo una licenza:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Limitata, non esclusiva e non trasferibile</li>
            <li>Per uso personale e non commerciale</li>
            <li>Revocabile in caso di violazione dei Termini</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">9. Privacy e Protezione Dati</h2>
        <p>Il trattamento dei tuoi dati personali è regolato dalla nostra <a className="text-blue-600 underline-offset-4 hover:underline" href="/app/doc-salute/privacy-policy">Privacy Policy</a>, che costituisce parte integrante di questi Termini.</p>
        <p>In particolare:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>I dati sanitari sono trattati con il tuo consenso esplicito</li>
          <li>Utilizziamo crittografia per proteggere i tuoi dati</li>
          <li>Puoi richiedere cancellazione, export e accesso ai tuoi dati</li>
          <li>Non vendiamo i tuoi dati a terzi</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">10. Limitazione di Responsabilità</h2>

        <div className="rounded-xl border-l-4 border-red-500 bg-red-50 px-5 py-4">
          <strong>IL SERVIZIO È FORNITO &quot;COSÌ COM&apos;È&quot; (AS IS)</strong>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">10.1 Esclusione di Garanzie</h3>
          <p>Nei limiti consentiti dalla legge, escludiamo ogni garanzia, espressa o implicita, incluse:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Garanzie di commerciabilità o idoneità per uno scopo particolare</li>
            <li>Garanzie che il servizio sia privo di errori o interruzioni</li>
            <li>Garanzie sulla sicurezza assoluta dei dati</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">10.2 Limitazione Danni</h3>
          <p>In nessun caso saremo responsabili per:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Danni indiretti, incidentali, speciali o consequenziali</li>
            <li>Perdita di dati, profitti o opportunità commerciali</li>
            <li>Decisioni mediche basate su informazioni nell&apos;app</li>
            <li>Danni derivanti da accesso non autorizzato al tuo account</li>
            <li>Malfunzionamenti di servizi di terze parti</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">10.3 Limite Massimo</h3>
          <p>La nostra responsabilità totale nei tuoi confronti, per qualsiasi causa, è limitata al <strong>maggiore tra</strong>:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>L&apos;importo pagato per l&apos;abbonamento negli ultimi 12 mesi</li>
            <li>€50,00 (cinquanta euro)</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">10.4 Eccezioni</h3>
          <p>Le limitazioni di cui sopra non si applicano in caso di:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Dolo o colpa grave</li>
            <li>Violazione di diritti inderogabili del consumatore</li>
            <li>Quanto diversamente previsto da norme imperative</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">11. Indennizzo</h2>
        <p>Accetti di indennizzare, difendere e manlevare il Titolare da qualsiasi reclamo, danno, perdita, responsabilità e spesa (incluse le spese legali) derivanti da:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Il tuo utilizzo del Servizio</li>
          <li>La violazione di questi Termini</li>
          <li>La violazione di diritti di terzi</li>
          <li>Contenuti da te caricati</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">12. Modifiche al Servizio e ai Termini</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">12.1 Modifiche al Servizio</h3>
          <p>Ci riserviamo il diritto di:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Aggiungere, modificare o rimuovere funzionalità</li>
            <li>Aggiornare i prezzi (con preavviso di 30 giorni)</li>
            <li>Interrompere il servizio con preavviso ragionevole</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">12.2 Modifiche ai Termini</h3>
          <p>Possiamo aggiornare questi Termini. In caso di modifiche sostanziali:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Ti avviseremo via email e/o notifica in-app</li>
            <li>Pubblicheremo i nuovi Termini con almeno 30 giorni di anticipo</li>
            <li>L&apos;uso continuato dopo la modifica costituisce accettazione</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">13. Sospensione e Terminazione</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">13.1 Terminazione da Parte Tua</h3>
          <p>Puoi terminare il tuo account in qualsiasi momento da:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Impostazioni → Account → Elimina account</li>
            <li>Inviando richiesta a <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">13.2 Terminazione da Parte Nostra</h3>
          <p>Possiamo sospendere o terminare il tuo account se:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Violi questi Termini</li>
            <li>Usi il servizio in modo fraudolento o illegale</li>
            <li>Non paghi l&apos;abbonamento dovuto</li>
            <li>Il tuo account risulta inattivo per oltre 24 mesi</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">13.3 Effetti della Terminazione</h3>
          <p>Alla terminazione:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Perderai l&apos;accesso ai dati sincronizzati nel cloud</li>
            <li>I dati locali sul dispositivo rimarranno accessibili</li>
            <li>I dati nel cloud saranno eliminati entro 30 giorni</li>
            <li>L&apos;eventuale abbonamento attivo non sarà rimborsato</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">14. Legge Applicabile e Foro Competente</h2>
        <p>Questi Termini sono regolati dalla <strong>legge italiana</strong>.</p>
        <p>Per qualsiasi controversia è competente in via esclusiva il <strong>Foro di Napoli</strong>, salvo diversa disposizione inderogabile di legge (es. foro del consumatore).</p>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">14.1 Diritti dei Consumatori UE</h3>
          <p>Se sei un consumatore residente nell&apos;Unione Europea, restano salvi i diritti previsti dalla normativa del tuo paese di residenza, incluso il diritto di adire il giudice del luogo di residenza.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">15. Risoluzione Alternativa delle Controversie</h2>
        <p>In caso di controversia, ti invitiamo a contattarci prima di intraprendere azioni legali. Faremo del nostro meglio per risolvere il problema in modo amichevole.</p>
        <p><strong>Piattaforma ODR:</strong> Se sei un consumatore UE, puoi utilizzare la piattaforma di risoluzione delle controversie online della Commissione Europea: <a className="text-blue-600 underline-offset-4 hover:underline" href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr</a></p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">16. Disposizioni Generali</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li><strong>Intero Accordo:</strong> Questi Termini, insieme alla Privacy Policy, costituiscono l&apos;intero accordo tra te e noi</li>
          <li><strong>Rinuncia:</strong> Il mancato esercizio di un diritto non costituisce rinuncia</li>
          <li><strong>Separabilità:</strong> Se una clausola è invalida, le altre rimangono in vigore</li>
          <li><strong>Cessione:</strong> Non puoi cedere questi Termini. Noi possiamo cederli a un successore</li>
          <li><strong>Forza Maggiore:</strong> Non siamo responsabili per inadempimenti dovuti a cause di forza maggiore</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">17. Contatti</h2>
        <div className="rounded-xl border border-slate-200 bg-violet-50 px-5 py-4 space-y-4">
          <div>
            <p className="font-semibold">Per domande sui Termini:</p>
            <p>Email: <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a></p>
          </div>
          <div>
            <p className="font-semibold">Titolare:</p>
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
        <p>Questi Termini sono redatti in conformità al Codice del Consumo (D.Lgs. 206/2005) e al Codice Civile italiano.</p>
      </footer>
    </LegalLayout>
  )
}
