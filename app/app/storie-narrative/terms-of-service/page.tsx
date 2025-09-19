import { LegalLayout } from '../../../components/LegalLayout'

export const metadata = {
  title: 'Termini e Condizioni - Fiabe Magiche',
  description: 'Termini e Condizioni d’uso dell’app Fiabe Magiche per la creazione di storie personalizzate.',
}

export default function Page() {
  return (
    <LegalLayout>
      <header className="space-y-2 border-b border-slate-200 pb-6">
        <h1 className="text-3xl font-semibold tracking-tight">TERMINI E CONDIZIONI D&apos;USO</h1>
        <p>
          <strong>Fiabe Magiche</strong>
          <br />
          <em>Ultimo aggiornamento: 14 Agosto 2025</em>
        </p>
      </header>

      <section className="rounded-xl border-l-4 border-rose-500 bg-rose-50 px-5 py-4">
        <strong>IMPORTANTE:</strong> Leggendo e utilizzando questa applicazione, accetti integralmente questi Termini e Condizioni. Se non accetti questi termini, non utilizzare l&apos;applicazione.
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">1. INFORMAZIONI GENERALI</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">1.1 Chi siamo</h3>
          <p>
            <strong>Fiabe Magiche</strong> è un&apos;applicazione mobile sviluppata da:
          </p>
          <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4">
            <p>
              <strong>Sviluppatore:</strong> Marino Panariello
              <br />
              <strong>Email:</strong> <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a>
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">1.2 Cosa offriamo</h3>
          <p>L&apos;applicazione permette di creare storie personalizzate per bambini (0-12 anni) utilizzando intelligenza artificiale, con generazione di:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Testi narrativi personalizzati</li>
            <li>Immagini illustrative generate dall&apos;AI</li>
            <li>Audio e narrazione delle storie</li>
            <li>Funzionalità di salvataggio e organizzazione</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">2. ACCETTAZIONE DEI TERMINI</h2>
        <p>Utilizzando l&apos;applicazione, confermi di:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Aver letto e compreso integralmente questi Termini</li>
          <li>Accettare tutti i termini e condizioni qui specificati</li>
          <li>Avere l&apos;autorità legale per accettare questi termini</li>
          <li>Essere maggiorenne o avere il consenso di un genitore/tutore</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">3. UTILIZZO DELL&apos;APPLICAZIONE</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">3.1 Licenza d&apos;uso</h3>
          <p>Ti concediamo una licenza limitata, non esclusiva, non trasferibile e revocabile per utilizzare l&apos;applicazione esclusivamente per uso personale e non commerciale.</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">3.2 Usi consentiti</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Creare storie per uso personale e familiare</li>
            <li>Salvare e organizzare le storie create</li>
            <li>Condividere storie con familiari e amici</li>
            <li>Utilizzare le funzionalità audio per la lettura</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">3.3 Usi vietati</h3>
          <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4">
            <strong>È SEVERAMENTE VIETATO:</strong>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Utilizzare l&apos;app per scopi commerciali senza autorizzazione</li>
              <li>Vendere, rivendere o monetizzare le storie generate</li>
              <li>Copiare, modificare o distribuire il software dell&apos;app</li>
              <li>Tentare di reverse engineering del codice</li>
              <li>Utilizzare bot o sistemi automatizzati</li>
              <li>Creare contenuti inappropriati, offensivi o illegali</li>
              <li>Violare i diritti di proprietà intellettuale</li>
              <li>Aggirare le limitazioni tecniche dell&apos;app</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">4. ABBONAMENTI E PAGAMENTI</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.1 Modello freemium</h3>
          <p>L&apos;applicazione offre:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Versione gratuita</strong>: 3 storie gratuite
            </li>
            <li>
              <strong>Abbonamento Premium</strong>: 20 storie al mese e funzionalità avanzate
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.2 Prezzi e piani</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse overflow-hidden rounded-xl text-left text-sm shadow-sm">
              <thead className="bg-slate-100 text-slate-700">
                <tr>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Piano</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Prezzo</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Durata</th>
                  <th className="border border-slate-200 px-4 py-3 font-semibold">Caratteristiche</th>
                </tr>
              </thead>
              <tbody>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Gratuito</td>
                  <td className="border border-slate-200 px-4 py-3">€0</td>
                  <td className="border border-slate-200 px-4 py-3">Sempre</td>
                  <td className="border border-slate-200 px-4 py-3">3 storie + funzionalità base</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Premium Mensile</td>
                  <td className="border border-slate-200 px-4 py-3">€2,99/mese</td>
                  <td className="border border-slate-200 px-4 py-3">30 giorni</td>
                  <td className="border border-slate-200 px-4 py-3">20 Storie al mese</td>
                </tr>
                <tr className="odd:bg-white even:bg-slate-50">
                  <td className="border border-slate-200 px-4 py-3">Premium Annuale</td>
                  <td className="border border-slate-200 px-4 py-3">€19,99/anno</td>
                  <td className="border border-slate-200 px-4 py-3">365 giorni</td>
                  <td className="border border-slate-200 px-4 py-3">240 Storie all&apos;anno</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">4.3 Gestione abbonamenti</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Rinnovo automatico</strong>: Gli abbonamenti si rinnovano automaticamente
            </li>
            <li>
              <strong>Cancellazione</strong>: Gestisci tramite App Store/Google Play
            </li>
            <li>
              <strong>Downgrade</strong>: Le funzionalità premium cessano alla scadenza
            </li>
            <li>
              <strong>Rimborsi</strong>: Secondo le policy di Apple/Google
            </li>
          </ul>
        </div>

        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4">
          Ci riserviamo il diritto di modificare i prezzi con preavviso di 30 giorni. Le modifiche non influenzeranno gli abbonamenti già attivi fino al rinnovo successivo.
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">5. CONTENUTI E PROPRIETÀ INTELLETTUALE</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.1 Contenuti generati dall&apos;AI</h3>
          <p>Le storie generate dall&apos;intelligenza artificiale sono create in base ai tuoi input e parametri. Riconosci che:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>I contenuti sono generati algoritmicamente</li>
            <li>Non garantiamo unicità assoluta dei contenuti</li>
            <li>L&apos;AI può produrre contenuti simili per richieste simili</li>
            <li>Tutti i contenuti sono filtrati per appropriatezza</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.2 Proprietà delle storie create</h3>
          <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 px-5 py-4">
            <strong>TUE STORIE:</strong> Mantieni la proprietà delle storie che crei, inclusi testi, immagini e audio generati per te. Puoi utilizzarle liberamente per uso personale.
          </div>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.3 Proprietà dell&apos;applicazione</h3>
          <p>L&apos;applicazione, il suo codice, design, interfaccia e tecnologia rimangono di nostra proprietà esclusiva.</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">5.4 Limitazioni d&apos;uso commerciale</h3>
          <div className="rounded-xl border-l-4 border-rose-500 bg-rose-50 px-5 py-4">
            <strong>USO COMMERCIALE:</strong> L&apos;uso commerciale delle storie generate richiede una licenza separata. Contattaci per accordi commerciali.
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">6. PRIVACY E PROTEZIONE DATI</h2>
        <p>
          La raccolta e l&apos;uso dei tuoi dati sono disciplinati dalla nostra <a className="text-blue-600 underline-offset-4 hover:underline" href="/app/storie-narrative/privacy-policy.html">Privacy Policy</a>, che forma parte integrante di questi Termini.
        </p>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-700">6.1 Punti chiave privacy</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Tutti i dati sono salvati localmente sul tuo dispositivo</li>
            <li>Non condividiamo dati personali con terzi per marketing</li>
            <li>Utilizziamo servizi AI esterni solo per generazione contenuti</li>
            <li>Piena compliance GDPR per protezione minori</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">7. SERVIZI DI TERZE PARTI</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">7.1 Servizi AI integrati</h3>
          <p>L&apos;applicazione utilizza servizi esterni per generare contenuti:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Google Gemini</strong>: Generazione testi
            </li>
            <li>
              <strong>Runware API</strong>: Generazione immagini
            </li>
            <li>
              <strong>Amazon Polly</strong>: Sintesi vocale
            </li>
            <li>
              <strong>RevenueCat</strong>: Gestione abbonamenti
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">7.2 Limitazioni di responsabilità</h3>
          <p>Non siamo responsabili per:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Interruzioni dei servizi di terze parti</li>
            <li>Modifiche alle API esterne</li>
            <li>Qualità dei contenuti generati da servizi esterni</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">8. DISPONIBILITÀ E SUPPORTO</h2>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">8.1 Disponibilità del servizio</h3>
          <p>Ci impegniamo a mantenere l&apos;applicazione disponibile 24/7, ma potrebbero verificarsi:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Manutenzioni programmate (con preavviso)</li>
            <li>Interruzioni tecniche impreviste</li>
            <li>Limitazioni dovute a servizi esterni</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">8.2 Supporto tecnico</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Email</strong>: marinopanariello@gmail.com
            </li>
            <li>
              <strong>Tempo di risposta</strong>: Entro 48 ore lavorative
            </li>
            <li>
              <strong>Lingue supportate</strong>: Italiano, Inglese
            </li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">9. LIMITAZIONI DI RESPONSABILITÀ</h2>

        <div className="rounded-xl border-l-4 border-rose-500 bg-rose-50 px-5 py-4 space-y-2">
          <h3 className="text-xl font-semibold text-slate-700">9.1 Esclusioni di garanzia</h3>
          <p>L&apos;applicazione è fornita &quot;così com&apos;è&quot; senza garanzie di alcun tipo. Non garantiamo:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Funzionamento ininterrotto o privo di errori</li>
            <li>Accuratezza completa dei contenuti generati dall&apos;AI</li>
            <li>Compatibilità con tutti i dispositivi</li>
            <li>Disponibilità perpetua del servizio</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">9.2 Limitazione responsabilità</h3>
          <p>La nostra responsabilità è limitata all&apos;importo pagato per l&apos;abbonamento negli ultimi 12 mesi. Non siamo responsabili per danni indiretti, consequenziali o punitivi.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">10. RISOLUZIONE CONTROVERSIE</h2>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">10.1 Legge applicabile</h3>
          <p>Questi Termini sono regolati dalla legge italiana. Per controversie si applicano le normative EU e italiane sulla protezione dei consumatori.</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">10.2 Foro competente</h3>
          <p>Per controversie con consumatori, è competente il tribunale del luogo di residenza del consumatore. Per controversie commerciali, il tribunale di Torre Annunziata.</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">10.3 Risoluzione alternativa</h3>
          <p>Prima di procedere legalmente, incoraggiamo la risoluzione amichevole delle controversie tramite:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Contatto diretto con il nostro supporto</li>
            <li>Mediazione volontaria</li>
            <li>Piattaforma ODR europea (per controversie online)</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">11. MODIFICHE AI TERMINI</h2>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">11.1 Aggiornamenti</h3>
          <p>Potremmo aggiornare questi Termini per:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Conformità a nuove leggi</li>
            <li>Miglioramenti del servizio</li>
            <li>Chiarimenti interpretativi</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">11.2 Notifica modifiche</h3>
          <p>Ti informeremo di modifiche significative tramite:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Notifica nell&apos;app (30 giorni prima)</li>
            <li>Email (se fornita)</li>
            <li>Aggiornamento su questa pagina</li>
          </ul>
        </div>
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50 px-5 py-4">
          Continuando a utilizzare l&apos;app dopo le modifiche, accetti automaticamente i nuovi termini. Se non accetti, puoi interrompere l&apos;uso e cancellare l&apos;abbonamento.
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">12. RISOLUZIONE E CESSAZIONE</h2>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">12.1 Risoluzione da parte tua</h3>
          <p>Puoi cessare l&apos;uso in qualsiasi momento:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Disinstallando l&apos;applicazione</li>
            <li>Cancellando l&apos;abbonamento tramite store</li>
            <li>Richiedendo la cancellazione dati</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">12.2 Risoluzione da parte nostra</h3>
          <p>Possiamo sospendere o terminare l&apos;accesso in caso di:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Violazione di questi Termini</li>
            <li>Uso improprio dell&apos;applicazione</li>
            <li>Attività fraudolente o illegali</li>
            <li>Richieste delle autorità competenti</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">12.3 Effetti della cessazione</h3>
          <ul className="list-disc space-y-2 pl-6">
            <li>Cessazione immediata dell&apos;accesso alle funzionalità premium</li>
            <li>Conservazione dei dati locali (se non eliminati dall&apos;utente)</li>
            <li>Nessun rimborso per periodi non utilizzati (salvo diritto di recesso)</li>
          </ul>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">13. DIRITTO DI RECESSO (CONSUMATORI EU)</h2>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">13.1 Periodo di recesso</h3>
          <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50 px-5 py-4">
            Come consumatore EU, hai diritto di recedere dall&apos;abbonamento entro 14 giorni dall&apos;acquisto senza specificare motivi.
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">13.2 Come esercitare il recesso</h3>
          <p>Per esercitare il diritto di recesso:</p>
          <ol className="list-decimal space-y-2 pl-6">
            <li>Invia richiesta a marinopanariello@gmail.com</li>
            <li>Indica chiaramente la volontà di recedere</li>
            <li>Fornisci dettagli dell&apos;abbonamento</li>
          </ol>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">13.3 Rimborso</h3>
          <p>In caso di recesso valido, rimborseremo l&apos;intero importo entro 14 giorni tramite lo stesso metodo di pagamento utilizzato.</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">14. CONTATTI</h2>
        <div className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 space-y-2">
          <p className="font-semibold">Per questioni sui Termini e Condizioni:</p>
          <p>Email: <a className="text-blue-600 underline-offset-4 hover:underline" href="mailto:marinopanariello@gmail.com">marinopanariello@gmail.com</a></p>
          <p>Oggetto: &quot;Termini e Condizioni - Fiabe Magiche&quot;</p>
          <p className="font-semibold">Per supporto tecnico:</p>
          <p>Email: marinopanariello@gmail.com</p>
          <p className="font-semibold">Per questioni legali:</p>
          <p>Email: marinopanariello@gmail.com</p>
          <p className="font-semibold">Indirizzo postale:</p>
          <p>Via Alcide de Gasperi 49, Torre del Greco (NA)</p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-800">15. DISPOSIZIONI FINALI</h2>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">15.1 Separabilità</h3>
          <p>Se una clausola di questi Termini è dichiarata invalida, le restanti clausole rimangono pienamente efficaci.</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">15.2 Rinuncia</h3>
          <p>La mancata applicazione di una clausola non costituisce rinuncia ai nostri diritti.</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">15.3 Accordo completo</h3>
          <p>Questi Termini, insieme alla Privacy Policy, costituiscono l&apos;accordo completo tra le parti.</p>
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-slate-700">15.4 Lingue</h3>
          <p>In caso di conflitto tra versioni linguistiche, prevale la versione italiana.</p>
        </div>
      </section>

      <footer className="border-t border-slate-200 pt-6 text-sm text-slate-500 space-y-2">
        <p>© 2025 Fiabe Magiche. Tutti i diritti riservati.</p>
        <p>
          <strong>Documento legalmente vincolante</strong> - Versione 1.0
        </p>
        <p>Conformità: GDPR, Codice del Consumo Italiano, Direttive EU Commerce</p>
      </footer>
    </LegalLayout>
  )
}
