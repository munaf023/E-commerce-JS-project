import { getCartProductFromLS } from "./getCartProductFromLS";

export const updateCardProductTotal = () =>{

    let productSubTotal = document.querySelector('.productSubTotal');
    let productFinalTotal = document.querySelector('.productFinalTotal');

    let localCartProducts = getCartProductFromLS();

    let initialVal = 0;

    let totalProd = localCartProducts.reduce((accum, curElem)=>
    {
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;
    },initialVal);
    // console.log(totalProd);

    productSubTotal.innerText = `₹${totalProd}`;
    productFinalTotal.innerText = `₹${totalProd + 50}`
}