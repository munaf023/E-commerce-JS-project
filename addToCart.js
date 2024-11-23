import { getCartProductFromLS } from "./getCartProductFromLS";
import { showToast } from "./showtoast";
import { updateCardValue } from "./updateCardValue";

getCartProductFromLS();

export const addToCart = (event,id,stock) =>{

    let arrLocalStorageProduct = getCartProductFromLS(); 

    const currentProduct = document.querySelector(`#card${id}`);
    // console.log(currentProduct);

    let quantity = currentProduct.querySelector('.productQuantity').innerHTML;
    let price = currentProduct.querySelector('.productPrice').innerHTML;
    // console.log(quantity,price);

    price = price.replace("₹","");

    let exisitingPro = arrLocalStorageProduct.find((currentProduct) => 
        currentProduct.id === id
    );
 
    if(exisitingPro && quantity > 1){
        quantity = Number(exisitingPro.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updateCart = {id,quantity,price};

        updateCart = arrLocalStorageProduct.map((currentProduct)=>{
           return currentProduct.id === id ? updateCart : currentProduct;
        });
        console.log(updateCart);
        localStorage.setItem('cardProductLS',JSON.stringify(updateCart));

        // Toast has been added here 
        showToast("add" ,id)
    }
     if(exisitingPro)    
    {
        // alert('Already exisiting in Cart')
        return false;
    }
    price = Number(price * quantity);
    quantity = Number(quantity);

    // console.log(quantity,price);
    arrLocalStorageProduct.push( {id,quantity,price});

    localStorage.setItem('cardProductLS',JSON.stringify(arrLocalStorageProduct));
 
    // card value update 
    updateCardValue(arrLocalStorageProduct);

        // Toast has been added here 
        showToast("add" ,id)
    
} 