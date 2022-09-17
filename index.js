setInterval(function(){
const time = new Date().toLocaleTimeString('en-JM')
  document.querySelector("#txt").innerHTML = time
},1000);
  
const body = document.getElementById('body')
const button = document.getElementById('changeBackground')

function change(){
	body.classList.toggle('light');
	button.innerHTML === 'Light' ? button.innerHTML = 'Dark' : button.innerHTML = 'Light';
	button.classList.toggle('btn-dark')
}
