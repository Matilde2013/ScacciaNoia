// ==========================================
// DATABASE ATTIVITÀ (Almeno 100 per categoria)
// ==========================================
const databaseAttivita = {
    in_casa: [
        "Crea una playlist musicale divisa per stati d'animo 🎵",
        "Riorganizza la libreria o la scrivania secondo un criterio cromatico 📚",
        "Impara a fare l'origami di una gru giapponese 🦢",
        "Pulisci e disinfetta a fondo la tastiera e lo schermo del computer 💻",
        "Scrivi una recensione dettagliata dell'ultimo film che hai visto 🎬",
        "Fai 15 minuti di stretching o yoga seguendo un video online 🧘",
        "Impara a fare i nodi marinari principali con uno spago 🪢",
        "Cucina un dolce usando solo gli ingredienti che hai già in dispensa 🧁",
        "Fai il backup di tutte le foto sul telefono e cancella i duplicati 📸",
        "Scrivi una lista di 10 obiettivi che vuoi raggiungere entro l'anno 🎯",
        "Disegna un autoritratto senza mai staccare la penna dal foglio ✏️",
        "Svuota e riorganizza completamente il cassetto del caos 🗄️",
        "Impara a contare fino a 10 in tre lingue diverse che non conosci 🌍",
        "Crea una maschera per il viso fatta in casa con ingredienti naturali 💆",
        "Trova un podcast su un argomento assurdo o storico e ascolta un episodio 🎙️",
        "Scrivi una letterina al te stesso del futuro tra 5 anni ✉️",
        "Fai un cruciverba, un sudoku o un rompicapo logico 🧠",
        "Impara un trucco di magia semplice con le carte da gioco 🃏",
        "Prepara una tazza di tè o tisana curando perfettamente il tempo di infusione ☕",
        "Cerca e impara 5 nuove parole nel dizionario per arricchire il tuo lessico 📖",
        "Riorganizza le app sulla schermata home del telefono per renderla minimalista 📱",
        "Fai un inventario dei vestiti che non usi più da donare 👕",
        "Impara a fare la verticale o migliora il tuo equilibrio sul posto 🤸",
        "Crea un cocktail analcolico originale mixando succhi e spezie 🍹",
        "Ascolta un album musicale intero dall'inizio alla fine senza distrazioni 📀",
        "Esegui un auto-massaggio rilassante alle mani o ai piedi 🦶",
        "Impara a memoria i nomi di tutti gli stati di un continente a scelta 🗺️",
        "Scrivi una poesia breve o un testo rap inventato sul momento ✍️",
        "Pulisci le tue scarpe preferite finché non tornano come nuove 👟",
        "Impara le basi dell'alfabeto Morse o dei segnali con le mani 📡",
        "Fai un esperimento scientifico semplice con acqua, olio e sale 🧪",
        "Inventa un gioco da tavolo usando solo fogli di carta e monete 🎲",
        "Crea una bacheca di ispirazione visiva (moodboard) su Pinterest 📌",
        "Leggi i primi due capitoli di quel libro che hai abbandonato sul comodino 📕",
        "Fai 30 squat e cronometra quanto tempo riesci a stare in plank ⏱️",
        "Riscrivi una vecchia ricetta di famiglia migliorandola a tuo gusto 📝",
        "Trova e ordina tutti i cavi aggrovigliati dietro alla TV o al PC 🔌",
        "Impara a pronunciare correttamente le parole più difficili della lingua italiana 🗣️",
        "Fai volare un aeroplanino di carta fuori dalla finestra e studia la traiettoria ✈️",
        "Esplora una città casuale nel mondo usando Google Street View 🗺️",
        "Crea una coreografia stupida sulle note della tua canzone preferita 🕺",
        "Inizia un diario della gratitudine scrivendo 3 cose belle di oggi ✨",
        "Impara a fischiare usando le dita in modo potente 😗",
        "Disegna la mappa dettagliata della tua casa vista dall'alto 🗺️",
        "Guarda un cortometraggio d'animazione premiato agli Oscar 🎥",
        "Trova una vecchia foto d'infanzia e prova a ricrearla oggi 👶",
        "Fai un test della velocità di battitura sulla tastiera online ⌨️",
        "Riorganizza il tuo portafoglio eliminando scontrini vecchi e tessere inutili 💳",
        "Impara la ricetta perfetta per fare la pizza in teglia fatta in casa 🍕",
        "Medita in silenzio totale per 5 minuti concentrandoti sul respiro 🧘‍♂️",
        "Scrivi un messaggio di ringraziamento inaspettato a una persona speciale 💬",
        "Impara a fare la maglia o il punto croce rudimentale con un filo 🧵",
        "Pianifica nei dettagli il viaggio dei tuoi sogni (anche se ipotetico) ✈️",
        "Trova 5 oggetti in casa che non usi più e mettili in vendita online 📦",
        "Ascolta un'opera lirica o una sinfonia classica famosa 🎻",
        "Fai una sessione di decluttering digitale cancellando le vecchie email 📧",
        "Impara i nomi delle costellazioni principali visibili dal tuo emisfero 🌌",
        "Crea una scultura astratta usando solo oggetti presenti sul tavolo 🗿",
        "Prova a risolvere un indovinello logico famoso senza guardare la soluzione 🕵️",
        "Scrivi la lista delle 20 canzoni della tua vita in ordine cronologico 🎶",
        "Impara a fare un nodo alla cravatta in 3 modi differenti 👔",
        "Cucina dei biscotti veloci con gocce di cioccolato 🍪",
        "Fai un disegno geometrico perfetto usando solo righello e compasso 📐",
        "Cerca su internet il significato profondo del tuo cognome 👥",
        "Crea un set fotografico casalingo per un piccolo oggetto o una pianta 📸",
        "Guarda un documentario naturalistico sugli abissi marini o lo spazio 🦈",
        "Impara a fare giocoleria con due o tre arance o palline 🍊",
        "Riorganizza la disposizione dei quadri o delle decorazioni sulle pareti 🖼️",
        "Scrivi l'incipit di un romanzo fantasy ambientato nella tua città 📖",
        "Fai un massaggio al viso per stimolare la circolazione cutanea 💆‍♂️",
        "Trova una nuova stazione radio internazionale da ascoltare in sottofondo 📻",
        "Pianifica i pasti sani e bilanciati per tutta la prossima settimana 🥗",
        "Trova le differenze tra due riproduzioni di un quadro famoso online 🎨",
        "Impara a fare il pane fatto in casa partendo da zero 🍞",
        "Fai un cruciverba interamente in una lingua straniera che studi 🔤",
        "Impara le regole ufficiali di uno sport che non hai mai capito bene 🏈",
        "Crea un piccolo raccoglitore di citazioni dai libri che ami di più ✍️",
        "Controlla la scadenza di tutti i farmaci e prodotti nel mobiletto del bagno 💊",
        "Impara a suonare una melodia elementare su una tastiera virtuale 🎹",
        "Fai una lista delle cose che ti rendono più felice quando sei giù di morale ❤️",
        "Pulisci a fondo gli specchi e i vetri delle finestre della tua stanza 🪟",
        "Impara le basi del disegno prospettico a un punto di fuga ✏️",
        "Cerca e ascolta la canzone numero uno in classifica nel giorno della tua nascita 🎵",
        "Fai un allenamento per gli addominali di soli 7 minuti ad alta intensità 🔥",
        "Inventa un indovinello originale e mandalo a un amico per testarlo 🧠",
        "Pulisci e lucida i tuoi gioielli, orologi o accessori metallici ✨",
        "Impara a preparare il caffè perfetto con la moka seguendo i trucchi dei baristi ☕",
        "Scrivi un micro-racconto horror racchiuso in sole due frasi 👁️",
        "Impara a riconoscere i diversi tipi di nuvole guardando fuori ☁️",
        "Riorganizza i file sul tuo desktop creando cartelle logiche 📂",
        "Fai una sessione di respirazione profonda quadrata (Box Breathing) 💨",
        "Impara a fare un massaggio rilassante alle spalle a chi vive con te 💆",
        "Disegna una nuova versione stilizzata del tuo logo o firma personale ✒️",
        "Fai una lista dei film cult che non hai mai visto e seleziona il prossimo 🎬",
        "Trova 3 canali YouTube divulgativi fantastici e iscriviti subito 📺",
        "Pulisci e organizza lo scomparto delle spezie in cucina 🌶️",
        "Impara le basi del codice HTML scrivendo una pagina web a mano 💻",
        "Scrivi un messaggio di complimenti sinceri a un creator che segui online 🌟",
        "Fai un inventario dei libri che possiedi per creare una libreria digitale 📚",
        "Colora un disegno mandala stampato o crealo tu da zero geometricamente 🎨",
        "Stai seduto fermo in silenzio per 3 minuti senza guardare alcun display ⏰"
    ],
    all_aperto: [
        "Fai una passeggiata senza meta svoltando a sinistra a ogni incrocio dispari 🚶",
        "Trova un parco vicino e siediti a piedi nudi sull'erba per 10 minuti 👣",
        "Fai una sessione di fotografia macro catturando dettagli di fiori e insetti 🐜",
        "Visita un monumento o una via storica della tua città dove non sei mai stato 🏛️",
        "Fai un giro in bicicletta esplorando un quartiere residenziale nuovo 🚲",
        "Trova una panchina isolata e fai finta di essere una spia che osserva i passanti 🕶️",
        "Fai una corsa leggera a ritmo costante cercando di non guardare il cronometro 🏃",
        "Trova e fotografa 5 diverse specie di alberi o piante nel tuo quartiere 🌳",
        "Cerca una fontana storica o un corso d'acqua e ascolta il rumore per 5 minuti 🌊",
        "Visita il mercato rionale o un mercatino delle pulci locale alla ricerca di stranezze 🛒",
        "Fai una camminata veloce ascoltando un audiolibro immersivo 🎧",
        "Trova il punto più alto accessibile della tua zona per ammirare il panorama ⛰️",
        "Fai un picnic improvvisato su un prato con uno snack e un libro 🧺",
        "Cerca un murales o un'opera di street art magnifica e scopri l'autore 🎨",
        "Visita un vivaio o un negozio di piante e scegli una piantina da curare 🪴",
        "Fai una camminata notturna sicura per osservare le luci della città e le stelle 🌌",
        "Trova un posto perfetto per scattare una foto simmetrica o geometrica 📐",
        "Fai un salto in una libreria indipendente o dell'usato e sfoglia libri a caso 📚",
        "Prendi un caffè da asporto e bevilo seduto su una panchina guardando il cielo ☕",
        "Cerca un'area cani e fermati a guardare gli animali che giocano felici 🐕",
        "Fai una camminata raccogliendo foglie dalle forme particolari per un erbario 🍁",
        "Trova un posto all'aperto dove poter guardare il tramonto senza fretta 🌅",
        "Fai una passeggiata e prova a identificare i canti dei diversi uccelli intorno 🐦",
        "Esplora un sentiero naturale o un bosco vicino a piedi o di corsa 🌲",
        "Fai una sessione di sketching all'aperto disegnando uno scorcio urbano 📝",
        "Trova una piazza storica e conta quanti elementi architettonici ripetitivi ci sono 🏛️",
        "Fai una passeggiata sotto la pioggia leggera munito di un grande ombrello 🌧️",
        "Cerca un negozio etnico o internazionale e compra uno snack che non conosci 🌍",
        "Fai un salto al museo locale della tua città, spesso riserva sorprese 🖼️",
        "Prendi un mezzo pubblico (tram o bus) a caso e scendi dopo esattamente 7 fermate 🚌",
        "Fai stretching all'aperto su un prato o in un'area attrezzata del parco 🧘",
        "Trova un quadrante solare (meridiana) nella tua città e verifica l'ora solare ☀️",
        "Fai una camminata di 5 km monitorando il percorso su una mappa dello smartphone 🗺️",
        "Trova una grande quercia o albero secolare e fermati a toccare la sua corteccia 🪵",
        "Fai un salto al porto, su un molo o vicino a un lago per guardare i riflessi ⚓",
        "Fai una caccia al tesoro urbana cercando targhe commemorative bizzarre 🥇",
        "Trova un bar con tavolini all'aperto e fai cruciverba respirando aria fresca 📰",
        "Fai una passeggiata e raccogli piccoli sassi lisci da dipingere una volta a casa 🪨",
        "Trova un parco giochi vuoto e sali sull'altalena per rivivere l'infanzia 🎢",
        "Fai una camminata meditativa concentrandoti esclusivamente sul suono dei passi 🚶‍♂️",
        "Visita un cimitero monumentale, un luogo ricco di arte, silenzio e storia 🦤",
        "Trova un punto panoramico e scatta una foto panoramica a 360 gradi 📸",
        "Fai una girata in un cortile pubblico o chiostro antico nascosto nel centro 🏛️",
        "Cerca un negozio di dischi in vinile vintage e sfoglia le copertine d'epoca 📻",
        "Fai una camminata veloce fino al quartiere più moderno per vederne l'architettura 🏢",
        "Siediti all'aperto vicino a dei fiori e aspetta di vedere un'ape o farfalla all'opera 🦋",
        "Fai una passeggiata mattutina all'alba quando la città è completamente silenziosa 🌄",
        "Trova una vecchia cabina telefonica o un elemento urbano del secolo scorso ☎️",
        "Fai un giro in un mercato ortofrutticolo e lasciati ispirare dai colori stagionali 🍎",
        "Fai una passeggiata fino a un ponte e guarda le macchine o l'acqua scorrere sotto 🌉",
        "Trova una salita ripida e percorrila a passo svelto per attivare il sistema cardio 🧗",
        "Fai un salto nell'edicola più fornita e acquista una rivista indipendente straniera 📰",
        "Fai una passeggiata fotografica catturando solo oggetti di un colore specifico 🔴",
        "Trova una statua storica e cerca online la storia della persona raffigurata 🗿",
        "Fai una sessione di campionamento acustico all'aperto registrando la natura 🎙️",
        "Trova un muretto o una zona adatta per allenare l'equilibrio camminandoci sopra 🧱",
        "Fai una visita guidata gratuita all'aperto se disponibile nella tua città 🗺️",
        "Fai una passeggiata lungo i binari di una ferrovia dismessa o pista ciclabile 🛤️",
        "Trova una panchina sotto un grande albero frondoso e rilassati all'ombra 🌳",
        "Fai un giro dei negozi di antiquariato o modernariato della zona 🕰️",
        "Esplora un vicolo strettissimo del centro storico in cui non hai mai svoltato 🗺️",
        "Fai una camminata portando con te della frutta secca da mangiare come snack sano 🥜",
        "Trova un punto in cui puoi vedere nitidamente l'orizzonte senza palazzi davanti 👀",
        "Fai una passeggiata rinfrescante vicino a una fontana monumentale con spruzzi ⛲",
        "Trova una fioritura stagionale splendida e scatta un set di macro-foto 🌸",
        "Fai un giro intorno al perimetro esterno del castello o della fortezza della città 🏰",
        "Prendi la bicicletta e sfida te stesso a raggiungere una frazione vicina 🚴‍♂️",
        "Fai una sosta in un parco letterario o giardino dedicato a scrittori e poeti 📖",
        "Fai una camminata fino a un negozio biologico locale e compra un frutto esotico 🍍",
        "Trova un posto isolato nella natura per urlare a pieni polmoni e liberare lo stress 🗣️",
        "Fai una passeggiata esplorando l'architettura delle chiese storiche vicine ⛪",
        "Trova una radura tranquilla e prova a fare giocoleria usando piccoli sassi a terra 🪨",
        "Fai un giro nel quartiere universitario per respirare l'atmosfera dinamica 🎓",
        "Trova una via commerciale pedonale e fai window shopping senza comprare nulla 🛍️",
        "Fai una passeggiata fino al laghetto del parco e osserva le anatre nuotare 🦆",
        "Siediti all'aperto e prova a disegnare il profilo dei palazzi all'orizzonte 🏙️",
        "Fai un salto in una galleria d'arte contemporanea ad accesso libero 🖼️",
        "Fai una camminata per raggiungere un orto urbano o comunitario della città 🥬",
        "Trova una panchina esposta al sole e chiudi gli occhi godendoti il calore sul viso ☀️",
        "Fai una passeggiata per scovare le targhe delle vie con i nomi più assurdi o comici 🗺️",
        "Trova un albero perfetto e prova ad arrampicarti in sicurezza sui rami bassi 🧗‍♂️",
        "Fai un giro in un negozio di articoli sportivi o da campeggio sognando avventure ⛺",
        "Fai una corsa a intervalli corti alternando scatti veloci a camminata rilassata 0️⃣",
        "Trova una scalinata monumentale e percorrila su e giù per tre volte di fila 🪜",
        "Fai una camminata fino alla biblioteca comunale per scoprire gli eventi all'aperto 📚",
        "Trova una zona di campagna vicina e osserva le colture e i campi agricoli 🌾",
        "Fai una passeggiata e scatta foto focalizzandoti sui riflessi nelle pozzanghere 🪞",
        "Trova un anfiteatro romano o un teatro all'aperto moderno e testane l'acustica 🎭",
        "Fai un giro esplorativo in un quartiere industriale riqualificato pieno di loft 🏭",
        "Fai una camminata portando una busta per raccogliere eventuali rifiuti sul percorso ♻️",
        "Trova una panchina vicino a un campo da basket o skatepark e guarda le acrobazie 🛹",
        "Fai una passeggiata rigenerante scoprendo un vicolo cieco caratteristico 🛣️",
        "Trova una siepe profumata di gelsomino o lavanda e goditi l'aroma naturale 🪻",
        "Fai una camminata seguendo un percorso che tracci una forma geometrica sulla mappa 📐",
        "Trova una meridiana antica su un palazzo e calcola lo scarto con l'orologio 🕰️",
        "Fai una camminata fino a un negozio artigianale per vedere i maestri all'opera 🔨",
        "Trova una radura per fare capriole o esercizi a corpo libero all'aria aperta 🤸‍♂️",
        "Fai un giro fotografico dedicato esclusivamente ai portoni storici della città 🚪",
        "Trova un prato immenso e sdraiati a terra a pancia in su a guardare le nuvole ☁️",
        "Fai una passeggiata rilassante concludendo con cinque minuti di stretching finale 🧘‍♀️"
    ],
    produttive: [
        "Impara i concetti base di un nuovo linguaggio di programmazione (es. Python) 💻",
        "Pulisci e organizza la casella email cancellando newsletter inutili 📧",
        "Aggiorna il tuo curriculum vitae inserendo le ultime competenze acquisite 📄",
        "Crea un foglio Excel dettagliato per tracciare le tue spese mensili e risparmi 📊",
        "Guarda un discorso TED Talk su un argomento di crescita personale o scienza 💡",
        "Riorganizza l'armadio scartando i vestiti che non indossi da più di un anno 👚",
        "Fai un backup completo di tutti i dati del computer su un hard disk esterno 🗄️",
        "Impara a memoria 10 parole utili in una lingua straniera complessa 🌍",
        "Pianifica i tuoi obiettivi finanziari personali per i prossimi 3 e 5 anni 📈",
        "Scrivi un articolo o un post approfondito su LinkedIn riguardo al tuo settore 📝",
        "Riapri quel corso online acquistato mesi fa e completa la prima lezione 🎓",
        "Fai una pulizia profonda del frigorifero verificando scadenze e igienizzando 🧼",
        "Riorganizza tutti i documenti cartacei importanti in faldoni etichettati 📂",
        "Impara le regole fondamentali del primo soccorso medico da fonti ufficiali 🚑",
        "Pianifica il menù salutare della settimana compilando la lista della spesa 🥗",
        "Fai manutenzione alle tue piante: pota le foglie secche e concima la terra 🪴",
        "Ottimizza la velocità del tuo telefono disinstallando app inutilizzate 📱",
        "Scrivi una lista delle tue 5 competenze principali e di 3 che vuoi sviluppare 🎯",
        "Aggiorna il tuo profilo professionale online con una foto e bio recente 👤",
        "Impara a fare la digitazione alla cieca senza guardare la tastiera del PC ⌨️",
        "Fai manutenzione alla bicicletta: gonfia le ruote e olia la catena 🚲",
        "Leggi un capitolo di un saggio di economia, psicologia o saggistica utile 📘",
        "Prepara tutti i vestiti e l'occorrente per la settimana nei minimi dettagli 👔",
        "Impara le basi del montaggio video usando un software gratuito dello smartphone 🎬",
        "Riorganizza la dispensa della cucina mettendo davanti i cibi in scadenza 🥫",
        "Crea una lista dettagliata di regali intelligenti per i compleanni futuri 🎁",
        "Fai un controllo approfondito della sicurezza dei tuoi account cambiando password 🔒",
        "Scrivi un'email di follow-up o di contatto a un professionista che stimi 📧",
        "Impara come funziona l'algoritmo di un social network per scopi professionali 📊",
        "Riorganizza gli attrezzi da lavoro o la cancelleria della tua scrivania ✏️",
        "Fai un check-up della tua postura seduta regolando altezza di sedia e monitor 🪑",
        "Impara a leggere e interpretare correttamente un'etichetta nutrizionale 🍎",
        "Rivedi e ottimizza le tue coperture assicurative o i contratti delle utenze 📄",
        "Scrivi la recensione di un libro utile per condividere gli insight chiave 📖",
        "Impara le tecniche di memorizzazione avanzate come il Palazzo della Memoria 🧠",
        "Fai decluttering della galleria dello smartphone eliminando gli screenshot vecchi 📸",
        "Pianifica una routine mattutina super produttiva da testare domani ⏰",
        "Impara le basi del public speaking guardando video di grandi oratori 🗣️",
        "Pulisci i filtri del condizionatore, della lavatrice o dell'aspirapolvere 🧼",
        "Scrivi una guida rapida o un tutorial su qualcosa che sai fare benissimo 🛠️",
        "Analizza la tua gestione del tempo dell'ultima settimana usando un'app ⏱️",
        "Impara le basi della contabilità personale o aziendale (attivi e passivi) 💵",
        "Fai un inventario di tutti i farmaci che hai in casa eliminando quelli scaduti 💊",
        "Configura un sistema di salvataggio automatico cloud per i tuoi progetti cloud ☁️",
        "Impara a fare nodi resistenti utili in situazioni di emergenza o campeggio 🪢",
        "Scrivi una lista di 20 cose che puoi automatizzare o delegare nella tua vita 🤖",
        "Ottimizza il tuo spazio di lavoro eliminando distrazioni visive sul tavolo 🖥️",
        "Impara le basi del web design studiando l'allineamento e i contrasti di colore 🎨",
        "Riorganizza il mobiletto delle scarpe pulendo e lucidando le calzature 👞",
        "Scrivi un elenco delle tue abitudini negative e progetta come sostituirle 🔄",
        "Impara a cucire un bottone o riparare un piccolo strappo in modo invisibile 🧵",
        "Fai un bilancio dei libri letti quest'anno valutando la qualità delle letture 📚",
        "Pianifica un progetto secondario (side hustle) definendo i primi 3 step pratici 🚀",
        "Impara le basi della SEO per ottimizzare contenuti web e blog personali 🔍",
        "Fai pulizia profonda dei pennelli da trucco, rasoi o strumenti di igiene 🪥",
        "Riorganizza le icone e i file sul desktop del PC per una pulizia totale 📂",
        "Scrivi una lettera formale o una richiesta che rimandavi da troppo tempo ✉️",
        "Impara i segreti della negoziazione efficace nel lavoro o negli acquisti 🤝",
        "Pulisci l'auto o lo scooter dentro e fuori curando i minimi dettagli 🚗",
        "Fai un piano di studi dettagliato per una materia che desideri approfondire 📚",
        "Impara a fare investimenti base leggendo una guida per principianti 📈",
        "Riorganizza la scatola dei ricordi conservando solo gli oggetti di vero valore 🎁",
        "Scrivi un elenco dei tuoi punti di forza professionali supportati da esempi 🏆",
        "Impara come funzionano i motori di ricerca o l'intelligenza artificiale 🧠",
        "Fai manutenzione della borsa o dello zaino svuotandolo e lavandolo 🎒",
        "Ottimizza il tuo profilo di risparmio energetico in casa impostando i timer 💡",
        "Scrivi un piano d'action per superare una tua paura o blocco mentale 🎯",
        "Impara a fare mappe mentali efficaci per schematizzare concetti complessi 🗺️",
        "Pulisci a fondo tutti i gioielli o gli accessori metallici che usi spesso ✨",
        "Riorganizza le cartelle dei tuoi progetti digitali secondo una nomenclatura standard 📁",
        "Scrivi un saggio breve o un riassunto di un concetto complesso che hai studiato ✍️",
        "Impara i principi della finanza decentralizzata o delle nuove tecnologie economiche 📊",
        "Fai decluttering dei contatti in rubrica cancellando i numeri inutilizzati 📱",
        "Pianifica un corso di aggiornamento o certificazione utile per la tua carriera 🎓",
        "Impara le tecniche di respirazione utili per aumentare la concentrazione 💨",
        "Riorganizza il ripostiglio sistemando gli oggetti per frequenza di utilizzo 📦",
        "Scrivi una lista delle persone che ti ispirano e analizza il perché 👥",
        "Impara a fare una presentazione aziendale ad alto impatto visivo 📊",
        "Fai manutenzione di coltelli e utensili da cucina affilando le lame 🔪",
        "Ottimizza la tua configurazione per il sonno regolando luci e temperatura della stanza 🛌",
        "Scrivi un piano di emergenza familiare con numeri utili e indicazioni chiare 🚨",
        "Impara i rudimenti di una lingua dei segni per una comunicazione inclusiva 🧏",
        "Riorganizza le tue vecchie foto stampate riponendole in un album ordinato 📸",
        "Scrivi una recensione professionale di uno strumento o software che usi sempre 💻",
        "Impara a leggere velocemente raddoppiando la tua velocità di lettura attuale 📖",
        "Fai pulizia radicale dei file temporanei e della cache di tutti i tuoi dispositivi 🧹",
        "Pianifica una strategia di personal branding per posizionarti al meglio online 🚀",
        "Impara i concetti base del project management (metodologia Agile/Kanban) 📊",
        "Riorganizza lo scaffale delle spezie e dei condimenti eliminando i barattoli vuoti 🧂",
        "Scrivi una lista di domande frequenti sul tuo lavoro con le relative risposte 💬",
        "Impara a fare ritocco fotografico base correggendo luci e ombre di uno scatto 🎨",
        "Fai pulizia profonda dei tappeti o dei cuscini del divano igienizzandoli 🛋️",
        "Pianifica la partecipazione a un evento di networking o conferenza del tuo settore 🤝",
        "Impara le basi del copyediting per correggere bozze ed eliminare refusi dai testi ✍️",
        "Riorganizza la cartella dei documenti fiscali pronti per la dichiarazione dei redditi 🧾",
        "Scrivi un piano per ridurre la tua impronta ecologica quotidiana in 5 mosse 🌿",
        "Impara come coltivare erbe aromatiche sul balcone di casa partendo dai semi 🌱",
        "Ottimizza le impostazioni di notifica delle app per eliminare le distrazioni digitali 🔕",
        "Scrivi la tua biografia professionale in formato breve, medio e lungo 📝",
        "Pulisci a fondo e riordina la valigetta o lo scomparto dei medicinali di casa 🩹"
    ]
};

// ==========================================
// STATO DELL'APPLICAZIONE (LocalStorage)
// ==========================================
let preferiti = JSON.parse(localStorage.getItem('boredom_favorites')) || [];
let clickHistory = JSON.parse(localStorage.getItem('boredom_history')) || {
    in_casa: 0,
    all_aperto: 0,
    produttive: 0
};
// Contatore dei click settimanali (Lunedì-Domenica)
let weeklyStats = JSON.parse(localStorage.getItem('boredom_weekly')) || [2, 5, 1, 4, 8, 3, 6];

let currentActivity = "";

// ==========================================
// ATTIVAZIONE DEGLI ELEMENTI DOM
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initGenerator();
    renderFavorites();
    renderStatsAndChart();
});

// 1. SISTEMA DI NAVIGAZIONE SCHERMATE
function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const screens = document.querySelectorAll('.app-screen');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetScreenId = item.getAttribute('data-target');
            
            navItems.forEach(nav => nav.classList.remove('active'));
            screens.forEach(scr => scr.classList.remove('active'));
            
            item.classList.add('active');
            document.getElementById(targetScreenId).classList.add('active');

            // Ricarica i dati dinamici se si cambia schermata
            if (targetScreenId === 'screen-favorites') renderFavorites();
            if (targetScreenId === 'screen-profile') renderStatsAndChart();
        });
    });
}

// 2. LOGICA GENERATORE DI ATTIVITÀ
function initGenerator() {
    const btnGenerate = document.getElementById('btn-generate');
    const selectCategory = document.getElementById('category-select');
    const resultBox = document.getElementById('result-box');
    const activityText = document.getElementById('activity-text');
    const btnHeart = document.getElementById('btn-heart');

    btnGenerate.addEventListener('click', () => {
        const selectedCat = selectCategory.value;
        const arrayAttivita = databaseAttivita[selectedCat];
        
        // Estrazione casuale
        const randomIndex = Math.floor(Math.random() * arrayAttivita.length);
        currentActivity = arrayAttivita[randomIndex];
        
        // Rendering testo
        activityText.textContent = currentActivity;
        resultBox.classList.remove('hidden');

        // Aggiorna lo stato dei cuoricini
        if (preferiti.includes(currentActivity)) {
            btnHeart.classList.add('liked');
            btnHeart.innerHTML = '<i class="fa-solid fa-heart"></i>';
        } else {
            btnHeart.classList.remove('liked');
            btnHeart.innerHTML = '<i class="fa-regular fa-heart"></i>';
        }

        // Salva storici e aumenta i dati statistici
        clickHistory[selectedCat]++;
        localStorage.setItem('boredom_history', JSON.stringify(clickHistory));

        // Aggiungi un punto al giorno corrente sul grafico
        const currentDayIndex = (new Date().getDay() + 6) % 7; // Trasforma Dom=0 in Lun=0...Dom=6
        weeklyStats[currentDayIndex]++;
        localStorage.setItem('boredom_weekly', JSON.stringify(weeklyStats));
    });

    // Azione sul cuoricino preferiti
    btnHeart.addEventListener('click', () => {
        if (!currentActivity) return;

        if (preferiti.includes(currentActivity)) {
            // Rimuovi dai preferiti
            preferiti = preferiti.filter(act => act !== currentActivity);
            btnHeart.classList.remove('liked');
            btnHeart.innerHTML = '<i class="fa-regular fa-heart"></i>';
        } else {
            // Aggiungi ai preferiti
            preferiti.push(currentActivity);
            btnHeart.classList.add('liked');
            btnHeart.innerHTML = '<i class="fa-solid fa-heart"></i>';
        }
        localStorage.setItem('boredom_favorites', JSON.stringify(preferiti));
    });
}

// 3. MOSTRA E GESTISCI LA LISTA PREFERITI
function renderFavorites() {
    const container = document.getElementById('favorites-list');
    container.innerHTML = '';

    if (preferiti.length === 0) {
        container.innerHTML = '<div class="empty-state">Non hai ancora salvato nessuna attività. Fai un salto nella Home!</div>';
        return;
    }

    preferiti.forEach(act => {
        const favItem = document.createElement('div');
        favItem.className = 'fav-item glass-card';
        favItem.innerHTML = `
            <span>${act}</span>
            <button class="btn-delete-fav"><i class="fa-solid fa-trash-can"></i></button>
        `;

        // Rimozione diretta dalla lista preferiti
        favItem.querySelector('.btn-delete-fav').addEventListener('click', () => {
            preferiti = preferiti.filter(item => item !== act);
            localStorage.setItem('boredom_favorites', JSON.stringify(preferiti));
            renderFavorites(); // Auto-aggiornamento della vista
        });

        container.appendChild(favItem);
    });
}

// 4. CALCOLO STATISTICHE E DISEGNO GRAFICO SVG DINAMICO
function renderStatsAndChart() {
    // Calcolo categoria preferita
    const textDominant = document.getElementById('dominant-category-text');
    let maxClicks = -1;
    let dominantCatName = "Nessun dato";

    const labelMap = { in_casa: "🏠 In Casa", all_aperto: "🌳 All'Aperto", produttive: "🚀 Produttive" };

    for (let key in clickHistory) {
        if (clickHistory[key] > maxClicks && clickHistory[key] > 0) {
            maxClicks = clickHistory[key];
            dominantCatName = labelMap[key];
        }
    }
    textDominant.textContent = dominantCatName === "Nessun dato" ? "Genera la prima attività!" : dominantCatName;

    // Rendering Grafico Linea/Area SVG dinamico basato sui dati reali
    const svgWidth = 700;
    const svgHeight = 250;
    const padding = 40;

    const chartLine = document.getElementById('chart-line');
    const chartArea = document.getElementById('chart-area');
    const chartDotsGroup = document.getElementById('chart-dots');
    chartDotsGroup.innerHTML = '';

    const maxVal = Math.max(...weeklyStats, 5); // Evita divisioni per zero se i dati sono tutti a 0
    const stepX = (svgWidth - padding * 2) / 6;

    let pointsCoordinates = [];

    for (let i = 0; i < 7; i++) {
        const x = padding + i * stepX;
        // Calcola l'altezza invertita (in SVG 0 è in alto)
        const y = svgHeight - padding - ((weeklyStats[i] / maxVal) * (svgHeight - padding * 2));
        pointsCoordinates.push({ x, y });

        // Crea dinamicamente i pallini sui nodi dei giorni
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', x);
        circle.setAttribute('cy', y);
        circle.setAttribute('r', '6');
        circle.setAttribute('fill', '#00f2fe');
        circle.setAttribute('style', 'transition: all 0.3s;');
        chartDotsGroup.appendChild(circle);
    }

    // Genera stringa per gli attributi 'd' del tracciato SVG
    let pathString = `M ${pointsCoordinates[0].x} ${pointsCoordinates[0].y}`;
    for (let i = 1; i < pointsCoordinates.length; i++) {
        pathString += ` L ${pointsCoordinates[i].x} ${pointsCoordinates[i].y}`;
    }

    // Applica le stringhe ai tracciati SVG per vederli a schermo
    chartLine.setAttribute('d', pathString);

    // Chiudi il perimetro in basso per creare l'area colorata sotto la linea
    let areaString = pathString + ` L ${pointsCoordinates[6].x} ${svgHeight - padding} L ${pointsCoordinates[0].x} ${svgHeight - padding} Z`;
    chartArea.setAttribute('d', areaString);
}
