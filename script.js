/**
 * Functia principala pentru adaugarea unui produs in cos.
 * @param {number|string} id - ID-ul produsului din fisierul produse.js
 */
function adaugaInCos(id) {
    // Convertim ID-ul la numar pentru a fi siguri de comparatie
    const produsId = parseInt(id);
    
    // Verificam daca lista "produse" este disponibila (vine din produse.js)
    if (typeof produse === 'undefined') {
        console.error("Eroare: Lista de produse nu a fost gasita. Asigura-te ca produse.js este incarcat inainte de script.js.");
        return;
    }

    // Cautam produsul in baza de date locala (produse.js)
    const produsGasit = produse.find(p => p.id === produsId);
    
    if (!produsGasit) {
        console.error("Produsul cu ID-ul " + produsId + " nu exista in baza de date.");
        return;
    }

    // Preluam cosul actual din localStorage sau cream unul gol daca nu exista
    let cos = JSON.parse(localStorage.getItem('cos')) || [];
    
    // Verificam daca produsul este deja in cos
    const indexProdusExistent = cos.findIndex(p => p.id === produsId);
    
    if (indexProdusExistent !== -1) {
        // Daca exista, crestem doar cantitatea
        cos[indexProdusExistent].cantitate = (cos[indexProdusExistent].cantitate || 1) + 1;
    } else {
        // Daca nu exista, il adaugam in lista cu o cantitate initiala de 1
        // Salvam o copie a obiectului pentru a nu modifica datele originale
        cos.push({
            id: produsGasit.id,
            nume: produsGasit.nume,
            pret: produsGasit.pret,
            imagine: produsGasit.imagine,
            cantitate: 1
        });
    }

    // Salvam cosul actualizat inapoi in localStorage
    localStorage.setItem('cos', JSON.stringify(cos));
    
    // Actualizam numarul de produse afisat in header
    actualizeazaNumarCos();
    
    // Feedback vizual pentru utilizator
    afiseazaNotificare("Produsul a fost adaugat in cos!");
}

/**
 * Actualizeaza elementul HTML care arata numarul total de produse din cos.
 */
function actualizeazaNumarCos() {
    const cos = JSON.parse(localStorage.getItem('cos')) || [];
    const cartCountElement = document.getElementById('cart-count');
    
    if (cartCountElement) {
        // Calculam suma cantitatilor tuturor produselor
        const totalProduse = cos.reduce((suma, produs) => suma + (produs.cantitate || 1), 0);
        cartCountElement.textContent = totalProduse;
    }
}

/**
 * Afiseaza o notificare temporara in pagina.
 */
function afiseazaNotificare(mesaj) {
    const box = document.createElement('div');
    box.textContent = mesaj;
    box.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #333;
        color: #fff;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 9999;
        font-family: sans-serif;
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(box);
    
    setTimeout(() => {
        box.style.opacity = '0';
        box.style.transition = 'opacity 0.5s ease';
        setTimeout(() => box.remove(), 500);
    }, 2500);
}

// Rulam actualizarea numarului de produse imediat ce se incarca orice pagina care are script.js
document.addEventListener('DOMContentLoaded', actualizeazaNumarCos);

// Adaugam animatia pentru notificare in document
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
`;
document.head.appendChild(style);
