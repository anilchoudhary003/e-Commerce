let number = document.querySelector(".number");

// Initialize cart from localStorage
function initializeCart() {
    if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
    }
}

// Update cart count and display
function updateCartCount() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let totalItems = 0;
    
    // Calculate total items (sum of all quantities)
    cart.forEach(item => {
        totalItems += (item.quantity || 1);
    });
    
    // Update the number display
    if (number) {
        if (totalItems > 0) {
            number.style.opacity = "1";
            number.innerText = totalItems;
        } else {
            number.style.opacity = "0";
            number.innerText = "0";
        }
    }
}

// Add product to cart with quantity
function addToCart(productImg, productText) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Check if product already exists
    let existingProduct = cart.find(item => item.img === productImg && item.text === productText);
    
    if (existingProduct) {
        // If product exists, increment quantity
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
        // If product doesn't exist, add it with quantity 1
        cart.push({ img: productImg, text: productText, quantity: 1 });
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

// Remove product from cart
function removeFromCart(productImg, productText) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Find index of product
    let index = cart.findIndex(item => item.img === productImg && item.text === productText);
    
    if (index > -1) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        
        // Refresh cart display
        let container = document.querySelector(".cart-container");
        if (container) {
            container.innerHTML = "";
            displayCart();
        }
    }
}

// Increase quantity of product in cart
function increaseQuantity(productImg, productText) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = cart.find(item => item.img === productImg && item.text === productText);
    
    if (product) {
        product.quantity = (product.quantity || 1) + 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        refreshCart();
    }
}

// Decrease quantity of product in cart
function decreaseQuantity(productImg, productText) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = cart.find(item => item.img === productImg && item.text === productText);
    
    if (product) {
        if ((product.quantity || 1) > 1) {
            product.quantity = (product.quantity || 1) - 1;
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
        } else {
            // If quantity is 1, remove the product
            removeFromCart(productImg, productText);
            return;
        }
        refreshCart();
    }
}

// Refresh cart display
function refreshCart() {
    let container = document.querySelector(".cart-container");
    if (container) {
        container.innerHTML = "";
        displayCart();
    }
}

// Display cart items on add_cart.html
function displayCart() {
    if (document.body.classList.contains("add-cart")) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        let container = document.querySelector(".cart-container");
        
        if (cart.length === 0) {
            const emptyMsg = document.createElement("p");
            emptyMsg.classList.add("empty-cart");
            emptyMsg.innerText = "Your cart is empty!";
            container.appendChild(emptyMsg);
            return;
        }
        
        cart.forEach((item) => {
            const divv = document.createElement("div");
            divv.classList.add("Box");
            
            // Create image element
            const img = document.createElement("img");
            img.src = item.img;
            img.alt = "Product";
            
            // Create text and quantity container
            const textContainer = document.createElement("div");
            textContainer.classList.add("text-container");
            textContainer.style.display = "flex";
            textContainer.style.flexDirection = "column";
            textContainer.style.flex = "1";
            textContainer.style.padding = "15px";
            textContainer.style.backgroundColor = "#f7fafa";
            textContainer.style.justifyContent = "space-between";
            
            // Create text element
            const text = document.createElement("p");
            text.innerText = item.text;
            text.style.margin = "0";
            text.style.fontSize = "20px";
            text.style.overflow = "auto";
            
            // Create quantity and button container
            const bottomContainer = document.createElement("div");
            bottomContainer.style.display = "flex";
            bottomContainer.style.flexDirection = "column";
            bottomContainer.style.gap = "10px";
            bottomContainer.style.marginTop = "10px";
            
            // Create quantity control div
            const quantityControlDiv = document.createElement("div");
            quantityControlDiv.style.display = "flex";
            quantityControlDiv.style.alignItems = "center";
            quantityControlDiv.style.gap = "10px";
            quantityControlDiv.style.backgroundColor = "white";
            quantityControlDiv.style.padding = "8px";
            quantityControlDiv.style.borderRadius = "5px";
            quantityControlDiv.style.border = "2px solid rgb(95, 105, 251)";
            
            const quantityLabel = document.createElement("span");
            quantityLabel.innerText = "Qty: ";
            quantityLabel.style.fontWeight = "bold";
            
            // Minus button
            const minusBtn = document.createElement("button");
            minusBtn.innerText = "−";
            minusBtn.style.backgroundColor = "rgb(255, 87, 87)";
            minusBtn.style.color = "white";
            minusBtn.style.border = "none";
            minusBtn.style.width = "30px";
            minusBtn.style.height = "30px";
            minusBtn.style.borderRadius = "50%";
            minusBtn.style.cursor = "pointer";
            minusBtn.style.fontSize = "18px";
            minusBtn.style.fontWeight = "bold";
            minusBtn.style.transition = "0.3s";
            
            minusBtn.addEventListener("mouseover", () => {
                minusBtn.style.backgroundColor = "rgb(220, 53, 53)";
            });
            
            minusBtn.addEventListener("mouseout", () => {
                minusBtn.style.backgroundColor = "rgb(255, 87, 87)";
            });
            
            minusBtn.addEventListener("click", () => {
                decreaseQuantity(item.img, item.text);
            });
            
            // Quantity value
            const quantityValue = document.createElement("span");
            quantityValue.innerText = item.quantity || 1;
            quantityValue.style.backgroundColor = "rgb(95, 105, 251)";
            quantityValue.style.color = "white";
            quantityValue.style.padding = "5px 15px";
            quantityValue.style.borderRadius = "5px";
            quantityValue.style.fontWeight = "bold";
            quantityValue.style.minWidth = "40px";
            quantityValue.style.textAlign = "center";
            
            // Plus button
            const plusBtn = document.createElement("button");
            plusBtn.innerText = "+";
            plusBtn.style.backgroundColor = "rgb(76, 175, 80)";
            plusBtn.style.color = "white";
            plusBtn.style.border = "none";
            plusBtn.style.width = "30px";
            plusBtn.style.height = "30px";
            plusBtn.style.borderRadius = "50%";
            plusBtn.style.cursor = "pointer";
            plusBtn.style.fontSize = "18px";
            plusBtn.style.fontWeight = "bold";
            plusBtn.style.transition = "0.3s";
            
            plusBtn.addEventListener("mouseover", () => {
                plusBtn.style.backgroundColor = "rgb(56, 142, 60)";
            });
            
            plusBtn.addEventListener("mouseout", () => {
                plusBtn.style.backgroundColor = "rgb(76, 175, 80)";
            });
            
            plusBtn.addEventListener("click", () => {
                increaseQuantity(item.img, item.text);
            });
            
            quantityControlDiv.appendChild(quantityLabel);
            quantityControlDiv.appendChild(minusBtn);
            quantityControlDiv.appendChild(quantityValue);
            quantityControlDiv.appendChild(plusBtn);
            
            // Create button group container
            const buttonGroupDiv = document.createElement("div");
            buttonGroupDiv.style.display = "flex";
            buttonGroupDiv.style.gap = "10px";
            buttonGroupDiv.style.justifyContent = "space-between";
            
            // Create buy button
            const buyBtn = document.createElement("button");
            buyBtn.innerText = "Buy Now";
            buyBtn.style.backgroundColor = "rgb(76, 175, 80)";
            buyBtn.style.color = "white";
            buyBtn.style.border = "none";
            buyBtn.style.padding = "8px 20px";
            buyBtn.style.borderRadius = "5px";
            buyBtn.style.cursor = "pointer";
            buyBtn.style.fontSize = "14px";
            buyBtn.style.fontWeight = "bold";
            buyBtn.style.transition = "0.3s";
            buyBtn.style.flex = "1";
            
            buyBtn.addEventListener("mouseover", () => {
                buyBtn.style.backgroundColor = "rgb(56, 142, 60)";
            });
            
            buyBtn.addEventListener("mouseout", () => {
                buyBtn.style.backgroundColor = "rgb(76, 175, 80)";
            });
            
            buyBtn.addEventListener("click", () => {
                alert("✓ Purchase successful! Quantity: " + (item.quantity || 1) + "\nThank you for your purchase!");
                removeFromCart(item.img, item.text);
            });
            
            // Create remove button
            const removeBtn = document.createElement("button");
            removeBtn.innerText = "Remove";
            removeBtn.style.backgroundColor = "rgb(255, 87, 87)";
            removeBtn.style.color = "white";
            removeBtn.style.border = "none";
            removeBtn.style.padding = "8px 20px";
            removeBtn.style.borderRadius = "5px";
            removeBtn.style.cursor = "pointer";
            removeBtn.style.fontSize = "14px";
            removeBtn.style.fontWeight = "bold";
            removeBtn.style.transition = "0.3s";
            removeBtn.style.flex = "1";
            
            removeBtn.addEventListener("mouseover", () => {
                removeBtn.style.backgroundColor = "rgb(220, 53, 53)";
            });
            
            removeBtn.addEventListener("mouseout", () => {
                removeBtn.style.backgroundColor = "rgb(255, 87, 87)";
            });
            
            removeBtn.addEventListener("click", () => {
                removeFromCart(item.img, item.text);
            });
            
            buttonGroupDiv.appendChild(buyBtn);
            buttonGroupDiv.appendChild(removeBtn);
            
            bottomContainer.appendChild(quantityControlDiv);
            bottomContainer.appendChild(buttonGroupDiv);
            
            textContainer.appendChild(text);
            textContainer.appendChild(bottomContainer);
            
            divv.appendChild(img);
            divv.appendChild(textContainer);
            container.appendChild(divv);
        });
    }
}

initializeCart();
displayCart();
updateCartCount();

let addcart = document.querySelectorAll(".AddCart");

for (let i = 0; i < addcart.length; i++) {
    addcart[i].addEventListener("click", () => {
        console.log("Clicked:", addcart[i].innerText);

        // Get product image and text
        const productDiv = addcart[i].closest(".product");
        const productImg = productDiv.querySelector("img").src;
        const productText = productDiv.querySelector(".text").innerText;
        
        // Add to cart
        addToCart(productImg, productText);

        addcart[i].classList.add("on_click");
        setTimeout(() => {
            console.log("Product added to cart");
            addcart[i].classList.remove("on_click");
        }, 300)
    });
}













let login = document.querySelector(".login");
let log1 = document.querySelector(".log1");
let log2 = document.querySelector(".log2");
let a1 = document.querySelector(".Register1 a");
let a2 = document.querySelector(".Register2 a");
let main = document.querySelector(".main");
let container = document.querySelector(".container");
let footer = document.querySelector("footer");
let submit = document.querySelectorAll(".submit");


login.addEventListener(("click"), () => {

    log1.classList.remove("hidden");
    main.classList.add("hidden");
    container.classList.add("hidden");
    footer.classList.add("hidden");

})
a1.addEventListener(("click"), () => {

    log2.classList.remove("hidden");
    log1.classList.add("hidden");
})

a2.addEventListener(("click"), () => {

    log1.classList.remove("hidden");
    log2.classList.add("hidden");
})



for (let btn of submit) {
    btn.addEventListener(("click"),()=>{
    console.log("submit");
    main.classList.remove("hidden");
    container.classList.remove("hidden");
    footer.classList.remove("hidden");
     log1.classList.add("hidden");
     log2.classList.add("hidden");
    });
}