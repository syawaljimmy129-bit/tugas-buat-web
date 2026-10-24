let cart = [];

const cartCountElement = document.getElementById('cart-count');
const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); 

        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));

        const existingProduct = cart.find(item => item.name === name);

        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({
                name: name,
                price: price,
                quantity: 1
            });
        }

        updateCartCount();
        alert(`${name} berhasil ditambahkan ke keranjang!`);
    });
});

function updateCartCount() {
    let totalItems = 0;
    cart.forEach(item => {
        totalItems += item.quantity;
    });
    cartCountElement.innerText = totalItems;
}