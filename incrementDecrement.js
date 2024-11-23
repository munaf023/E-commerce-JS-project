import { getCartProductFromLS } from "./getCartProductFromLS";
import { updateCardProductTotal } from "./updateCardProductTotal";

export const incrementDecrement = (event,id,stock,price) => {
    const currentCard = document.querySelector(`#card${id}`)
    const productQuantity = currentCard.querySelector('.productQuantity');
    const productPrice = currentCard.querySelector('.productPrice');

    let quantity = 1;
    let localStoragePrice = 0;

    let localCartProducts = getCartProductFromLS();
    let existingProd = localCartProducts.find((curProd)=>curProd.id === id);

    if(existingProd){
        quantity = existingProd.quantity;
        localStoragePrice =existingProd.price
    }else{
        localStoragePrice = price;
        price = price;
    }

    if(event.target.className === 'cartIncrement'){
        if(quantity < stock){
            quantity += 1;
        }else if(quantity === stock){
            quantity = stock;
            localStoragePrice = price * stock
        }
    }

    if(event.target.className === 'cartDecrement'){
        if(quantity > 1){
            quantity -= 1;
        }
    }

    // update price in local storage
    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2))

    let updateCart = {id,quantity,price:localStoragePrice};

    updateCart = localCartProducts.map((currentProduct)=>{
       return currentProduct.id === id ? updateCart : currentProduct;
    });
    // console.log(updateCart);
    localStorage.setItem('cardProductLS',JSON.stringify(updateCart));

    productQuantity.innerText = quantity;
    productPrice.innerText = localStoragePrice;


    // update price in that main price bar

    updateCardProductTotal();
};