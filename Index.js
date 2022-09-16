document.addEventListener('DOMContentLoaded', ()=>{
setInterval(function(){
const date = new Date()
var Hour = date.getHours()
const Minute = date.getMinutes()
const second = date.getSeconds()
const datenow = date.getDate()
let Am = 'AM'
if (Hour >= 12){
  Hour = Hour-12
  Am = 'PM'
}
else{
  Am = 'AM'
}

time = `${Hour}:${Minute}:${second}:${Am}`
  document.querySelector("#txt").innerHTML = time
},1000);
  
const body = document.getElementById('body')
const button = document.getElementById('changeBackground')

function change(){
	body.classList.toggle('dark');
	button.innerHTML === 'Light' ? button.innerHTML = 'Dark' : button.innerHTML = 'Light';
button.style.backgroundColor === 'white' ? button.style.backgroundColor = 'black' : button.style.backgroundColor = 'white';
button.style.color === 'black' ? button.style.color = 'white' : button.style.color = 'black';
  console.log('change');
}

})  
  
  
  
  
