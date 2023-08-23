// Elements for Image changing logic
const thumbnail_images = document.querySelectorAll('.tb-img');
const active_image = document.querySelector('#active-img');

const prevImgBtn = document.querySelector('#prev-img');
const nextImgBtn = document.querySelector('#next-img');

// elements for Hambuger menu and navbar navigation
const hamIcon = document.querySelector("#ham-icon");
const closeIcon = document.querySelector("#close-icon");
const navbar = document.querySelector(".nav-items");

// elements for changing product quantity
const decQtyBtn = document.querySelector('#decrease'); 
const incQtyBtn = document.querySelector('#increase');
const qty = document.querySelector('#quantity');
const cartBadge = document.querySelector('.cart-badge');

const cartQty = document.querySelector('#prdt-qty');
const cartTotal = document.querySelector('#cart-total');


// **************** Function
function updateQuatity(quantity){
    cartBadge.style.display = 'block';

    cartBadge.textContent = quantity;
    qty.textContent = quantity;

    const totalPrice = 10000 * quantity;
    cartQty.textContent = quantity;
    cartTotal.textContent ="₹"+totalPrice;

    if(currentQty == 0) cartBadge.style.display = 'none';


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
let counter = 1;
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
        updateQuatity(currentQty)
        currentQty --
    }
});

incQtyBtn.addEventListener('click', ()=>{
    if(currentQty == 0){
        currentQty = 1;
        updateQuatity(currentQty);
    } else{
        currentQty++
        updateQuatity(currentQty)
    }
});