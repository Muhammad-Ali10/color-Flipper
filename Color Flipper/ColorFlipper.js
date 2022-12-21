const btn = document.querySelector("#btn");
const color = document.querySelector(".color")
const color_array = ["Red","Green","Tomato","BlueViolet","Crimson","DarkRed","Gold","Olive","Peru","PowderBlue"];

btn.addEventListener("click", ()=>
{
    
    const color_length = color_array.length;
    const arr_num = Math.floor(Math.random() * color_length);
    console.log(arr_num)
    document.body.style.backgroundColor = color_array[arr_num]
    color.textContent = color_array[arr_num]

})