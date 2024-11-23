import { getCartProductFromLS } from "./getCartProductFromLS";

export const fetchQuantityFromCardsLS = (id,price) =>{
    let cardProduct = getCartProductFromLS();

    let exitProduct = cardProduct.find((curProd)=> curProd.id === id);
    let quantity = 1;

    if(exitProduct){
        quantity = exitProduct.quantity;
        price = exitProduct.price;
    }

    return {quantity,price};
};