import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homeQuantityToggle";

const productContainer = document.querySelector('#productContainer');
const productTemplate = document.querySelector('#productTemplate');

export const showProductContainer = (product)=>{
    if (!product) {
        return false;
    }

    // Iterate over each product in the `products` array using `forEach()`.
    product.forEach((curProd)=>{
        // Destructuring Product Properties
        const {brand,category,description,id,image,name,price,stock} = curProd;
        
        // Cloning the Template
        const productClone = document.importNode(productTemplate.content, true);

        productClone.querySelector('#cardValue').setAttribute("id",`card${id}`);

        productClone.querySelector('.category').textContent = category;
        productClone.querySelector('.productName').textContent = name;
        productClone.querySelector('.productImage').src = image;
        productClone.querySelector('.productImage').alt = name;
        productClone.querySelector('.productDescription').textContent = description;
        productClone.querySelector('.productStock').textContent = stock;
        productClone.querySelector('.productPrice').textContent = `₹${price}`
        productClone.querySelector('.productActualPrice').textContent = `₹${price*4}`

        //Home Quantity toggle
        productClone.querySelector('.stockElement').addEventListener('click',(event)=>{
            homeQuantityToggle(event,id,stock);
        })

        //add to cart
        productClone.querySelector('.add-to-cart-button').addEventListener('click', (event)=>{
            addToCart(event,id,stock);
        })

        // Updating Product Information
        productContainer.append(productClone)
    })
}