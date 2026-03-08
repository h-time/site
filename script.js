// Cheia unica pentru localStorage
const COS_KEY = 'htime_cos';

/**
 * Adauga un produs in cos pe baza ID-ului din produse.js
 */
function adaugaInCos(id) {
    const produsId = parseInt(id);
    
    // Verificam daca baza de date de produse este incarcata
    if (typeof produse === 'undefined') {
        console.error("Eroare: produse.js nu este incarcat.");
        return;
    }

    const produsGasit = produse.find(p => p.id === produsId);
    
    if (!produsGasit) {
        console.error("Produsul cu ID-ul " + produsId + " nu a fost gasit.");
        return;
    }

    // Preluam cosul actual
    let cos = JSON.parse(localStorage.getItem(COS_KEY)) || [];
    
    // Verificam daca produsul exista deja pentru a creste cantitatea
    const indexExistent = cos.findIndex(p => p.id === produsId);
    
    if (indexExistent !== -1) {
        cos[indexExistent].cantitate = (cos[indexExistent].cantitate || 1) + 1;
    } else {
        // Salvam produsul cu numele de campuri folosite in checkout.html
        cos.push({
            id: produsGasit.id,
            nume: produsGasit.nume,
            pret: produsGasit.pret,
            imagine: produsGasit.imagine,
            cantitate: 1
        });
    }

    // Salvam inapoi in memorie
    localStorage.setItem(COS_KEY, JSON.stringify(cos));
    
    // Actualizam numarul de la iconita de cos
    actualizeazaNumarCos();
    
    // Notificare vizuala
    alert("Produsul '" + produsGasit.nume + "' a fost adaugat in cos!");
}

/**
 * Actualizeaza numarul de produse afisat in antet (header)
 */
function actualizeazaNumarCos() {
    const cos = JSON.parse(localStorage.getItem(COS_KEY)) || [];
    const total = cos.reduce((acc, item) => acc + (item.cantitate || 1), 0);
    
    // Cautam ambele variante de ID-uri pe care s-ar putea sa le ai in HTML
    const elementeNumar = ['cart-count', 'cart-nav-btn'];
    elementeNumar.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            if (id === 'cart-nav-btn') {
                el.innerText = `Cart (${total})`;
            } else {
                el.innerText = total;
            }
        }
    });
}

// Initializam numarul la incarcarea oricarei pagini
document.addEventListener('DOMContentLoaded', actualizeazaNumarCos);
