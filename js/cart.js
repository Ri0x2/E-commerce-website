let cart = JSON.parse(localStorage.getItem('cart')) || [];
let cartDom = document.getElementById('cartDom');
let totalPriceElement = document.getElementById('totalPrice');
let user = document.querySelector('#user');
let emptyCard = document.getElementById('emptyCard');
let emptyCardOk = document.getElementById('emptyCardOk');
let quantityInput = document.getElementById('quantityInput');

console.log('Cart:', cart); 
let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
function calculateTotal() {
    totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
}

cartDom.innerHTML = cart.map((item, index) => `
    <div class="cart-item flex justify-between border-[1px] items-center border-[#2169ed] rounded-lg p-1 hover:bg-[#2169ed] hover:text-white transition-all" data-index="${index}">
        <div class="flex gap-3 items-center">
            <img class="w-[60px]" src="${item.image}" alt="${item.name}" class="cart-item-image">
            <h3 class="md:text-[20px] text-[10px] font-semibold">${item.name}</h3>
        </div> 
        <div class="flex md:gap-14 gap-4 mr-2 items-center">
            <span class="md:text-[20px] text-[10px] font-semibold">$${item.price}</span>
            <input type="number" class="quantity md:w-[60px] w-[30px] text-center md:text-[20px] text-[10px] rounded-md font-semibold text-black" value="${item.quantity}" min="1">
            <button class="removeBtns outline-none bg-[#ed2121] rounded-3xl text-white md:text-[20px] text-[8px] py-2 px-4 mx-2 font-semibold hover:bg-[#ed2121ce] transition-all">Delete <i class="fa-regular fa-trash-can"></i></button>
        </div>
    </div>
`).join('');

calculateTotal(); 

let removeBtns = document.querySelectorAll('.removeBtns');
let quantityInputs = document.querySelectorAll('.quantity');

// Handle remove button clicks
removeBtns.forEach(function(button) {
    button.addEventListener("click", function(e) {
        let buttonClicked = e.target;
        
        let cartItemElement = buttonClicked.closest('.cart-item');
        let itemIndex = cartItemElement.getAttribute('data-index');
        
        cart.splice(itemIndex, 1);

        localStorage.setItem('cart', JSON.stringify(cart));

        cartItemElement.remove();
        calculateTotal(); 
    });
});

// Handle quantity input changes
quantityInputs.forEach(function(input) {
    input.addEventListener("change", function(e) {
        let inputChanged = e.target;
        
        let cartItemElement = inputChanged.closest('.cart-item');
        let itemIndex = cartItemElement.getAttribute('data-index');
        
        cart[itemIndex].quantity = parseInt(inputChanged.value);
        
        total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        
        localStorage.setItem('cart', JSON.stringify(cart));
        
        calculateTotal(); 
    });
});


let removeAllBtn = document.getElementById('removeAllBtn');

// Handle remove all button clicks
function removeAll() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    cartDom.innerHTML = '';
    calculateTotal();
    window.location.reload();
}

let checkOutBtn = document.getElementById('checkOutBtn');
let checkOutMessage = document.getElementById('checkOutMessage');
// Handle checkout button clicks
checkOutBtn.addEventListener("click", function() {
    let checkOutDig = document.getElementById('checkOutDig');
    let checkoutItemsNum = document.getElementById('checkoutItemsNum')
    let checkoutItemsTotal = document.getElementById('checkoutItemsTotal')
    if(cart.length > 0 ){
        setTimeout(()=> {
            removeAll()     
        } , 3500)
        checkOutDig.classList.replace('hidden','flex')
        checkoutItemsNum.innerText = cart.length
        checkoutItemsTotal.innerText = `$${total.toFixed(2)}`
    }else{
        emptyCard.classList.replace('hidden','flex')
    }
})



emptyCardOk.addEventListener('click', () => {
    emptyCard.classList.replace('flex','hidden')
 });

let checkOutOk = document.getElementById('checkOutOk');

checkOutOk.addEventListener("click", function() {
    checkOutDig.classList.replace('flex','hidden')
})

let username = localStorage.getItem('username');
user.textContent = `Welcome ${username}`;

