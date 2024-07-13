let input = document.getElementById("visor")


function numero(number) {
 input.value += number;
}

function operador(operador) {
 input.value += operador;
 if(input.length = 0 && "*+-/".includes(visor[visor.lengh -1])){
  visor.value = visor.slice(0, -1) + operador
 }
 }
 
 function decimal() {
 let display = visor.value;
 let parts = display.split(/[\+\-\*\/]/);
 let lastPart = parts[parts.length - 1];

 if (!lastPart.includes(".")) {
  visor.value += ".";
  
   }
 }
 
function calcular(){
 let display = visor.value;
 let result = eval(display.replace(/,/g, '.'));
 visor.value = result.toString().replace('.', ',');
 }
 

input.addEventListener('onclick', numero, operador, calcular)
