/**
 * Cheia sub care salvăm datele în memoria browserului (localStorage).
 * Trebuie să fie aceeași și în checkout.html pentru ca paginile să comunice între ele.
 */
const COS_KEY = 'htime_cos';

/**
 * Adaugă un produs în coș pe baza ID-ului primit din magazin.html
 * @param {number|string} id - ID-ul unic al produsului
 */
function adaugaInCos(id) {
    const produsId = parseInt(id);
    
    // Verificăm dacă baza de date de produse este încărcată (din produse.js)
    if (typeof produse === 'undefined') {
        console.error("Fișierul produse.js nu a fost găsit sau încărcat.");
        return;
    }

    // Căutăm produsul în lista globală
    const produsGasit = produse.find(p => p.id === produsId);
    
    if (!produsGasit) {
        console.error("Produsul cu ID-ul " + produsId + " nu există în baza de date.");
        return;
    }

    // Preluăm coșul actual din memoria browserului
    let cos = JSON.parse(localStorage.getItem(COS_KEY)) || [];
    
    // Verificăm dacă produsul este deja în coș
    const indexExistent = cos.findIndex(p => p.id === produsId);
    
    if (indexExistent !== -1) {
        // Dacă există deja, îi creștem doar cantitatea
        cos[indexExistent].cantitate = (cos[indexExistent].cantitate || 1) + 1;
    } else {
        // Dacă este nou, îl adăugăm cu toate detaliile necesare (nume, preț, imagine)
        // pentru ca checkout.html să le poată afișa direct.
        cos.push({
            id: produsGasit.id,
            nume: produsGasit.nume,
            pret: produsGasit.pret,
            imagine: produsGasit.imagine,
            cantitate: 1
        });
    }

    // Salvăm lista actualizată în localStorage
    localStorage.setItem(COS_KEY, JSON.stringify(cos));
    
    // Actualizăm numărul afișat în meniu (ex: Cart (3))
    actualizeazaNumarCos();
    
    // Afișăm o notificare vizuală rapidă
    afiseazaNotificare(`"${produsGasit.nume}" a fost adăugat în coș!`);
}

/**
 * Găsește elementul de cart din navigare și îi actualizează textul.
 * Folosește id-ul "cart-nav-btn" specificat în magazin.html.
 */
function actualizeazaNumarCos() {
    const cos = JSON.parse(localStorage.getItem(COS_KEY)) || [];
    const totalProduse = cos.reduce((suma, item) => suma + (item.cantitate || 1), 0);
    
    const navCartBtn = document.getElementById('cart-nav-btn');
    if (navCartBtn) {
        navCartBtn.innerText = `Cart (${totalProduse})`;
    }
}

/**
 * Creează o notificare stilizată care dispare automat.
 * @param {string} mesaj - Textul de afișat
 */
function afiseazaNotificare(mesaj) {
    const notif = document.createElement('div');
    notif.textContent = mesaj;
    notif.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: #111;
        color: #fcbf88;
        padding: 15px 25px;
        border-radius: 30px;
        font-family: 'Montserrat', sans-serif;
        font-size: 0.9rem;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 2000;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.opacity = '0';
        notif.style.transition = 'opacity 0.5s ease';
        setTimeout(() => notif.remove(), 500);
    }, 2000);
}

// La încărcarea oricărei pagini, verificăm numărul curent de produse din coș
document.addEventListener('DOMContentLoaded', actualizeazaNumarCos);

// Adăugăm animația CSS pentru notificare direct în document
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideIn {
        from { transform: translateY(20px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
    }
`;
document.head.appendChild(styleSheet);
