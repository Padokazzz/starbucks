const copo1 = document.getElementById("copo1");
const copo2 = document.getElementById("copo2");
const copo3 = document.getElementById("copo3");
const circulo = document.querySelector(".circulo");
const copo = document.getElementById("copo");

copo1.addEventListener("click", (e) => {
    e.preventDefault();
    copo.src = "./images/img1.png";
    circulo.style.backgroundColor = "#017143";
});
copo2.addEventListener("click", (e) => {
    copo.src = "./images/img2.png";
    circulo.style.backgroundColor = "#dc64e2";
});
copo3.addEventListener("click", (e) => {
    copo.src = "./images/img3.png";
    circulo.style.backgroundColor = "#ff2e7a";
});