/**
 * Cheia de memorie folosita de magazin.html si restul paginilor
 */
const STORAGE_KEY = 'htimeCart';

/**
 * Adauga un produs in cos
 */
function adaugaInCos(id) {
    const produsId = parseInt(id);
    if (typeof produse === 'undefined') return;

    const p = produse.find(item => item.id === produsId);
    if (!p) return;

    let cart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const index = cart.findIndex(item => item.id === produsId);

    if (index !== -1) {
        cart[index].qty = (cart[index].qty || 1) + 1;
    } else {
        cart.push({
            id: p.id,
            nume: p.nume,
            pret: p.pret,
            imagine: p.imagine,
            qty: 1
        });
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    actualizeazaNumarCos();
    
    // Notificare vizuala
    afiseazaNotificare(`"${p.nume}" a fost adăugat.`);
}

/**
 * Schimba cantitatea unui produs (+1 sau -1)
 */
function schimbaCantitate(index, delta) {
    let cart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    if (!cart[index]) return;

    cart[index].qty = (cart[index].qty || 1) + delta;

    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    
    // Fortam actualizarea interfetei
    actualizeazaNumarCos();
    if (typeof updateCartUI === 'function') updateCartUI();
}

/**
 * Sterge complet un produs din cos
 */
function eliminaDinCos(index) {
    let cart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    cart.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    
    actualizeazaNumarCos();
    if (typeof updateCartUI === 'function') updateCartUI();
}

/**
 * Updateaza butonul "Cart (X)"
 */
function actualizeazaNumarCos() {
    const cart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const total = cart.reduce((acc, item) => acc + (item.qty || 1), 0);
    const navBtn = document.getElementById('cart-nav-btn');
    if (navBtn) navBtn.innerText = `Cart (${total})`;
}

/**
 * Notificare
 */
function afiseazaNotificare(mesaj) {
    const notif = document.createElement('div');
    notif.textContent = mesaj;
    notif.style.cssText = `
        position: fixed; bottom: 30px; right: 30px;
        background: #111; color: #fcbf88; padding: 15px 25px;
        border-radius: 30px; z-index: 10000; font-family: 'Montserrat', sans-serif;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3); font-weight: 600;
        animation: slideInNotif 0.3s ease-out;
    `;
    document.body.appendChild(notif);
    setTimeout(() => {
        notif.style.opacity = '0';
        notif.style.transition = 'opacity 0.5s ease';
        setTimeout(() => notif.remove(), 500);
    }, 2500);
}

// Actualizare automata daca se schimba cosul in alt tab
window.addEventListener('storage', (e) => {
    if (e.key === STORAGE_KEY) {
        actualizeazaNumarCos();
        if (typeof updateCartUI === 'function') updateCartUI();
    }
});

document.addEventListener('DOMContentLoaded', actualizeazaNumarCos);
