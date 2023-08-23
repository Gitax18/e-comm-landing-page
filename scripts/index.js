const thumbnail_images = document.querySelectorAll('.tb-img');
const active_image = document.querySelector('#active-img');

const prevImgBtn = document.querySelector('#prev-img');
const nextImgBtn = document.querySelector('#next-img');




// logic

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

