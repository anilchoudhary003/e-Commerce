let number = document.querySelector(".number");


let addcart = document.querySelectorAll(".AddCart");

for (let i = 0; i < addcart.length; i++) {
    addcart[i].addEventListener("click", () => {
        console.log("Clicked:", addcart[i].innerText);
        number.style = "opacity: 1";
        number.innerText++;

        addcart[i].classList.add("on_click");
        setTimeout(() => {
            console.log("hii");
            addcart[i].classList.remove("on_click");
        }, 300)



    });
}




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