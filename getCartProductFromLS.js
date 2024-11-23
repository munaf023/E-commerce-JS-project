import { updateCardValue } from "./updateCardValue";

export const getCartProductFromLS = () =>{
    let cardProduct = localStorage.getItem('cardProductLS');

    if(!cardProduct){
        return [];
    }
    cardProduct = JSON.parse(cardProduct);

    updateCardValue(cardProduct);
    return cardProduct;
}