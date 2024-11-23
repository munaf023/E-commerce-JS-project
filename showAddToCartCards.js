import product from "./api/product.json";
import { fetchQuantityFromCardsLS } from "./fetchQuantityFromCardsLS";
import { getCartProductFromLS } from "./getCartProductFromLS";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeprodCart";
import { updateCardProductTotal } from "./updateCardProductTotal";
import { updateCardValue } from "./updateCardValue";

let cardProduct = getCartProductFromLS();

let filterProduct = product.filter((curProd) =>{
    // console.log(curProd.id);
    // console.log(curProd.name);
    // Here i try map as well but it did return all data while some only return data that are avaliable in database
    return cardProduct.some((curElem)=>curElem.id === curProd.id);
});

console.log(filterProduct);


// Now lets update product card.

const cardElement = document.querySelector('#productCartContainer')
const templateContainer = document.querySelector('#productCartTemplate')


const showCartProduct = () =>{
    filterProduct.forEach((curProd)=>{
        const {category, id, image, name,stock, price} = curProd;
        
        let productClone = document.importNode(templateContainer.content,true);

        const lsActualdata = fetchQuantityFromCardsLS(id,price);

        productClone.querySelector('#cardValue').setAttribute('id',`card${id}`);
        productClone.querySelector('.category').textContent  = category;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productQuantity').textContent = lsActualdata.quantity;
        productClone.querySelector('.productPrice').textContent = lsActualdata.price;

        productClone.querySelector('.stockElement').addEventListener("click",
            (event) => {incrementDecrement(event,id,stock,price)}
        )


        productClone.querySelector('.remove-to-cart-button').addEventListener("click",() => removeProdFromCart(id))

        cardElement.appendChild(productClone);
    });
}

showCartProduct();


// update price in that main price bar

updateCardProductTotal();