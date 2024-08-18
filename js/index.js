let userDom = document.querySelector('#user-info');
let user = document.querySelector('#user');
let links = document.querySelector('#links');
let logOutBtn =  document.querySelector('#logOut');
let footerDate = document.getElementById('footerDate');
let username = localStorage.getItem("username");
let confirmDig = document.getElementById('confirmDig');
let logOutConfirm = document.getElementById('logOutConfirm');
let logoutCancel = document.getElementById('logoutCancel');
let productsDom = document.getElementById('productsDom');
let cartCounter = document.getElementById('cartCounter');
let productAdded = document.getElementById('productAdded');
let productAddedName = document.getElementById('productAddedName');
let loggedIn = localStorage.getItem("loggedIn");



if(loggedIn == "true"){
    links.remove()
    user.textContent = `Welcome ${username}`;
    userDom.style.display = "flex";
}

logOutBtn.addEventListener('click', function(){
    confirmDig.classList.replace("hidden" ,"flex")
});

logoutCancel.addEventListener('click', function(event){
    event.stopPropagation();
    confirmDig.classList.replace("flex" ,"hidden");
});
logOutConfirm.addEventListener('click', function(){
    localStorage.clear()
    location.reload();
});

const date = new Date();
footerDate.textContent = ` ${date.getFullYear()} Rio Store. All rights reserved.`;


let products = 
  [  {
        id: 1,
        name: 'X Line X Dot T shirt',
        desc: "Boost your training with XDots T-shirt and go the extra mile in your workouts",
        price: 10.99,
        image: '/products images/[151112] X Line X Cross T shirt - Steel Blue (XL).jpg'
    },
    {
        id: 2,
        name: 'X Line X Cross T shirt',
        desc: "Boost your training with XDots T-shirt and go the extra mile in your workouts ",
        price: 10.99,
        image: '/products images/[151123] X Line X Dot T shirt - Neon Orange (XXL).jpg'
    },
    {
        id: 3,
        name: 'X Line Python X Hoodie',
        desc: "Python X Hoodie featuring mesh panels for breathability with its absolute sweat management ",
        price: 13.99,
        image: '/products images/[151134] X Line Python X Hoodie - Black (M).jpg'
    },
    {
        id: 4,
        name: 'X Line Critical Drop tank',
        desc: "BImprove your workouts with the Critical Drop Tank.that will enhance your physique",
        price: 14.99,
        image: '/products images/[151144] X Line Critical Drop tank - Midnight Blue (XL).jpg'
    },
    {
        id: 5,
        name: 'Max Muscle Lifting Straps',
        desc: "Lifting Straps are One of the most important gym accessories that allows extra support to your grip",
        price: 5.99,
        image: '/products images/[6222023700161] Max Muscle Lifting Straps With Hook.jpg'
    },
    {
        id: 6,
        name: 'Max Muscle Bag',
        desc: "Is here because your gym bag is essential thing you can’t just grab any bag and go",
        price: 8.99,
        image: '/products images/[6222023701199] Max Muscle Bag With Shoe Compartment-Red.jpg'
    },
    {
        id: 7,
        name: 'Max Muscle Bag',
        desc: "Is here because your gym bag is essential thing you can’t just grab any bag and go",
        price: 8.99,
        image: '/products images/[6222023702820] Max Muscle Bag With Shoe Compartment-Camouflage 4.jpg'
    },
    {
        id: 8,
        name: 'Max Muscle Lifting Straps',
        desc: "Lifting Straps are One of the most important gym accessories that allows extra support to your grip",
        price: 5.99,
        image: '/products images/[6224009096589] Max Muscle Lifting Straps.jpg'
    },
    {
        id: 9,
        name: 'Max Muscle Creatine',
        desc: "formed by combining creatine with hydrochloric acid, is an exceptionally pure form of creatine",
        price: 20.99,
        image: '/products images/image_512 (1).jpg'
    },
    {
        id: 10,
        name: 'Max Muscle Creatine',
        desc: "Creatine is one of the most researched supplements that’s proved its effectiveness",
        price: 23.99,
        image: '/products images/image_512 (2).jpg'
    },
    {
        id: 11,
        name: 'Max Muscle No Joke Pre-workout',
        desc: "No Joke is the ultimate hardcore pre-workout that each hardcore athlete been waiting for",
        price: 16.99,
        image: '/products images/image_512 (3).jpg'
    },
    {
        id: 12,
        name: 'Muscle Add Gain',
        desc: "BIs an advanced mass gainer formula contains all the nutrients you need and supported ",
        price: 25.99,
        image: '/products images/image_512 (4).jpg'
    },

];

productsDom.innerHTML = products.map(product => `
    <div id="product-item" class="shadow-md shadow-[#15151549] text-center justify-center flex flex-col p-4 border-gray-300 border-[1px] hover:-translate-y-3 hover:bg-[#2169ed] hover:text-white transition-all">
        <img class="w-28 self-center rounded-lg" src="${product.image}" alt="">
        <h3 class="font-semibold">${product.name}</h3>
        <p class="text-[12px]">${product.desc}</p>
        <span class="font-semibold">${product.price}$</span>
            <div class="flex justify-end gap-2 ">
                  <button data-id="${product.id}" class= "addToCart bg-[#2169ed] text-white rounded-3xl p-2 font-semibold w-[70%] self-center hover:bg-white hover:text-black transition-all outline-none">Add to Cart <i class="fa-solid fa-cart-arrow-down"></i></button>
                  <input type="number" class=" quantity w-[40px] text-black text-center border-2 rounded-md border-[#2169ed]" value="1" min="1"  >
            </div>
        </div>
`).join('');

let addToCartBtn = document.querySelectorAll('.addToCart');
let mustSingIn = document.getElementById('mustSingIn');

addToCartBtn.forEach(button => {
    button.addEventListener('click', function() {
        const productId = this.getAttribute('data-id');
        if (loggedIn) {
            addedToCart(productId)
        } else {
            mustSingIn.classList.replace('hidden', 'flex');
            setTimeout(() => {
                window.location = "register.html";
            }, 1500);
        }
    });
});

function addedToCart(id){
    let choosenItem = products.find((item) => item.id === parseInt(id));
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

       let quantityInput = document.querySelector(`button[data-id="${id}"]`).nextElementSibling;
       let quantityValue = parseInt(quantityInput.value);
   
     
       let existingItemIndex = cart.findIndex(item => item.id === choosenItem.id);
   
       if (existingItemIndex !== -1) {
        
           cart[existingItemIndex].quantity += quantityValue;
       } else {
          
           choosenItem.quantity = quantityValue;
           cart.push(choosenItem);
           productAdded.classList.replace('hidden' , 'flex')
           productAddedName.textContent = `  ${choosenItem.name} sucssfully added to the cart`
           setTimeout(() => {
            productAdded.classList.replace('flex' , 'hidden');
        }, 1500);
       }
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(choosenItem);

    updateCartCounter();
}
function updateCartCounter() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartCounter.textContent = cart.length;
}



let cartIcon = document.getElementById('cartIcon');

cartIcon.addEventListener('click', function() {
        window.location = "cart.html";
});

document.addEventListener('DOMContentLoaded', updateCartCounter);