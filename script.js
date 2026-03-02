document.addEventListener('DOMContentLoaded', () => {
    // Selectăm butonul de coș
    const cartBtn = document.querySelector('.cart-btn');
    
    // Dacă butonul există pe pagină, îi adăugăm o acțiune la click
    if(cartBtn) {
        cartBtn.addEventListener('click', (eveniment) => {
            eveniment.preventDefault(); // Oprește reîncărcarea paginii
            alert('Coșul tău este momentan gol. Adaugă câteva bijuterii sau ceasuri minunate!');
        });
    }
});
