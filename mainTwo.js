
let menuEmail= document.querySelector(".navbar-email");
let desktopMenu=document.querySelector(".desktop-menu")
let btnMenuMovil=document.querySelector(".menu")
let MenuMovil=document.querySelector(".mobile-menu")
let shoppingCar=document.querySelector(".navbar-shopping-cart")
let product=document.querySelector('.product-detail')
let cardsContainer=document.querySelector('.cards-container')



btnMenuMovil.addEventListener('click',toggleMenuMovil )
menuEmail.addEventListener('click', toggleDesktopMenu)
shoppingCar.addEventListener('click', shopping )

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMenuMovil(){
    const isshoppingCar =product.classList.contains('inactive')
    if(!isshoppingCar){
        product.classList.add('inactive') 
    }   
    MenuMovil.classList.toggle('inactive');
} 

function shopping(){
    const isMobilMenuClosed=MenuMovil.classList.contains('inactive')

    if(!isMobilMenuClosed){
        MenuMovil.classList.add('inactive')
    }
    product.classList.toggle('inactive');

}


const productList=[]

productList.push({
    name:'Bike',
    precio: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name:'Pantalla',
    precio: 200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


productList.push({
    name:'Computador',
    precio: 500,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});


function renderProductd(arr){
    for(product of arr){

        const  productCard = document.createElement("div")
        productCard.classList.add('product-card')
    
    
    
        const imagen=document.createElement('img')
        imagen.setAttribute('src', product.image);
    
        const  productInfo = document.createElement("div")
        productInfo.classList.add('product-info')
    
        
    
        const productInfoDiv  = document.createElement("div")
        
    
        const  productPrice=document.createElement('p')
        productPrice.innerText = '$' + product.precio;
    
        const productName=document.createElement('p')
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productName)
        productInfoDiv.appendChild(productPrice)
    
        const productInfoFigure  = document.createElement("figure");
        const productImgCart=document.createElement('img')
        productImgCart.setAttribute('src', "./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart)
        productInfo.appendChild(productInfoDiv)
        productInfo.appendChild(productInfoFigure)
    
        productCard.appendChild(imagen)
        productCard.appendChild(productInfo)
    
        cardsContainer.appendChild(productCard)
    
    
    }
    
}


renderProductd(productList)