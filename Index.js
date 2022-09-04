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
const button =document.querySelector('button');
const body =document.querySelector('#body');
button.onclick = () => {
  if(body.style.background === 'white'){
    body.style.background = 'black';
    document.querySelector('#txt').style.color = 'white'
    document.querySelector('#txtt').style.color = 'white'
    button.style.background = "white";
    button.style.color = "black";
    button.innerHTML = "Light";
  }
  else{
    body.style.background = "white";
    document.querySelector('#txt').style.color = 'black';
    document.querySelector('#txtt').style.color = 'black';
    
    button.innerHTML = "Dark";
    button.style.background = "black";
    button.style.color = "white";
  }
}
  
  
})  
  
  
  
  
