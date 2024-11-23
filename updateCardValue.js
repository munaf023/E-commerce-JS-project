const cartValue = document.querySelector('#cartValue');

export const updateCardValue = (cardProduct) =>{
    // console.log(updateCardValue);
    
    return (cartValue.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${cardProduct.length}</i>`);
    
}