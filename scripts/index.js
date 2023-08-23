// Elements for Image changing logic
const thumbnail_images = document.querySelectorAll('.tb-img');
const active_image = document.querySelector('#active-img');

const prevImgBtn = document.querySelector('#prev-img');
const nextImgBtn = document.querySelector('#next-img');

// elements for Hambuger menu and navbar navigation
const hamIcon = document.querySelector("#ham-icon");
const closeIcon = document.querySelector("#close-icon");
const navbar = document.querySelector(".nav-items");

// elements for changing product quantity and add to cart icon 
const decQtyBtn = document.querySelector('#decrease'); 
const incQtyBtn = document.querySelector('#increase');
const qty = document.querySelector('#quantity');
const cartBadge = document.querySelector('.cart-badge');

const cartQty = document.querySelector('#prdt-qty');
const cartTotal = document.querySelector('#cart-total');

const addToCartBtn = document.querySelector('.add-to-cart-btn');

// add to cart container 
const checkoutContainer = document.querySelector('.checkout-container ');
const cartIcon = document.querySelector('.cart-icon');

const cartEmpty = document.querySelector('.cart-empty-msg');
const cartFull = document.querySelector('.cart-full');

const cartEmptyIcon = document.querySelector('#cart-remove');


// **************** Function
function showQuantity(quantity){
    cartBadge.textContent = quantity;
    qty.textContent = quantity;

    const totalPrice = 10000 * quantity;
    cartQty.textContent = quantity;
    cartTotal.textContent ="₹"+totalPrice;

}

function updateQuatity(quantity){
    cartBadge.style.display = 'block';

    // cartBadge.textContent = quantity;
    // qty.textContent = quantity;

    // const totalPrice = 10000 * quantity;
    // cartQty.textContent = quantity;
    // cartTotal.textContent ="₹"+totalPrice;

    if(currentQty == 0) {
        cartBadge.style.display = 'none';
        cartEmpty.style.display = "flex";
        cartFull.style.display = 'none';
    } else{
        cartEmpty.style.display = "none";
        cartFull.style.display = 'grid';

    }
}




// **************** logic
// changing active image

// On Desktop
thumbnail_images.forEach(img =>{ // adding event listener to all thumbnail images
    img.addEventListener('click',()=>{
        thumbnail_images.forEach(img =>{ // removing active class from all images
            img.classList.remove('tb-active');
        })

        img.classList.add('tb-active'); // adding active class to clicked image
        active_image.src = `images/image-product-${img.dataset.src}.jpg` // changing active image to current clicked thumbnail image.
    })
})


// On Mobile/Tablets
let counter = 2 ;
prevImgBtn.addEventListener('click', ()=>{
    active_image.src = `images/image-product-${counter}.jpg`
    if(counter === 1){
        counter = thumbnail_images.length;
    } else counter--
})

nextImgBtn.addEventListener('click', ()=>{
    active_image.src = `images/image-product-${counter}.jpg`
    if(counter === thumbnail_images.length){
        counter = 1;
    } else counter++
})


// Hamburger menu
hamIcon.addEventListener("click", ()=>{
    navbar.style.transform = 'translateX(0)'
})

closeIcon.addEventListener("click", ()=>{
    navbar.style.transform = 'translateX(-110vw)'
})

// quantity counter
let currentQty = 0;

cartBadge.style.display = 'none';

decQtyBtn.addEventListener('click', ()=>{
    if(currentQty < 0){
        decQtyBtn.disable = true
    }else {
        showQuantity(currentQty)
        currentQty --
    }

    console.log(currentQty);
});

incQtyBtn.addEventListener('click', ()=>{
    if(currentQty == 0){
        currentQty = 1;
        showQuantity(currentQty);
    } else{
        currentQty++
        showQuantity(currentQty)
    }
    console.log(currentQty);
});

addToCartBtn.addEventListener('click',()=>{
    updateQuatity(currentQty)
})

// Cart icon listening
checkoutContainer.style.display = 'none';

cartIcon.addEventListener('click', ()=>{

    if(!currentQty > 0){
        cartFull.style.display = 'none';
    } else{
        cartEmpty.style.display = "none";
        cartFull.style.display = 'grid';
    }

    if(checkoutContainer.style.display == 'none') checkoutContainer.style.display = 'grid' 
    else checkoutContainer.style.display = 'none';
})

cartEmptyIcon.addEventListener('click',()=>{
    currentQty = 0;
    updateQuatity(currentQty)
    showQuantity(currentQty);
})