import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showtoast";
import { updateCardValue } from "./updateCardValue";

export const removeProdFromCart = (id) => {
  let cartProducts = getCartProductFromLS();
    
  cartProducts = cartProducts.filter((curProd) => curProd.id !== id);
  // console.log(cartProducts);

  // Updating data from cart products 
  localStorage.setItem('cardProductLS',JSON.stringify(cartProducts));
    
  let removediv = document.getElementById(`card${id}`);
  if(removediv){
    removediv.remove();
    showToast("delete" ,id)
  }

  updateCardValue(cartProducts);
};