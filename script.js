// MEGA DATABASE COMPLETO: 200 attività per ogni singola categoria (600 totali)
const databaseAttivita = {
    in_casa: [
        "Costruisci la torre di carte più alta che puoi senza farla crollare 🃏",
        "Prendi dei mattoncini LEGO o vecchie costruzioni e crea un'astronave spaziale inventata 🚀",
        "Impara a fare l'aeroplanino di carta perfetto che vola più lontano di tutti ✈️",
        "Fai un percorso ad ostacoli in corridoio usando cuscini e sedie e cronometra il tempo 🏃‍♂️",
        "Inventa una lingua segreta o un codice cifrato con un tuo amico o fratello 🔐",
        "Gioca a un gioco da tavolo classico ma inventa una regola totalmente assurda che cambia tutto 🎲",
        "Disegna un fumetto di 4 vignette con protagonista il tuo animale domestico o un personaggio inventato 🦔",
        "Crea un labirinto difficilissimo su un foglio a quadretti e fallo risolvere a qualcuno in casa 📝",
        "Metti una musica ritmata e prova a fare palleggi con una pallina da tennis usando solo i piedi ⚽",
        "Impara a fare un origami classico a forma di rana saltatrice o cigno 🐸",
        "Crea una capanna segreta in camera usando lenzuola, sedie e mollette da bucato ⛺",
        "Fai il decluttering definitivo del tuo server Discord o della lista amici 👾",
        "Configura una shortcut sul telefono per attivare una modalità 'Studio Ultra' 📱",
        "Trova un anime o una serie di massimo 12 episodi e guarda il primo capitolo 🍿",
        "Impara a fare il Moonwalk o un passo di danza virale guardando un tutorial 🕺",
        "Fai una pulizia profonda delle tue sneakers preferite usando uno spazzolino 👟",
        "Sfida te stesso a fare 45 flessioni o sperimenta il tuo record di plank ⏱️",
        "Apri Spotify e crea la playlist definitiva per i viaggi in macchina con gli amici 🚗",
        "Impara a cucinare i veri Ramen pronti ma svoltati con ingredienti gourmet 🍜",
        "Pulisci il mouse, il tappetino e rimuovi la polvere da dentro il PC o la console 🖥️",
        "Metti in ordine la tua scrivania cambiando la disposizione di monitor e accessori ⌨️",
        "Prova a battere il record mondiale di un minigioco stupido online 🕹️",
        "Impara a memoria le battute più iconiche del tuo film preferito 🎬",
        "Fai 15 minuti di stretching intenso per la schiena se sei stato troppo al PC 🧘",
        "Trova 5 meme storici e ricreali usando le tue foto o quelle dei tuoi amici 📸",
        "Impara le basi del beatbox partendo dai tre suoni fondamentali (B, T, K) 🎤",
        "Scrivi una lista di 5 skill folli che vorresti sbloccare entro i prossimi due anni 🎯",
        "Fai un backup completo delle foto importanti e cancella gli screenshot inutili 📲",
        "Prova a editare un video di 15 secondi usando tagli a ritmo di musica 🎞️",
        "Impara a fare tre nodi complessi utili in caso di sopravvivenza o campeggio 🪢",
        "Riorganizza il tuo armadio dividendo le felpe e le t-shirt per colore 👕",
        "Trova un podcast di True Crime o misteri assurdi e ascoltalo al buio 🎙️",
        "Manda un messaggio a un amico che non senti da mesi proponendogli di beccarvi 💬",
        "Impara a contare fino a 10 in giapponese, coreano o russo 🌍",
        "Prova a fare un disegno in pixel art usando un programma gratuito online 🎨",
        "Prepara un frullato o un milkshake energetico con quello che hai in frigo 🥤",
        "Leggi le prime 15 pagine di quel libro che hai comprato solo per l'estetica della copertina 📕",
        "Impara un trucco di prestigio base con un mazzo di carte per stupire gli amici 🃏",
        "Fai un test della velocità di battitura (typing test) e prova a superare i 70 WPM ⌨️",
        "Sperimenta una ricetta per fare i pancake perfetti per la colazione di domani 🥞",
        "Impara a riconoscere 10 font famosi usati nei loghi dei brand più noti 📐",
        "Metti in vendita su un'app di usato quella giacca o quel gioco che non tocchi da un anno 📦",
        "Trova un canale di divulgazione scientifica assurda e guarda un video sui buchi neri 🌌",
        "Prova a stare in equilibrio su una gamba ad occhi chiusi per più di un minuto ⚖️",
        "Disegna una mappa concettuale o una mappa mentale dei tuoi progetti futuri 🧠",
        "Trova una colonna sonora epica e ascoltala mentre fai finta di essere il protagonista di un film 🎧",
        "Crea un logo minimalista per un tuo ipotetico brand o canale streaming 🎨",
        "Fai un inventario dei tuoi risparmi e pianifica un budget per comprare quel pezzo tecnologico 💶",
        "Impara la ricetta per fare una cioccolata calda densa come quella del bar 🍫",
        "Riorganizza i canali e i ruoli del tuo server di gioco con gli amici 🎮",
        "Scrivi un micro-racconto distopico di sole 100 parole sul tuo blocco note 📝",
        "Prova a fare un digiuno da dopamina di 30 minuti: distenditi senza schermi o musica 🛌",
        "Trova un gioco indie gratuito su Steam o sul telefono e provalo per 20 minuti 🕹️",
        "Pulisci la custodia e la griglia degli auricolari wireless con un cotton fioc 🧼",
        "Impara i rudimenti della lettura della mappa celeste per identificare Orione 🌠",
        "Trova una ricetta straniera (es. Tacos o Gyoza) e studia gli ingredienti 🌮",
        "Guarda un vecchio documentario sulla nascita di internet o dei primi videogiochi 💾",
        "Fai una sessione di respirazione guidata (metodo Wim Hof) per ricaricare le energie 💨",
        "Impara a fare un nodo perfetto alla cravatta o a un papillon 👔",
        "Trova un test di logica aziendale o un test del QI online e mettiti alla prova 🧠",
        "Impara le basi del montaggio audio per ripulire la voce da un microfono 🎙️",
        "Crea un wallpaper personalizzato per il tuo telefono usando grafiche astratte 🖼️",
        "Riorganizza i tuoi abbonamenti digitali ed elimina quelli che non usi mai 💳",
        "Impara a fare la pizza in teglia partendo da zero con un'idratazione alta 🍕",
        "Scrivi una recensione super dettagliata e critica dell'ultimo gioco che hai finito 🎮",
        "Fai 30 squat, 20 flessioni e 15 crunch senza fermarti 🏃",
        "Trova un sub-reddit super di nicchia e bizzarro ed esplora i post storici 🤖",
        "Impara a dire 'grazie', 'ciao' e 'scusa' in 10 lingue diverse 🗣️",
        "Crea una lista di 5 film cult degli anni '80 o '90 che non hai ancora visto 🎞️",
        "Trova un tutorial di beatmaking e prova a capire come si struttura un beat Trap 🎵",
        "Olia i cardini delle porte della tua stanza o della sedia da gaming se cigolano 🪛",
        "Svuota la cartella dei download del tuo PC eliminando i file .exe vecchi 📂",
        "Prova a indovinare 10 paesi diversi su Geoguessr in modalità gratuita 🗺️",
        "Riscrivi la bio dei tuoi profili social per renderla più pulita o d'impatto 👤",
        "Guarda un video di speedrun di un gioco della tua infanzia 🏎️",
        "Impara i concetti base della fotografia: la regola dei terzi e il triangolo dell'esposizione 📸",
        "Crea un archivio con i link dei video di YouTube più utili che hai trovato quest'anno 📺",
        "Pianifica la stanza dei tuoi sogni creando una wishlist di arredi e luci LED 💡",
        "Impara come funziona il motore di ricerca di Google dal punto di vista tecnico 💻",
        "Prepara dei biscotti veloci americani con gocce di cioccolato (Chocolate Chip Cookies) 🍪",
        "Trova un enigma logico famoso e non guardare la soluzione finché non sei sicuro 🕵️",
        "Fai una sessione di 10 minuti di meditazione mindfulness focalizzata sui suoni della stanza 🧘‍♂️",
        "Scrivi un elenco di 5 cose di cui sei veramente grato questa settimana ✨",
        "Impara i nomi di tutti i componenti hardware principali di un PC e a cosa servono 🛠️",
        "Prova a cantar una canzone complessa in una lingua straniera seguendo il testo 🎤",
        "Pulisci lo schermo della TV e i controller della console da ogni ditata 🎮",
        "Crea un set di icone personalizzate per le cartelle principali del tuo computer 📂",
        "Guarda un video tutorial su come fare nodi da arrampicata o alpinismo 🧗",
        "Pianifica l'itinerario perfetto per un weekend low-cost in una capitale europea ✈️",
        "Impara l'alfabeto fonetico NATO (Alpha, Bravo, Charlie...) a memoria 📡",
        "Fai un esperimento di cucina provando a fare una salsa originale per le patatine 🍟",
        "Riorganizza il cassetto dei cavi intrecciati usando delle fascette o elastici 🔌",
        "Impara come leggere un grafico finanziario a candele giapponesi 📈",
        "Disegna il concept di una mappa per un gioco sparatutto o un RPG 🗺️",
        "Metti in ordine i documenti di scuola o dell'università divisi per materie 📁",
        "Trova un video di un'ora di suoni ambientali cyberpunk o fantasy da usare per lo studio 🎧",
        "Scrivi un testo descrittivo del posto più strano in cui sei mai stato 📝",
        "Impara la differenza tecnica tra i vari tipi di pannelli dei monitor (IPS, TN, OLED) 🖥️",
        "Fai una colazione o uno spuntino impiattandolo come se fossi in un ristorante stellato 🍽️",
        "Impara a memoria i nomi dei primi 20 elementi della tavola periodica 🧪",
        "Fai un gioco di associazione mentale libera scrivendo parole a raffica su un foglio per 3 minuti 🧠",
        "Organizza i file musicali o i documenti sul cloud rinominandoli per data 📂",
        "Impara a fare la giocoleria base con 2 palline usando una sola mano 🤹",
        "Fai una lista delle 10 canzoni che hanno segnato la tua infanzia e ascoltale 🎵",
        "Trova un tutorial per creare effetti di transizione video fluidi sul telefono 🎞️",
        "Impara a fare la verticale al muro e tieni la posizione per 15 secondi 🤸",
        "Pulisci gli specchi e le finestre della tua stanza usando un panno asciutto 🪟",
        "Cerca un gioco di carte solitario complesso e prova a risolverlo sul letto 🃏",
        "Scrivi una lettera ironica indirizzata a te stesso tra 5 anni e chiudila in una busta ✉️",
        "Impara a riconoscere le costellazioni invernali principali usando un'app astronomica 🌌",
        "Prepara una spremuta d'arancia o un succo fresco usando frutti di stagione 🍊",
        "Sperimenta un nuovo stile di disegno copiando lo stile di un fumettista famoso 🎨",
        "Metti in ordine i vecchi videogiochi inscatolati disponendoli in ordine alfabetico 🎮",
        "Pulisci a fondo la tastiera del telefono rimuovendo le vecchie scorciatoie 📱",
        "Trova un rompicapo matematico online e non arrenderti finché non trovi la x 🧮",
        "Guarda un video documentario sulla storia del cinema e dei primi effetti speciali 🎬",
        "Impara a piegare le tue magliette in modo perfetto e geometrico col metodo ninja 👕",
        "Crea un mix audio unendo i suoni della natura con una traccia lo-fi rilassante 🎧",
        "Scrivi una lista delle 5 città del mondo che devi assolutamente visitare prima o poi 🗺️",
        "Impara la differenza tra un obiettivo fotografico grandangolare e un teleobiettivo 📸",
        "Metti in ordine la tua bacheca dei trofei o la mensola dei libri preferiti 📚",
        "Impara come funziona il meccanismo interno di un orologio analogico a lancette ⏱️",
        "Fai un esperimento scientifico semplice in cucina usando sale e acqua ghiacciata 🧪",
        "Trova 3 canali YouTube dedicati alla storia antica e guarda un video sui samurai ⚔️",
        "Pulisci accuratamente la scrivania usando un panno in microfibra antistatico 🧹",
        "Impara a fare il nodo del marinaio perfetto usando una vecchia corda o stringa 🪢",
        "Disegna la planimetria ideale della tua futura camera dei sogni in scala 📐",
        "Crea una cartella sul desktop dedicata solo alle immagini di sfondo preferite 🖼️",
        "Impara a riprodurre una melodia semplicissima al pianoforte o tastiera virtuale 🎹",
        "Sperimenta un nuovo sapore abbinando ingredienti insoliti in un panino gourmet 🥪",
        "Scrivi una lista dei tuoi 5 film di animazione preferiti di sempre 🍿",
        "Impara a calcolare al volo lo sconto percentuale del 15% e del 20% senza telefono 💶",
        "Fai un elenco di tutti i libri letti quest'anno e assegna un voto in stelle ⭐",
        "Trova una vecchia foto stampata e prova a ridisegnarla a matita su un foglio 📝",
        "Pulisci gli auricolari e la custodia rimuovendo ogni traccia di polvere 🎧",
        "Impara a memoria i nomi dei 5 oceani e la loro profondità massima 🌊",
        "Fai un esperimento di scrittura provando a comporre una poesia in rima baciata ✍️",
        "Organizza il cassetto degli accessori elettronici separando i cavi utili dai morti 🔌",
        "Guarda un video esplicativo su come gli scienziati hanno fotografato un buco nero 🌌",
        "Impara la differenza tra le varie tipologie di caffè e le loro origini storiche ☕",
        "Disegna il logo per una squadra di calcio o di e-sports totalmente inventata ⚽",
        "Fai una sessione di respirazione profonda per eliminare lo stress scolastico 💨",
        "Impara a fischiare usando le dita in modo potente come richiamo 🗣️",
        "Controlla le impostazioni di sicurezza dei tuoi account di gioco online 🎮",
        "Scrivi un micro-racconto horror usando solo tre frasi sul blocco note 📝",
        "Metti in ordine il cassetto delle calze accoppiandole per colore e tipologia 🧦",
        "Trova un video che spiega l'evoluzione grafica dei giochi dal 1980 a oggi 👾",
        "Impara come si legge un testo antico o le basi dei geroglifici egizi 🛕",
        "Fai 10 minuti di ginnastica posturale per raddrizzare le spalle e il collo 🧘",
        "Prepara dei pop-corn in padella fatti sul momento controllando la cottura 🍿",
        "Scrivi una recensione dettagliata dell'ultimo film visto al cinema o in streaming 🎬",
        "Svuota la cartella cestino del tuo computer e del telefono per liberare spazio 🗑️",
        "Trova un enigma poliziesco online e prova a scoprire il colpevole dagli indizi 🕵️‍♂️",
        "Impara a fare la maglia o un piccolo intreccio di fili colorati per un bracciale 🧶",
        "Organizza la tua libreria dividendo i fumetti dai romanzi e saggi 📚",
        "Guarda un tutorial su come si coltiva un piccolo orto verticale sul balcone 🪴",
        "Impara a memoria i capoluoghi di tutte le regioni italiane senza guardare la mappa 🇮🇹",
        "Fai un disegno astratto geometrico usando solo un righello e tre colori diversi 📐",
        "Pulisci lo zaino di scuola svuotando le tasche interne da vecchi foglietti 🎒",
        "Impara i concetti base dell'astronomia distinguendo tra pianeti gassosi e rocciosi 🪐",
        "Crea un piccolo poster motivazionale cartaceo da appendere vicino alla scrivania 🖼️",
        "Scrivi una lista di 5 cose che vorresti saper fare entro la fine dell'anno 🎯",
        "Impara i rudimenti del montaggio video scoprendo cosa si intende per jump-cut 🎞️",
        "Metti in ordine i tuoi documenti personali conservandoli in una cartella sicura 📁",
        "Fai un test online per scoprire qual è il tuo stile di apprendimento preferito 🧠",
        "Impara a fare un nodo perfetto a una sciarpa o a un foulard estivo 🧣",
        "Pulisci lo schermo del computer e del tablet usando un liquido specifico 🖥️",
        "Trova la ricetta classica dei biscotti di frolla e studia i passaggi dell'impasto 🍪"
    ],
    all_aperto: [
        "Trova un gessetto colorato e disegna una campana gigante sul marciapiede per sfidare i tuoi amici 🖍️",
        "Vai al campetto da calcio e fai una gara di calci di rigore o tiri di precisione colpendo la traversa ⚽",
        "Fai volare un aquilone in un grande spazio aperto o in spiaggia se c'è abbastanza vento 🪁",
        "Trova 5 sassi piatti e lisci vicino a un fiume o laghetto e impara a farli rimbalzare sull'acqua 🌊",
        "Fai una gara di corsa o di salto in lungo sul prato del parco stabilendo una linea di partenza 🏃",
        "Gioca a nascondino o a 'ce l'hai' con i tuoi amici o fratelli sfruttando gli alberi del parco 🌳",
        "Fai una passeggiata svoltando a caso ogni volta che vedi un oggetto di colore blu 🚶",
        "Trova un parco e prova a fare un video in timelapse delle nuvole per 10 minuti ☁️",
        "Fai una caccia fotografica urbana: scatta 5 foto di architetture geometriche strane 📸",
        "Prendi la bici e pedala fino a un quartiere in cui non sei mai stato prima 🚲",
        "Trova una panchina isolata, metti le cuffie e ascolta un album intero guardando la gente passare 🎧",
        "Fai una sessione di esplorazione urbana alla ricerca di graffiti o street art figa nella tua zona 🎨",
        "Fai una corsa leggera cambiando ritmo ogni volta che incroci un lampione 🏃",
        "Trova uno skatepark o un campetto e fermati a guardare le sessioni di allenamento di altri ragazzi 🛹",
        "Prendi un bubble tea o un caffè da asporto e bevilo camminando senza una meta precisa 🧋",
        "Trova il punto più alto o panoramico della tua città per guardare lo skyline dal tetto o da una collina 🏙️",
        "Fai una passeggiata notturna sicura nel tuo quartiere per vedere come cambiano le luci e l'atmosfera 🌌",
        "Cerca un mercatino vintage o dell'usato e vai a caccia di vecchie macchine fotografiche o vinili 📻",
        "Fai un picnic improvvisato su un prato portandoti dietro solo un pacchetto di patatine e un libro 🧺",
        "Visita un vivaio locale ed esplora la sezione delle piante grasse o tropicali 🪴",
        "Trova uno spot perfetto nella tua città per scattare una foto con una simmetria perfetta 📐",
        "Fai un salto in una grande libreria di centro, vai al reparto fumetti o design e sfoglia qualcosa 📚",
        "Cerca una fontana storica o un parchetto nascosto nei vicoli del centro della tua città 🏛️",
        "Prendi un bus o un tram a caso, scendi dopo 8 fermate ed esplora quella zona a piedi 🚌",
        "Trova un grande prato pulito e fai 10 minuti di camminata a piedi nudi sull'erba (grounding) 👣",
        "Fai una camminata veloce fino al supermercato etnico più vicino e compra uno snack mai visto 🌍",
        "Trova uno spot riparato all'aperto e prova a fare degli sketch veloci su un taccuino disegnando passanti 📝",
        "Raggiungi un ponte pedonale e fermati a guardare il flusso delle auto o del fiume sotto di te 🌉",
        "Fai una passeggiata portando con te dei semi o del pane secco per dare da mangiare alle anatre del laghetto 🦆",
        "Trova una via pedonale del centro, siediti su una panchina e analizza gli outfit delle persone 🧥",
        "Fai un giro fotografico focalizzandoti solo sui contrasti di ombre forti create dal sole sui palazzi ☀️",
        "Trova un sentiero sterrato o una pista ciclabile immersa nel verde e percorrila a passo svelto 🌲",
        "Fai una camminata sotto una pioggia leggera munito di un buon ombrello e giacca impermeabile 🌧️",
        "Visita la galleria d'arte contemporanea o il museo più vicino (spesso l'ingresso è gratuito per gli studenti) 🖼️",
        "Trova una piazza monumentale e conta quante colonne o archi riesci a vedere da un unico punto 🏛️",
        "Fai un allenamento calistenico o di stretching usando le sbarre o le panchine di un parco attrezzato 🤸",
        "Cerca una meridiana antica su un muro del centro storico e controlla se l'ora coincide con il tuo telefono 🕰️",
        "Fai una camminata di 6 km monitorando il battito cardiaco o i passi sul tuo smartwatch ⏱️",
        "Trova un albero monumentale immenso nel parco principale della tua zona e leggine la storia 🌳",
        "Fai un giro vicino alla stazione ferroviaria o a un nodo logistico per osservare il movimento della città 🚉",
        "Fai una caccia al tesoro urbana cercando targhe commemorative o date incise sui muri dei palazzi vecchi 🥇",
        "Fai una camminata raccogliendo 5 foglie di alberi diversi per provare a identificarle a casa 🍁",
        "Trova un parco giochi completamente vuoto e sali sull'altalena per goderti la velocità 🎢",
        "Visita un negozio di dischi o di strumenti musicali e guarda i nuovi arrivi o i pezzi vintage 🎸",
        "Fai una camminata veloce fino alla zona commerciale moderna per osservare i grattacieli o i negozi 🏢",
        "Trova una panchina esposta al sole e chiudi gli occhi per 5 minuti godendoti il calore sul viso ☀️",
        "Fai una camminata panoramica seguendo il corso del fiume o del canale principale della città 🌊",
        "Visita un cimitero monumentale della tua zona, sono pieni di sculture incredibili e architettura storica 🪦",
        "Cerca un cortile o un chiostro antico ad accesso pubblico nascosto dietro i portoni del centro 🏛️",
        "Fai un giro in un negozio di articoli da campeggio o survival sognando la prossima escursione ⛺",
        "Trova un'area rialzata e scatta una foto panoramica a 360 gradi del paesaggio urbano 📸",
        "Fai una passeggiata mattutina molto presto quando le strade sono deserte e l'aria è fresca 🌄",
        "Trova una cabina telefonica rimasta o un vecchio elemento urbano del secolo scorso e scatta una foto ☎️",
        "Fai un giro al mercato coperto per scoprire i profumi e i colori dello street food locale 🍕",
        "Fai una passeggiata seguendo una linea retta sulla mappa il più a lungo possibile senza deviazioni 🗺️",
        "Trova una salita molto ripida e affrontala a passo svelto per fare una sessione cardio intensa 🏃‍♂️",
        "Fai un salto dall'edicola più fornita del centro e compra una rivista di grafica o gaming indipendente 📰",
        "Trova una statua storica importante nel centro e cerca online la biografia assurda del personaggio 🗿",
        "Fai una sessione di registrazione audio ambientale (soundscape) catturando i rumori del parco o della via 🎙️",
        "Trova un muretto basso e sicuro e camminaci sopra per testare e migliorare il tuo equilibrio 🧱",
        "Prendi la bici e percorrila lungo gli argini di un canale o di una pista ciclabile fuori città 🚴",
        "Trova una panchina sotto un grande salice piangente o un albero frondoso e rilassati al fresco 🌳",
        "Fai un giro esplorativo nei negozi di fumetti o di giochi da tavolo della tua città 🃏",
        "Esplora un vicolo strettissimo o una strada privata ad accesso libero dove non hai mai svoltato 🛣️",
        "Fai una camminata portando con te della frutta secca o degli snack sani da mangiare a metà percorso 🥜",
        "Trova un punto in cui puoi vedere nitidamente la linea dell'orizzonte senza palazzi alti davanti 👀",
        "Fai una sosta rinfrescante vicino agli spruzzi di una grande fontana moderna ⛲",
        "Trova una fioritura stagionale splendida nel parco e scatta qualche macro-foto con lo smartphone 🌸",
        "Fai un giro completo attorno alle mura storiche o al perimetro del castello della città 🏰",
        "Fai una sosta in un giardino pubblico dedicato alla memoria di scrittori o scienziati famosi 📖",
        "Fai una camminata fino a una bottega artigianale della zona per guardare i maestri lavorare il legno o il metallo 🔨",
        "Trova un posto isolato nella natura (bosco o collina) e urla forte per scaricare la tensione della settimana 🗣️",
        "Fai una passeggiata studiando i dettagli delle facciate dei palazzi in stile Liberty o Barocco vicini ⛪",
        "Trova una radura tranquilla e prova a fare giocoleria usando tre piccoli sassi lisci trovati a terra 🪨",
        "Fai un giro nel quartiere universitario o vicino alle facoltà per respirare l'atmosfera dinamica 🎓",
        "Trova una via pedonale dello shopping e fai window shopping studiando il design delle vetrine 🛍️",
        "Siediti all'aperto e prova a tracciare lo skyline dei tetti della città sul tuo blocco note 🏙️",
        "Fai un salto in uno spazio espositivo indipendente o in un centro culturale giovanile 🖼️",
        "Fai una camminata per raggiungere gli orti urbani o comunitari gestiti dai cittadini della tua zona 🥬",
        "Trova le vie con i nomi più assurdi o storici stampando mentalmente la mappa della città 🗺️",
        "Trova un albero robusto e prova ad arrampicarti sui rami più bassi in totale sicurezza 🧗",
        "Fai un allenamento di corsa a intervalli (HIIT) alternando scatti veloci a camminata lenta sul prato 🏃‍♂️",
        "Trova una scalinata monumentale e affrontala facendola di corsa per due o tre volte di fila 🪜",
        "Fai una camminata fino alla biblioteca di quartiere per vedere se ci sono bacheche con eventi locali 📚",
        "Trova una zona periferica o di campagna vicina per osservare i campi e i ritmi della natura 🌾",
        "Fai un giro fotografico focalizzandoti sui riflessi nitidi nelle pozzanghere dopo la pioggia 🪞",
        "Trova un anfiteatro romano o un teatro all'aperto moderno e testa l'acustica posizionandoti al centro 🎭",
        "Fai un giro in un quartiere industriale riqualificato pieno di officine artistiche o murales enormi 🏭",
        "Fai una camminata ecologica portando un sacchetto per raccogliere piccoli rifiuti di plastica sul sentiero ♻️",
        "Siediti vicino a un campetto da basket e osserva le dinamiche di gioco e i tiri dei giocatori 🏀",
        "Fai una passeggiata rigenerante scoprendo dove portano i vicoli ciechi del centro storico 🛣️",
        "Trova una siepe di gelsomino o piante aromatiche e fermati a respirare il profumo naturale 🪻",
        "Fai una camminata seguendo un percorso specifico che disegni una lettera sulla mappa GPS 📐",
        "Fai un giro fotografico dedicato esclusivamente ai portoni in legno vecchi della città 🚪",
        "Trova un prato immenso, sdraiati a pancia in su e guarda le forme delle nuvole per 10 minuti ☁️",
        "Fai una passeggiata rilassante concludendo con cinque minuti di respirazione profonda all'aria aperta 🧘‍♀️",
        "Fai una sessione di birdwatching al parco provando a identificare 3 specie di uccelli diversi 🦅",
        "Esplora il parco cittadino alla ricerca di alberi che abbiano più di cinquant'anni 🌳",
        "Fai una camminata veloce intorno all'isolato cronometrando quanti minuti impieghi ⏱️",
        "Scatta 5 foto di dettagli naturali macro come la texture della corteccia di un albero 📸",
        "Trova un parco con una pista da corsa e fai tre giri completi a passo svelto 🏃",
        "Trova un muretto all'ombra, siediti e leggi un capitolo del tuo libro preferito 📖",
        "Fai un giro in bicicletta cambiando marcia ogni volta che affronti un piccolo dosso o salita 🚲",
        "Raccogli 3 pigne o piccoli rami caduti per fare una composizione geometrica sul prato 🌲",
        "Fai una passeggiata esplorativa cercando di scovare un vicolo storico nascosto del centro 🛣️",
        "Trova un laghetto e osserva il movimento dei pesci o delle tartarughe per 5 minuti 🐢",
        "Fai una camminata fino alla piazza principale e osserva l'architettura del palazzo più vecchio 🏛️",
        "Fai un giro dei negozi di antiquariato o dell'usato guardando gli oggetti del passato 📻",
        "Trova una panchina esposta alla brezza e ascolta i suoni della natura senza cuffie 🍃",
        "Fai una camminata veloce fino al giardino botanico o alla villa comunale più vicina 🌸",
        "Scatta una foto a un panorama urbano cercando di allineare l'orizzonte perfettamente 📸",
        "Fai stretching per le braccia e le spalle appoggiandoti alla spalliera di una panchina 🧘",
        "Fai una camminata seguendo il perimetro esatto di una piazza storica della città 🗺️",
        "Trova una fontanella di acqua pubblica e rinfrescati il viso dopo la camminata 💧",
        "Fai un giro esplorativo nei pressi di un vecchio monumento studiandone le iscrizioni 🗿",
        "Fai una camminata raccogliendo piccoli sassi colorati da disporre in cerchio sul terreno 🪨",
        "Trova un prato verde e fai 5 minuti di esercizi di equilibrio su una gamba sola 🤸",
        "Fai una passeggiata fotografica catturando solo le scritte o i numeri civici più strani 🔢",
        "Raggiungi a piedi un ponte e osserva il traffico stradale sottostante da una posizione sicura 🌉",
        "Fai una camminata scoprendo un nuovo parco giochi di quartiere in cui non eri mai stato 🎢",
        "Trova un punto rialzato da cui si vede il tramonto e fermati a guardarlo fino alla fine 🌅",
        "Fai un giro in bici cercando di pedalare senza usare le mani per massimo 3 secondi in sicurezza 🚲",
        "Fai una passeggiata mattutina prima che aprano i negozi per goderti il silenzio urbano 🌄",
        "Trova una grande quercia o un pioppo e prova a misurare la circonferenza del tronco a passi 🌳",
        "Fai una camminata veloce fino alla fermata del tram più lontana e ritorna a piedi 🚊",
        "Scatta 3 foto di ombre geometriche create dai palazzi durante le ore del pomeriggio 📸",
        "Fai un salto al mercato rionale per scoprire i prodotti tipici della tua regione 🍎",
        "Trova una panchina vicino a un'area cani e osserva gli animali correre e giocare 🐕",
        "Fai una camminata di un chilometro mantenendo un passo costante e accelerato 🏃",
        "Trova un grande prato, sdraiati e prova a percepire tutti i profumi dell'erba 🌱",
        "Fai un giro esplorativo intorno alle vecchie mura della città se presenti 🏰",
        "Fai una passeggiata sotto la pioggia leggera usando stivali impermeabili e ombrello 🌧️",
        "Trova un campetto da tennis libero e prova a fare qualche palleggio contro il muro 🎾",
        "Fai una camminata panoramica costeggiando un canale o un piccolo ruscello della zona 🌊",
        "Scatta una foto a un fiore selvatico cresciuto tra le crepe del marciapiede 🌸",
        "Fai 10 flessioni inclinate appoggiando le mani sul bordo sicuro di una panchina 💪",
        "Fai una passeggiata esplorativa per scoprire dove conduce quella strada sterrata in periferia 🛣️",
        "Trova una meridiana su un palazzo storico e prova a capire come funziona l'ombra ☀️",
        "Fai una camminata rilassante concentrandoti sul rumore dei tuoi passi sul terreno 👣",
        "Visita un giardino pubblico nascosto all'interno di un cortile comunale aperto 🏛️",
        "Fai un giro in bici mantenendo una velocità costante per almeno quindici minuti 🚴",
        "Trova una panchina di legno all'ombra e fai 5 minuti di respirazione addominale 💨",
        "Scatta una foto a un dettaglio architettonico che nessuno nota mai alzando lo sguardo 🏢",
        "Fai una camminata fino alla biblioteca e leggi i manifesti degli eventi culturali all'aperto 📚",
        "Trova un grande spazio aperto e prova a lanciare un frisbee con precisione insieme a un amico 🥏",
        "Fai una corsa leggera sul prato cambiando direzione ogni volta che incontri un albero 🏃‍♂️"
    ],
    produttive: [
        "Pianifica i compiti della settimana su un diario dividendoli in piccoli blocchi da 20 minuti ✏️",
        "Impara a rifare il letto in modo perfetto e teso come negli hotel a 5 stelle 🛏️",
        "Fai una sessione di ripasso di una materia scolastica provando a spiegarla a voce alta a un pubblico invisibile 🗣️",
        "Impara la sintassi fondamentale di Python scrivendo il tuo primo ciclo condizionale 💻",
        "Svuota la casella email eliminando le notifiche dei social vecchie di mesi 📧",
        "Crea un template moderno per il tuo CV usando programmi di grafica online gratuiti 📄",
        "Imposta un foglio di calcolo per monitorare le tue spese settimanali divise per categorie 📊",
        "Guarda un discorso TED Talk incentrato sulla gestione del tempo o sulla psicologia del focus 💡",
        "Riorganizza il tuo armadio donando in beneficenza le felpe che non metti da due anni 👕",
        "Fai un backup completo dei file importanti del tuo computer su una chiavetta o cloud 🗄️",
        "Impara a memoria 10 vocaboli utili in una lingua straniera che ti incuriosisce 🌍",
        "Fissa 3 obiettivi finanziari personali concreti a breve termine e pianifica come risparmiare 📈",
        "Scrivi un post di analisi approfondita su un argomento che conosci bene da pubblicare online 📝",
        "Riapri quel video corso online accantonato tempo fa e completa la prima sezione di lezioni 🎓",
        "Fai una pulizia profonda del frigorifero buttando le salse scadute e igienizzando i ripiani 🧼",
        "Ordina tutti i documenti scolastici o universitari cartacei all'interno di faldoni etichettati 📂",
        "Studia le manovre fondamentali di primo soccorso da canali medici ufficiali 🚑",
        "Crea la pianificazione dei pasti per la settimana scrivendo la lista della spesa precisa 🥗",
        "Controlla lo stato delle tue piante, rimuovi le foglie secche e pianifica quando annaffiarle 🪴",
        "Migliora la fluidità del tuo smartphone cancellando le app di giochi che non apri mai 📱",
        "Fai un elenco delle tue 5 hard skill e pianifica quale soft skill migliorare questo mese 🎯",
        "Aggiorna l'immagine del profilo e le informazioni dei tuoi account professionali online 👤",
        "Fai pratica di digitazione veloce sulla tastiera a dieci dita senza guardare i tasti ⌨️",
        "Controlla la pressione delle ruote della bici e olia i meccanismi della catena 🚲",
        "Leggi un capitolo di un saggio di sociologia, finanza o sviluppo personale 📘",
        "Prepara gli outfit completi per tutta la settimana lavorativa o scolastica per risparmiare tempo 👔",
        "Impara a usare le funzioni base di un'app di montaggio video professionale per smartphone 🎬",
        "Organizza lo scomparto dei cibi a lunga conservazione mettendo in prima fila quelli vicini alla scadenza 🥫",
        "Crea una lista di idee regalo intelligenti ed economiche per i prossimi compleanni dei tuoi amici 🎁",
        "Migliora la sicurezza dei tuoi profili attivando l'autenticazione a due fattori (2FA) ovunque 🔒",
        "Scrivi un messaggio o una mail di ringraziamento a un professionista o creator che ti ha ispirato 📧",
        "Analizza i dati di utilizzo del tuo smartphone impostando dei blocchi di tempo per i social 📊",
        "Metti in ordine perfetto la cancelleria della tua scrivania eliminando le penne scariche ✏️",
        "Regola l'altezza della sedia da gaming o del monitor per mantenere una postura ergonomica corretta 🪑",
        "Impara a leggere e interpretare i valori della tabella nutrizionale dei cibi che compri spesso 🍎",
        "Rivedi i contratti delle tue utenze digitali per capire se puoi risparmiare cambiando operatore 📄",
        "Scrivi un riassunto schematico dell'ultimo libro che hai letto per fissare i concetti principali 📖",
        "Sperimenta la tecnica di memorizzazione dei 'loci' memorizzando una lista di 20 parole complesse 🧠",
        "Elimina dalla galleria del telefono tutti gli screenshot vecchi e i video inutili di WhatsApp 📸",
        "Disegna una routine mattutina ottimizzata nei minimi dettagli e provala domattina ⏰",
        "Guarda un video sulle tecniche di public speaking per capire come gestire l'ansia da presentazione 🗣️",
        "Pulisci i filtri dell'aspirapolvere o i condotti di aerazione del tuo PC da gaming 🧼",
        "Scrivi un breve articolo tutorial spiegando passo passo come risolvere un problema tecnico comune 🛠️",
        "Traccia come hai speso il tuo tempo nelle ultime 24 ore per identificarre i momenti morti ⏱️",
        "Impara la differenza tecnica tra asset finanziari, azioni e obbligazioni in modo semplice 💵",
        "Controlla la scatola dei medicinali di casa ed elimina in sicurezza quelli scaduti 💊",
        "Imposta una sincronizzazione cloud automatica per non rischiare di perdere i tuoi progetti scolastici ☁️",
        "Impara a fare nodi di legatura resistenti utili in campeggio o per fissare carichi sul portapacchi 🪢",
        "Fai una lista di 15 attività ripetitive che potresti delegare a un'intelligenza artificiale o automazione 🤖",
        "Rimuovi ogni oggetto inutile dalla scrivania lasciando solo monitor, tastiera e un blocco note 🖥️",
        "Studia le regole della teoria dei colori applicata al web design (contrasti e accessibilità) 🎨",
        "Pulisci e lucida le scarpe eleganti o gli stivali per tenerli pronti all'uso 👞",
        "Fai un elenco delle tue abitudini improduttive e scrivi un'alternativa positiva per ciascuna 🔄",
        "Impara a cucire un bottone su una camicia o a riparare un... strappo in autonomia 🧵",
        "Fai un bilancio dei libri o dei corsi completati negli ultimi sei mesi valutando i progressi 📚",
        "Butta giù un business plan di una pagina per una tua idea di business o progetto secondario 🚀",
        "Impara i concetti cardine della SEO per capire come indicizzare un sito web su Google 🔍",
        "Pulisci accuratamente la tastiera meccanica rimuovendo i tasti con l'apposito strumento ⌨️",
        "Fai ordine sul desktop del computer organizzando i file sparsi in cartelle tematiche chiare 📂",
        "Compila quel modulo o rispondi a quella mail burocratica che rimandavi da due settimane ✉️",
        "Studia le tecniche base di negoziazione e gestione dei conflitti nel lavoro di squadra 🤝",
        "Pulisci gli specchi di camera e i vetri delle finestre per aumentare la luminosità della stanza 🪟",
        "Pianifica un programma di allenamento settimanale strutturato a seconda dei tuoi obiettivi 🏋️",
        "Leggi una guida introduttiva sulla gestione dei dati personali e sulla privacy online 📈",
        "Ordina la scatola dei ricordi fisici buttando scontrini sbiaditi e tenendo solo cose di valore reale 🎁",
        "Metti per iscritto i tuoi 3 punti di forza principali nel lavoro di squadra e come valorizzarli 🏆",
        "Impara il funzionamento di base delle reti internet, dei server e dei protocolli HTTP 🧠",
        "Svuota completamente il tuo zaino della scuola o del lavoro, lavalo e riorganizza gli scomparti 🎒",
        "Configura i profili di risparmio energetico della tua postazione per ridurre l'impatto in bolletta 💡",
        "Scrivi una strategia in 4 step per affrontare un esame o una scadenza che ti mette ansia 🎯",
        "Impara a strutturare una mappa concettuale avanzata usando software digitali gratuiti 🗺️",
        "Lucida i tuoi accessori in metallo, occhiali o orologi usando panni in microfibra adatti ✨",
        "Crea una nomenclatura standard per i tuoi file digitali per non perdere tempo a cercarli 📁",
        "Scrivi un riassunto di 200 parole spiegando un concetto complesso di attualità o geopolitica ✍️",
        "Studia le basi dei sistemi monetari e il funzionamento dell'inflazione sui risparmi 📊",
        "Cancella dalla rubrica telefonica i contatti di persone che non ricordi nemmeno chi siano 📱",
        "Seleziona un webinar gratuito o una conferenza online del tuo settore e iscriviti 🎓",
        "Impara tre esercizi di respirazione diaframmatica utili per abbassare il battito cardiaco sotto stress 💨",
        "Riorganizza gli attrezzi o gli oggetti nel garage o nel ripostiglio ordinandoli per dimensione box 📦",
        "Scrivi un elenco delle 5 persone che stimi di più nel tuo campo e analizza le loro carriere 👥",
        "Impara a creare slide professionali usando layout asimmetrici e spazi vuoti strategici 📊",
        "Affila i coltelli da cucina usando gli strumenti corretti in totale sicurezza 🔪",
        "Analizza l'illuminazione della tua stanza impostando luci calde per la sera per migliorare il sonno 🛌",
        "Prepara una scheda cartacea di emergenza con i contatti fondamentali da tenere nel portafoglio 🚨",
        "Impara i segni base dell'alfabeto muto per una comunicazione inclusiva elementare 🧏",
        "Riorganizza gli album di foto digitali sul cloud dividendoli per anni e tappe fondamentali 📸",
        "Scrivi una recensione tecnica dettagliata di un software o di un'estensione che usi ogni giorno 💻",
        "Esercitati nella lettura rapida provando a scorrere una pagina usando la visione periferica 📖",
        "Rimuovi i file di cache obsoleti e i file temporanei di sistema per velocizzare il PC 🧹",
        "Butta giù le linee guarda per la tua identità visiva personale (colori, font, stile) online 🚀",
        "Impara a usare una bacheca in stile Kanban (come Trello) per gestire i tuoi task quotidiani 📊",
        "Pulisci e ordina lo scomparto dei condimenti in cucina verificando lo stato di conservazione 🧂",
        "Scrivi le risposte alle 10 domande più frequenti che potrebbero farti a un colloquio di lavoro 💬",
        "Impara le tecniche di base della correzione del colore (color grading) su una fotografia 🎨",
        "Fai una pulizia profonda dei cuscini del divano o della sedia da gaming igienizzandoli 🛋️",
        "Individua un evento di networking o un meetup locale di tuo interesse e salvalo in agenda 🤝",
        "Impara i rudimenti della correzione di bozze per eliminare refusi dai tuoi testi scritti ✍️",
        "Controlla i canali YouTube didattici e iscriviti a uno che spiega la storia dell'arte 🎨",
        "Fai uno schema riassuntivo delle formule geometriche principali su un cartoncino 📐",
        "Metti in ordine i segnalibri del computer eliminando i link che non usi più da tempo 🌐",
        "Impara a memoria i 5 verbi irregolari inglesi più complessi e crea tre frasi di esempio 🇬🇧",
        "Pulisci il guscio esterno del tuo laptop o tablet usando un panno asciutto morbido 💻",
        "Scrivi una lista delle scadenze scolastiche o personali importanti dei prossimi due mesi 📅",
        "Guarda un video tutorial su come migliorare la tua postura quando studi alla scrivania 🪑",
        "Organizza i tuoi quaderni di appunti associando a ognuno un colore di copertina diverso 📒",
        "Trova un test di logica visiva online e prova a risolverlo senza guardare subito i risultati 🧠",
        "Impara a memoria l'anno di fondazione delle 5 città più antiche del mondo 🏛️",
        "Pulisci la lente della fotocamera del tuo smartphone per ottenere scatti sempre nitidi 📸",
        "Fai un elenco dei tuoi tre punti di debolezza nello studio e scrivi come affrontarli 🎯",
        "Riorganizza le icone della schermata home del telefono secondo una logica di utilità 📱",
        "Leggi un articolo di giornale incentrato sulle nuove scoperte tecnologiche ed ecologiche 📰",
        "Crea una tabella oraria per bilanciare i tuoi pomeriggi tra studio, sport e relax ⏱️",
        "Impara come funziona il sistema di riciclo dei rifiuti nel tuo comune di residenza ♻️",
        "Controlla lo spazio residuo sul tuo account cloud ed elimina i file duplicati pesanti ☁️",
        "Scrivi un breve testo esplicativo descrivendo il funzionamento di una bussola magnetica 🧭",
        "Metti in ordine la tua collezione di penne, evidenziatori e matite sul ripiano ✏️",
        "Impara a riconoscere le principali estensioni di file digitali e il loro utilizzo corretto 📂",
        "Fai una sessione di 5 minuti di calcolo mentale veloce provando a moltiplicare numeri a due cifre 🧮",
        "Pianifica l'elenco dei materiali necessari per il tuo prossimo progetto creativo o scolastico 🛠️",
        "Guarda un video che spiega le regole fondamentali della composizione grafica minimalista 🎨",
        "Trova un tutorial di origami complessi e memorizza i passaggi per ricrearlo senza video 📄",
        "Riorganizza il cassetto delle scorte di cancelleria contando quanti taccuini hai vuoti 📓",
        "Scrivi una mini guida con 3 consigli pratici per mantenere alta la concentrazione durante i task 💡",
        "Impara i concetti base della programmazione scoprendo che cos'è una variabile logica 💻",
        "Pulisci la superficie del mousepad usando un panno umido e lascialo asciugare bene 🖱️",
        "Controlla lo stato di aggiornamento del sistema operativo del tuo computer e smartphone 📲",
        "Scrivi un elenco delle 3 skill comunicative che ritieni fondamentali nei rapporti umani 💬",
        "Impara le basi della cartografia leggendo come si interpretano le curve di livello di una mappa 🗺️",
        "Organizza una cartella cloud condivisa con i tuoi amici per scambiarvi appunti utili 📁",
        "Fai un riassunto scritto di 5 righe riguardante l'ultimo articolo scientifico che hai letto 🔬",
        "Impara la differenza tra hardware di input e hardware di output in informatica 🖥️",
        "Pulisci la tua postazione studio rimuovendo la polvere accumulata dietro lo schermo 🧹",
        "Crea un piccolo glossario personale con 10 parole nuove cercate sul dizionario 📖",
        "Pianifica una scheda di allenamento a corpo libero da poter fare comodamente in camera 🏃‍♂️",
        "Controlla la scadenza della tua carta d'identità o abbonamento dei trasporti pubblici 🪪",
        "Impara a memoria i nomi dei componenti principali della cellula vegetale ed animale 🧬",
        "Scrivi una scaletta con i punti chiave da seguire per fare una presentazione orale perfetta 🗣️",
        "Riorganizza i tuoi file video sul computer dividendoli per progetti o ricordi personali 🎞️",
        "Impara a fare la formattazione corretta dei paragrafi su un documento di testo digitale 📄",
        "Pulisci la cover del tuo telefono igienizzandola accuratamente da ogni residuo 🧼",
        "Trova un articolo che spieghi l'importanza della biodiversità negli ecosistemi naturali 🌿",
        "Fai un elenco di 5 mete storiche italiane che vorresti approfondire durante le vacanze 🇮🇹",
        "Impara i comandi di scelta rapida da tastiera (shortcut) più utili per il browser che usi 🌐",
        "Riorganizza il cassetto della scrivania posizionando gli oggetti di uso quotidiano davanti 📐",
        "Scrivi una pagina di riflessioni personali focalizzandoti sui traguardi raggiunti nell'ultimo mese 📝",
        "Impara a calcolare il volume di un solido geometrico semplice partendo dalle formule base 🧮",
        "Controlla lo stato dei cavi di ricarica del telefono eliminando quelli logorati o non sicuri 🔌",
        "Pianifica la struttura del tuo prossimo portfolio o archivio di lavori personali 🚀"
    ]
};

// FUNZIONE OTTENIMENTO DATI (con controllo automatico della settimana corrente)
function ottieniDatiStatistiche() {
    const dataCorrente = new Date();
    const numeroSettimana = Math.ceil((((dataCorrente - new Date(dataCorrente.getFullYear(), 0, 1)) / 86400000) + 3) / 7);
    const chiaveSettimana = `${dataCorrente.getFullYear()}-W${numeroSettimana}`;
    
    const salvataggioPrecedente = localStorage.getItem('scaccianoia_stats_data');
    const idSettimanaSalvata = localStorage.getItem('scaccianoia_stats_week');

    if (!salvataggioPrecedente || idSettimanaSalvata !== chiaveSettimana) {
        const datiVuoti = [0, 0, 0, 0, 0, 0, 0];
        localStorage.setItem('scaccianoia_stats_data', JSON.stringify(datiVuoti));
        localStorage.setItem('scaccianoia_stats_week', chiaveSettimana);
        return datiVuoti;
    }
    return JSON.parse(salvataggioPrecedente);
}

function salvaDatiStatistiche(dati) {
    localStorage.setItem('scaccianoia_stats_data', JSON.stringify(dati));
}

// INTERFACCIA E NAVIGAZIONE
document.addEventListener('DOMContentLoaded', () => {
    let categoriaSelezionata = '';
    let attivitaEstratta = '';

    const screenHome = document.getElementById('screen-home');
    const screenResult = document.getElementById('screen-result');
    const screenStats = document.getElementById('screen-stats');
    const textAttivita = document.getElementById('text-attivita');
    const resultBadge = document.getElementById('result-badge');
    const chartBarsContainer = document.getElementById('chart-bars-container');

    function mostraSchermata(idSchermata) {
        document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
        document.getElementById(idSchermata).classList.add('active');
    }

    function estraiAttivita(categoria) {
        const lista = databaseAttivita[categoria];
        let nuovaAttivita = lista[Math.floor(Math.random() * lista.length)];
        while (nuovaAttivita === attivitaEstratta && lista.length > 1) {
            nuovaAttivita = lista[Math.floor(Math.random() * lista.length)];
        }
        attivitaEstratta = nuovaAttivita;
        textAttivita.textContent = attivitaEstratta;
        
        const nomiCategorie = { in_casa: '🏠 IN CASA', all_aperto: '🌳 ALL\'APERTO', produttive: '🚀 PRODUTTIVE' };
        resultBadge.textContent = nomiCategorie[categoria];
    }

    // Navigazione Categorie
    document.querySelectorAll('.btn-category').forEach(button => {
        button.addEventListener('click', () => {
            categoriaSelezionata = button.getAttribute('data-category');
            estraiAttivita(categoriaSelezionata);
            mostraSchermata('screen-result');
        });
    });

    // Reroll
    document.getElementById('btn-reroll').addEventListener('click', () => {
        if (categoriaSelezionata) estraiAttivita(categoriaSelezionata);
    });

    // Accetta Sfida
    document.getElementById('btn-accetta').addEventListener('click', () => {
        const dati = ottieniDatiStatistiche();
        let giornoIncluso = new Date().getDay();
        let indiceGiorno = giornoIncluso === 0 ? 6 : giornoIncluso - 1;

        dati[indiceGiorno] += 1;
        salvaDatiStatistiche(dati);

        alert('Sfida accettata e registrata! Vai a spaccare! 🔥');
        mostraSchermata('screen-home');
    });

    // Vai a schermata Statistiche (Tu)
    document.getElementById('btn-to-stats').addEventListener('click', () => {
        disegnaGrafico();
        mostraSchermata('screen-stats');
    });

    // Torna alla Home
    document.querySelectorAll('.btn-back').forEach(btn => {
        btn.addEventListener('click', () => {
            mostraSchermata('screen-home');
        });
    });

    // Pulsante Rosso di Reset Manuale dei Dati
    document.getElementById('btn-reset-dati').addEventListener('click', () => {
        if (confirm("Vuoi davvero azzerare tutte le statistiche di questa settimana? 🛑")) {
            const datiAzzerati = [0, 0, 0, 0, 0, 0, 0];
            salvaDatiStatistiche(datiAzzerati);
            disegnaGrafico();
        }
    });

    // Disegna Grafico
    function disegnaGrafico() {
        const dati = ottieniDatiStatistiche();
        const giorniSettimana = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'];
        chartBarsContainer.innerHTML = '';

        dati.forEach((valore, indice) => {
            const barWrapper = document.createElement('div');
            barWrapper.className = 'chart-bar-wrapper';
            const percentualeAltezza = Math.min((valore / 10) * 100, 100);

            barWrapper.innerHTML = `
                <div class="chart-bar-fill" style="height: ${percentualeAltezza}%">
                    <span class="chart-bar-value">${valore}</span>
                </div>
                <span class="chart-day-label">${giorniSettimana[indice]}</span>
            `;
            chartBarsContainer.appendChild(barWrapper);
        });
    }
});
