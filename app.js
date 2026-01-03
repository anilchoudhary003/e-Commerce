

 let number = document.querySelector(".number");
 
//   let num = number.innerText = "0";
let addcart = document.querySelectorAll(".AddCart");

for (let i = 0; i < addcart.length; i++) {
    addcart[i].addEventListener("click", () => {
        console.log("Clicked:", addcart[i].innerText);
        number.style ="opacity: 1";
        
        number.innerText++;

      
    });}





