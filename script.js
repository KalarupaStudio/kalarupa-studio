let cart = [];
let totalPrice = 0;

function addToCart(item, price) {
    cart.push(item);
    totalPrice += price;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-list");
    let totalElement = document.getElementById("total-price");
    
    cartList.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        cartList.appendChild(li);
    });

    totalElement.textContent = totalPrice;
}
