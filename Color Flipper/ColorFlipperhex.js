const btn = document.querySelector("#btn")
const color = document.querySelector(".color") 
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
btn.addEventListener("click", function()
{
    let hexcolor  = "#"
    for (let index = 0; index < 6; index++) {
      
        const num = Math.floor(Math.random() *16 )
        hexcolor += hex[num]
    }
    document.body.style.backgroundColor = hexcolor
    color.textContent = hexcolor
})