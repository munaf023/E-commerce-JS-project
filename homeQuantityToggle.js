export const homeQuantityToggle = (event,id,stock)=>{
    // here we will get which card user has clicked on 
    const currentCard = document.querySelector(`#card${id}`)
    // console.log(currentCard);

    // productQuantity div we can access from here 
    const productQuantity = currentCard.querySelector('.productQuantity');
    // console.log(productQuantity);
      
    // we will get quantity from here 
    let quantity = parseInt(productQuantity.getAttribute('data-quantity')) || 1;

    if(event.target.className === 'cartIncrement'){
        if(quantity < stock){
            quantity += 1;
        }else if(quantity === stock){
            quantity = stock;
        }
    }

    if(event.target.className === 'cartDecrement'){
        if(quantity > 1){
            quantity -= 1;
        }
    }

    productQuantity.innerText = quantity;
    console.log(quantity);

    productQuantity.setAttribute('data-quantity', quantity.toString())
    return quantity;

}