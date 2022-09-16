
setInterval(function(){
const time = new Date().toLocaleTimeString('en-JM')
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



