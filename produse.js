/**
 * Baza de date centrală a produselor H-TIME (20 produse: câte 5 per categorie).
 * Prețurile de bază sunt exprimate în Euro (max ~1200€ pentru a nu depăși 6000 Lei la conversie).
 * Include suport complet pentru 6 limbi (RO, EN, FR, DE, ES, IT) și galerie foto (imagini).
 */
const produse = [
    // ================= CEASURI (5 produse) =================
    { 
        id: 1, 
        nume: "Ceas Rolex Oyster", nume_en: "Rolex Oyster Watch", nume_fr: "Montre Rolex Oyster", nume_de: "Rolex Oyster Uhr", nume_es: "Reloj Rolex Oyster", nume_it: "Orologio Rolex Oyster",
        pret: 1100, pretVechi: 1250, categorie: "ceasuri", isSale: true,
        imagine: "produs1-1.png", imagini: ["produs1-1.png", "produs1-2.png", "produs1-3.png"],
        descriere: "O piesă de referință în orologerie, oferind eleganță absolută și precizie mecanică garantată.",
        descriere_en: "A masterpiece in horology, providing absolute elegance and guaranteed mechanical precision.",
        descriere_fr: "Un chef-d'œuvre de l'horlogerie offrant élégance et précision absolue.",
        descriere_de: "Ein Meisterwerk der Uhrmacherkunst mit absoluter Eleganz und garantierter Präzision.",
        descriere_es: "Una obra maestra de la relojería que ofrece elegancia absoluta y precisión garantizada.",
        descriere_it: "Un capolavoro dell'orologeria che offre eleganza assoluta e precisione garantita."
    },
    { 
        id: 2, 
        nume: "Ceas TISSOT Heritage", nume_en: "TISSOT Heritage Watch", nume_fr: "Montre TISSOT Heritage", nume_de: "TISSOT Heritage Uhr", nume_es: "Reloj TISSOT Heritage", nume_it: "Orologio TISSOT Heritage",
        pret: 650, pretVechi: 800, categorie: "ceasuri", isSale: true,
        imagine: "produs2-1.png", imagini: ["produs2-1.png", "produs2-2.png", "produs2-3.png"],
        descriere: "Design vintage cu mecanism modern. Perfect pentru domnii care apreciază măiestria elvețiană.",
        descriere_en: "Vintage design with modern mechanism. Perfect for gentlemen who appreciate Swiss craftsmanship.",
        descriere_fr: "Design vintage avec mécanisme moderne. Parfait pour apprécier le savoir-faire suisse.",
        descriere_de: "Vintage-Design mit modernem Mechanismus. Perfekt für Liebhaber der Schweizer Handwerkskunst.",
        descriere_es: "Diseño vintage con mecanismo moderno. Perfecto para apreciar la artesanía suiza.",
        descriere_it: "Design vintage con meccanismo moderno. Perfetto per apprezzare l'artigianato svizzero."
    },
    { 
        id: 3, 
        nume: "Ceas Omega Seamaster", nume_en: "Omega Seamaster Watch", nume_fr: "Montre Omega Seamaster", nume_de: "Omega Seamaster Uhr", nume_es: "Reloj Omega Seamaster", nume_it: "Orologio Omega Seamaster",
        pret: 950, pretVechi: null, categorie: "ceasuri", isSale: false,
        imagine: "produs3-1.png", imagini: ["produs3-1.png", "produs3-2.png"],
        descriere: "Un ceas scufundător legendar, recunoscut pentru durabilitatea sa subacvatică și designul iconic.",
        descriere_en: "A legendary diver's watch, renowned for its underwater durability and iconic design.",
        descriere_fr: "Une montre de plongée légendaire, reconnue pour sa durabilité et son design iconique.",
        descriere_de: "Eine legendäre Taucheruhr, bekannt für ihre Unterwasserbeständigkeit und ihr ikonisches Design.",
        descriere_es: "Un legendario reloj de buceo, reconocido por su durabilidad y diseño icónico.",
        descriere_it: "Un leggendario orologio subacqueo, rinomato per la sua durata e il suo design iconico."
    },
    { 
        id: 4, 
        nume: "Ceas Patek Calatrava", nume_en: "Patek Calatrava Watch", nume_fr: "Montre Patek Calatrava", nume_de: "Patek Calatrava Uhr", nume_es: "Reloj Patek Calatrava", nume_it: "Orologio Patek Calatrava",
        pret: 1150, pretVechi: null, categorie: "ceasuri", isSale: false,
        imagine: "produs4-1.png", imagini: ["produs4-1.png", "produs4-2.png", "produs4-3.png"],
        descriere: "Esența ceasului de mână rotund, cu un cadran minimalist și luxos, potrivit oricărei ocazii.",
        descriere_en: "The essence of the round wristwatch, with a minimalist and luxurious dial suitable for any occasion.",
        descriere_fr: "L'essence de la montre ronde, avec un cadran minimaliste et luxueux.",
        descriere_de: "Die Essenz der runden Armbanduhr mit minimalistischem und luxuriösem Zifferblatt.",
        descriere_es: "La esencia del reloj de pulsera redondo, con una esfera minimalista y lujosa.",
        descriere_it: "L'essenza dell'orologio da polso rotondo, con un quadrante minimalista e lussuoso."
    },
    { 
        id: 5, 
        nume: "Ceas AP Royal Oak", nume_en: "AP Royal Oak Watch", nume_fr: "Montre AP Royal Oak", nume_de: "AP Royal Oak Uhr", nume_es: "Reloj AP Royal Oak", nume_it: "Orologio AP Royal Oak",
        pret: 1080, pretVechi: 1200, categorie: "ceasuri", isSale: true,
        imagine: "produs5-1.png", imagini: ["produs5-1.png", "produs5-2.png"],
        descriere: "Ceasul sport de lux cu un design avangardist și finisaje excepționale de top.",
        descriere_en: "The luxury sports watch with an avant-garde design and top exceptional finishes.",
        descriere_fr: "La montre de sport de luxe au design avant-gardiste et finitions exceptionnelles.",
        descriere_de: "Die Luxus-Sportuhr mit avantgardistischem Design und außergewöhnlichen Oberflächen.",
        descriere_es: "El reloj deportivo de lujo con un diseño vanguardista y acabados excepcionales.",
        descriere_it: "L'orologio sportivo di lusso con un design all'avanguardia e finiture eccezionali."
    },

    // ================= INELE (5 produse) =================
    { 
        id: 6, 
        nume: "Inel Argint Moonlight", nume_en: "Moonlight Silver Ring", nume_fr: "Bague Argent Moonlight", nume_de: "Silberring Moonlight", nume_es: "Anillo Plata Moonlight", nume_it: "Anello Argento Moonlight",
        pret: 120, pretVechi: null, categorie: "inele", isSale: false,
        imagine: "produs6-1.png", imagini: ["produs6-1.png", "produs6-2.png"],
        descriere: "Un inel delicat din argint 925, cu o piatră de zirconiu ce captează lumina lunii.",
        descriere_en: "A delicate 925 silver ring with a cubic zirconia stone that catches the moonlight.",
        descriere_fr: "Une bague délicate en argent 925 avec une pierre de zircone.",
        descriere_de: "Ein zarter Ring aus 925er Silber mit einem funkelnden Zirkonia-Stein.",
        descriere_es: "Un delicado anillo de plata 925 con una piedra de circonita.",
        descriere_it: "Un delicato anello in argento 925 con una pietra di zirconia."
    },
    { 
        id: 7, 
        nume: "Inel Eternity Gold", nume_en: "Eternity Gold Ring", nume_fr: "Bague Eternity Gold", nume_de: "Eternity Goldring", nume_es: "Anillo Eternity Gold", nume_it: "Anello Eternity Gold",
        pret: 350, pretVechi: 450, categorie: "inele", isSale: true,
        imagine: "produs7-1.png", imagini: ["produs7-1.png", "produs7-2.png"],
        descriere: "Inel din aur de 18K cu incrustații de diamante pe întreaga sa circumferință.",
        descriere_en: "18K gold ring with diamond encrustations along its entire circumference.",
        descriere_fr: "Bague en or 18 carats avec diamants sur toute sa circonférence.",
        descriere_de: "18K Goldring mit Diamantbesatz entlang des gesamten Umfangs.",
        descriere_es: "Anillo de oro de 18 quilates con diamantes en toda su circunferencia.",
        descriere_it: "Anello in oro 18K con diamanti lungo tutta la sua circonferenza."
    },
    { 
        id: 8, 
        nume: "Inel Sapphire Halo", nume_en: "Sapphire Halo Ring", nume_fr: "Bague Sapphire Halo", nume_de: "Saphir Halo Ring", nume_es: "Anillo Sapphire Halo", nume_it: "Anello Sapphire Halo",
        pret: 850, pretVechi: null, categorie: "inele", isSale: false,
        imagine: "produs8-1.png", imagini: ["produs8-1.png", "produs8-2.png"],
        descriere: "Un safir albastru regal înconjurat de un halou de diamante strălucitoare.",
        descriere_en: "A royal blue sapphire surrounded by a halo of brilliant diamonds.",
        descriere_fr: "Un saphir bleu royal entouré d'un halo de diamants brillants.",
        descriere_de: "Ein königsblauer Saphir, umgeben von einem Halo aus funkelnden Diamanten.",
        descriere_es: "Un zafiro azul real rodeado por un halo de diamantes brillantes.",
        descriere_it: "Un zaffiro blu reale circondato da un alone di diamanti brillanti."
    },
    { 
        id: 9, 
        nume: "Inel Ruby Princess", nume_en: "Ruby Princess Ring", nume_fr: "Bague Ruby Princess", nume_de: "Rubin Princess Ring", nume_es: "Anillo Ruby Princess", nume_it: "Anello Ruby Princess",
        pret: 720, pretVechi: 850, categorie: "inele", isSale: true,
        imagine: "produs9-1.png", imagini: ["produs9-1.png", "produs9-2.png"],
        descriere: "Un rubin central vibrant, susținut de o bandă elegantă din aur roz.",
        descriere_en: "A vibrant central ruby, supported by an elegant rose gold band.",
        descriere_fr: "Un rubis central vibrant, soutenu par une élégante bande en or rose.",
        descriere_de: "Ein leuchtender Rubin, getragen von einem eleganten Roségoldband.",
        descriere_es: "Un rubí central vibrante, sostenido por una elegante banda de oro rosa.",
        descriere_it: "Un vibrante rubino centrale, supportato da un'elegante fascia in oro rosa."
    },
    { 
        id: 10, 
        nume: "Inel Emerald Cut", nume_en: "Emerald Cut Ring", nume_fr: "Bague Emerald Cut", nume_de: "Smaragd Cut Ring", nume_es: "Anillo Emerald Cut", nume_it: "Anello Emerald Cut",
        pret: 980, pretVechi: null, categorie: "inele", isSale: false,
        imagine: "produs10-1.png", imagini: ["produs10-1.png", "produs10-2.png"],
        descriere: "Un smarald columbian de o claritate excepțională, încadrat de două diamante tăietură baghetă.",
        descriere_en: "A Colombian emerald of exceptional clarity, framed by two baguette-cut diamonds.",
        descriere_fr: "Un émeraude colombienne encadrée par deux diamants taille baguette.",
        descriere_de: "Ein kolumbianischer Smaragd, eingerahmt von zwei Diamanten im Baguetteschliff.",
        descriere_es: "Una esmeralda colombiana enmarcada por dos diamantes talla baguette.",
        descriere_it: "Uno smeraldo colombiano incorniciato da due diamanti taglio baguette."
    },

    // ================= CERCEI (5 produse) =================
    { 
        id: 11, 
        nume: "Cercei Diamond Drops", nume_en: "Diamond Drops Earrings", nume_fr: "Boucles Diamond Drops", nume_de: "Diamond Drops Ohrringe", nume_es: "Pendientes Diamond Drops", nume_it: "Orecchini Diamond Drops",
        pret: 450, pretVechi: null, categorie: "cercei", isSale: false,
        imagine: "produs11-1.png", imagini: ["produs11-1.png", "produs11-2.png"],
        descriere: "Cercei eleganți cu detalii lungi decorați cu mici diamante, perfecți pentru evenimente.",
        descriere_en: "Elegant long earrings decorated with small diamonds, perfect for events.",
        descriere_fr: "Boucles d'oreilles élégantes décorées de petits diamants, parfaites pour les événements.",
        descriere_de: "Elegante Ohrringe verziert mit kleinen Diamanten, perfekt für Events.",
        descriere_es: "Elegantes pendientes decorados con pequeños diamantes, perfectos para eventos.",
        descriere_it: "Eleganti orecchini decorati con piccoli diamanti, perfetti per gli eventi."
    },
    { 
        id: 12, 
        nume: "Cercei Pearl Studs", nume_en: "Pearl Studs Earrings", nume_fr: "Boucles Pearl Studs", nume_de: "Perlenstecker", nume_es: "Pendientes Pearl Studs", nume_it: "Orecchini Pearl Studs",
        pret: 180, pretVechi: 250, categorie: "cercei", isSale: true,
        imagine: "produs12-1.png", imagini: ["produs12-1.png", "produs12-2.png"],
        descriere: "Cercei pe lob cu perle perfect rotunde, o alegere clasică și rafinată pentru orice ocazie.",
        descriere_en: "Stud earrings with perfectly round pearls, a classic and refined choice for any occasion.",
        descriere_fr: "Boucles d'oreilles avec perles parfaitement rondes, un choix classique et raffiné.",
        descriere_de: "Ohrstecker mit perfekt runden Perlen, eine klassische und raffinierte Wahl.",
        descriere_es: "Pendientes con perlas perfectamente redondas, una elección clásica y refinada.",
        descriere_it: "Orecchini con perle perfettamente rotonde, una scelta classica e raffinata."
    },
    { 
        id: 13, 
        nume: "Cercei Gold Hoops", nume_en: "Gold Hoops Earrings", nume_fr: "Créoles Gold Hoops", nume_de: "Gold Hoops", nume_es: "Aros Gold Hoops", nume_it: "Cerchi Gold Hoops",
        pret: 280, pretVechi: null, categorie: "cercei", isSale: false,
        imagine: "produs13-1.png", imagini: ["produs13-1.png", "produs13-2.png", "produs13-3.png"],
        descriere: "Creole din aur masiv de 14K, cu o grosime medie, ideale pentru un look chic și modern.",
        descriere_en: "Solid 14K gold hoop earrings of medium thickness, ideal for a chic and modern look.",
        descriere_fr: "Créoles en or massif 14 carats, idéales pour un look chic et moderne.",
        descriere_de: "Creolen aus massivem 14K Gold, ideal für einen schicken und modernen Look.",
        descriere_es: "Aros de oro macizo de 14 quilates, ideales para un look elegante y moderno.",
        descriere_it: "Cerchi in oro massiccio 14K, ideali per un look chic e moderno."
    },
    { 
        id: 14, 
        nume: "Cercei Sapphire Tear", nume_en: "Sapphire Tear Earrings", nume_fr: "Boucles Sapphire Tear", nume_de: "Saphir Tear Ohrringe", nume_es: "Pendientes Sapphire Tear", nume_it: "Orecchini Sapphire Tear",
        pret: 650, pretVechi: 780, categorie: "cercei", isSale: true,
        imagine: "produs14-1.png", imagini: ["produs14-1.png", "produs14-2.png"],
        descriere: "Cercei sub formă de lacrimă cu safire albastre profunde, înconjurate de pavaj fin de diamante.",
        descriere_en: "Teardrop earrings with deep blue sapphires, surrounded by a fine diamond pave.",
        descriere_fr: "Boucles d'oreilles en forme de larme avec des saphirs bleus entourés de diamants.",
        descriere_de: "Tropfenförmige Ohrringe mit tiefblauen Saphiren, umgeben von einem Diamantpavé.",
        descriere_es: "Pendientes en forma de lágrima con zafiros azules rodeados de diamantes.",
        descriere_it: "Orecchini a goccia con zaffiri blu circondati da diamanti."
    },
    { 
        id: 15, 
        nume: "Cercei Ruby Cluster", nume_en: "Ruby Cluster Earrings", nume_fr: "Boucles Ruby Cluster", nume_de: "Rubin Cluster Ohrringe", nume_es: "Pendientes Ruby Cluster", nume_it: "Orecchini Ruby Cluster",
        pret: 550, pretVechi: null, categorie: "cercei", isSale: false,
        imagine: "produs15-1.png", imagini: ["produs15-1.png", "produs15-2.png"],
        descriere: "Ciorchine de rubine vibrante, setate elegant pentru un contrast vizual impresionant.",
        descriere_en: "Clusters of vibrant rubies, elegantly set for an impressive visual contrast.",
        descriere_fr: "Grappes de rubis vibrants, élégamment serties pour un contraste visuel impressionnant.",
        descriere_de: "Cluster von lebhaften Rubinen, elegant gefasst für einen visuellen Kontrast.",
        descriere_es: "Racimos de rubíes vibrantes, elegantemente engastados para un contraste visual.",
        descriere_it: "Grappoli di rubini vibranti, elegantemente incastonati per un contrasto visivo."
    },

    // ================= BRĂȚĂRI (5 produse) =================
    { 
        id: 16, 
        nume: "Brățară Cuff Gold", nume_en: "Gold Cuff Bracelet", nume_fr: "Bracelet Cuff Gold", nume_de: "Gold Cuff Armband", nume_es: "Pulsera Cuff Gold", nume_it: "Bracciale Cuff Gold",
        pret: 680, pretVechi: 750, categorie: "bratari", isSale: true,
        imagine: "produs16-1.png", imagini: ["produs16-1.png", "produs16-2.png"],
        descriere: "Brățară fixă din aur, cu un design minimalist care se potrivește la orice ținută.",
        descriere_en: "Solid gold cuff bracelet with a minimalist design that matches any outfit.",
        descriere_fr: "Bracelet en or avec un design minimaliste qui s'adapte à n'importe quelle tenue.",
        descriere_de: "Goldenes Armband mit minimalistischem Design, das zu jedem Outfit passt.",
        descriere_es: "Pulsera de oro con un diseño minimalista que combina con cualquier atuendo.",
        descriere_it: "Bracciale in oro con un design minimalista che si abbina a qualsiasi outfit."
    },
    { 
        id: 17, 
        nume: "Brățară Tennis Diamond", nume_en: "Tennis Diamond Bracelet", nume_fr: "Bracelet Tennis", nume_de: "Tennis Diamond Armband", nume_es: "Pulsera Tennis", nume_it: "Bracciale Tennis",
        pret: 1100, pretVechi: null, categorie: "bratari", isSale: false,
        imagine: "produs17-1.png", imagini: ["produs17-1.png", "produs17-2.png"],
        descriere: "Clasica brățară tennis, încrustată cu un șir continuu de diamante perfect asortate.",
        descriere_en: "The classic tennis bracelet, encrusted with a continuous row of perfectly matched diamonds.",
        descriere_fr: "Le bracelet tennis classique, incrusté d'une rangée continue de diamants.",
        descriere_de: "Das klassische Tennis-Armband, besetzt mit einer durchgehenden Reihe von Diamanten.",
        descriere_es: "La pulsera clásica de tenis, con incrustaciones de diamantes en fila continua.",
        descriere_it: "Il classico bracciale tennis, tempestato da una fila continua di diamanti."
    },
    { 
        id: 18, 
        nume: "Brățară Silver Chain", nume_en: "Silver Chain Bracelet", nume_fr: "Bracelet Silver Chain", nume_de: "Silberkette Armband", nume_es: "Pulsera Silver Chain", nume_it: "Bracciale Silver Chain",
        pret: 150, pretVechi: 190, categorie: "bratari", isSale: true,
        imagine: "produs18-1.png", imagini: ["produs18-1.png", "produs18-2.png"],
        descriere: "Brățară din argint masiv cu zale groase, un accesoriu statement perfect pentru un look curajos.",
        descriere_en: "Solid silver bracelet with thick links, a statement accessory perfect for a bold look.",
        descriere_fr: "Bracelet en argent massif à gros maillons, parfait pour un look audacieux.",
        descriere_de: "Massives Silberarmband mit dicken Gliedern, perfekt für einen mutigen Look.",
        descriere_es: "Pulsera de plata maciza con eslabones gruesos, perfecta para un look audaz.",
        descriere_it: "Bracciale in argento massiccio a maglie grosse, perfetto per un look audace."
    },
    { 
        id: 19, 
        nume: "Brățară Pearl Strand", nume_en: "Pearl Strand Bracelet", nume_fr: "Bracelet Pearl Strand", nume_de: "Perlen Armband", nume_es: "Pulsera Pearl Strand", nume_it: "Bracciale Pearl Strand",
        pret: 220, pretVechi: null, categorie: "bratari", isSale: false,
        imagine: "produs19-1.png", imagini: ["produs19-1.png", "produs19-2.png"],
        descriere: "Un șirag elegant de perle de apă dulce, finisat cu o închizătoare filigranată din aur alb.",
        descriere_en: "An elegant strand of freshwater pearls, finished with a white gold filigree clasp.",
        descriere_fr: "Un élégant rang de perles d'eau douce, terminé par un fermoir en or blanc.",
        descriere_de: "Eine elegante Süßwasserperlenkette, veredelt mit einem Weißgold-Verschluss.",
        descriere_es: "Una elegante pulsera de perlas de agua dulce, con cierre de oro blanco.",
        descriere_it: "Un elegante filo di perle d'acqua dolce, rifinito con chiusura in oro bianco."
    },
    { 
        id: 20, 
        nume: "Brățară Charm Harmony", nume_en: "Harmony Charm Bracelet", nume_fr: "Bracelet Charm Harmony", nume_de: "Charm Harmony Armband", nume_es: "Pulsera Charm Harmony", nume_it: "Bracciale Charm Harmony",
        pret: 320, pretVechi: 390, categorie: "bratari", isSale: true,
        imagine: "produs20-1.png", imagini: ["produs20-1.png", "produs20-2.png"],
        descriere: "Brățară flexibilă cu diverse pandantive talisman ce simbolizează norocul și dragostea.",
        descriere_en: "Flexible bracelet with various charm pendants symbolizing luck and love.",
        descriere_fr: "Bracelet flexible avec divers pendentifs symbolisant la chance et l'amour.",
        descriere_de: "Flexibles Armband mit verschiedenen Anhängern, die Glück und Liebe symbolisieren.",
        descriere_es: "Pulsera flexible con varios colgantes que simbolizan la suerte y el amor.",
        descriere_it: "Bracciale flessibile con vari ciondoli che simboleggiano fortuna e amore."
    }
];
