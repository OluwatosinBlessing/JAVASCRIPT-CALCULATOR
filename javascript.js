const calculator = document.getElementsByClassName('container');
const keyboard = document.getElementsByClassName('keyboard');


buttons = Array.from(document.getElementsByClassName('key'));

console.log(buttons)

buttons.map(buttons =>
    button.addEventListener('click',(e)=>{
        console.log('clicked');
        console.log(e.target);
        console.log(e.target.innerHTML);
    })
    
    
    )