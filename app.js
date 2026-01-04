let number = document.querySelector(".number");

// let divv = document.querySelector(".add-cart");
// console.log(divv);
// add.createElement("div");
//   add.appendChild(div);
//   let num = number.innerText = "0";
let addcart = document.querySelectorAll(".AddCart");

for (let i = 0; i < addcart.length; i++) {
    addcart[i].addEventListener("click", () => {
        console.log("Clicked:", addcart[i].innerText);
        number.style = "opacity: 1";
        number.innerText++;


    });
}

// for (let i = 0; i < addcart.length; i++) {
//     addcart[i].addEventListener("click", () => {
//         if (document.body.classList.contains("add-cart")) {

//             const divv = document.createElement("div");
//             divv.classList.add("Box");
//             document.body.appendChild(divv);
//         }

//     });
// }


for (let i = 0; i < addcart.length; i++) {
    addcart[i].addEventListener("click", () => {
        console.log("create a div");
        if (document.body.classList.contains("add-cart")) {

            const divv = document.createElement("div");
            divv.classList.add("Box");
            document.body.appendChild(divv);
        }

    });
}

//  if (document.body.classList.contains("add-cart")) {

//             const divv = document.createElement("div");
//             divv.classList.add("Box");
//             document.body.appendChild(divv);
//         }



