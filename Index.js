document.addEventListener('DOMContentLoaded', ()=>{
setInterval(function(){
const date = new Date()
const Hour = date.getHours() - 12
const Minute = date.getMinutes()
const second = date.getSeconds()
const datenow = date.getDate()
let Am = 'AM'
if (Hour >= 12){
  Am = 'PM'
}
else{
  Am = 'AM'
}

time = `${Hour}:${Minute}:${second}:${Am}`
  document.querySelector("#txt").innerHTML = time
},1000)

document.querySelector('button').onclick = () => {
  if(document.querySelector('body').style.background == 'white'){
    document.querySelector('body').style.background = 'black';
    document.querySelector('#txt').style.color = 'white';
    document.querySelector('button').style.background = "black";
    document.querySelector('button').innerHTML = "Dark";
    document.querySelector('button').style.color = "white";
  }
  else{
    document.querySelector('body').style.background = "white";
    document.querySelector('#txt').style.color = 'black';
    document.querySelector('button').innerHTML = "Light";
    document.querySelector('button').style.background = "white";
    document.querySelector('button').style.color = "black";
  }
}
  
  
})  
  
  
  
  
