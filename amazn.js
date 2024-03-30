// script.js
// Sample code for filtering products based on category

const filterForm = document.querySelector('#filter-form');
const productCards = document.querySelectorAll('.product-card');

filterForm.addEventListener('change', () => {
    const selectedCategory = filterForm.querySelector('select').value;

    productCards.forEach(card => {
        const category = card.dataset.category;

        if (selectedCategory === 'all' || category === selectedCategory) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
