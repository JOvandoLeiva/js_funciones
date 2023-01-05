var color = 'black'; 

function pintar(ele, color){
    ele.style.backgroundColor = color;
};
// pro way
Array.from(document.querySelectorAll('#divs > div')).map(item => {
// console.log(item);
item.addEventListener("click", () => pintar(item, color));
})


//manera cortita 
// ele = document.getElementById("ele1");
// // console.log(ele);
// ele.addEventListener("click", () => pintar(ele, color));


// ele = document.getElementById("ele2");
// ele.addEventListener("click", () => pintar(ele, color));
// ele = document.getElementById("ele3");
// ele.addEventListener("click", () => pintar(ele, color));
// ele = document.getElementById("ele4");
// ele.addEventListener("click", () => pintar(ele, color));

const options = {
 'a':'blue',
 's': 'purple',
 'd': 'yellow'
//  'f': 'gray'

}

//otra pro wey
document.addEventListener('keydown', function (event){
      color = options[event.key];
//    console.log(options[event.key]);
})
// document.addEventListener('keydown', function (event) {
//     if (event.key === 'a') {
//     /* Cambiar a color 1 */
//         color = 'blue';
//     } else if (event.key === 's') {
//     /* Cambiar a color 2 */
//         color = 'purple';
//     }
//     else if(event.key === 'd' ){
//         /* Cambiar a color 3 */
//         color = 'yellow';
//     }
//     })
    