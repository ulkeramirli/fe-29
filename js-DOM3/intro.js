// document.querySelectorAll('.color-btn').forEach(button => {
//     button.addEventListener('click', () => {
//         const color = button.getAttribute('data-color');
//         document.body.style.backgroundColor = color;
//     });
// });
document.querySelectorAll('.color-button').forEach(button => {
    button.addEventListener('click', () => {
        const color = button.classList[1];  
        document.body.style.backgroundColor = color;
    });
});

var text = `salam`

if(true){
    var text = text
    console.log(text);
}
console.log(text)
