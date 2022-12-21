const btn = document.querySelector("#btn");
const color = document.querySelector(".color")

btn.addEventListener("click", ()=>
{
    const R = Math.floor(Math.random() * 500);
    const G = Math.floor(Math.random() * 500);
    const B = Math.floor(Math.random() * 500);
    document.body.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
    color.textContent = `rgb(${R}, ${G}, ${B})`

})