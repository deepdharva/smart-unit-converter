const input = document.getElementById("inputValue");
const type = document.getElementById("conversionType");
const result = document.getElementById("result");

input.addEventListener("input", convert);
type.addEventListener("change", convert);

function convert(){

let value = parseFloat(input.value);

if(isNaN(value)){
result.innerText="Result:";
return;
}

let output;

switch(type.value){

case "kmToM":
output=value*1000;
break;

case "mToKm":
output=value/1000;
break;

case "kgToG":
output=value*1000;
break;

case "gToKg":
output=value/1000;
break;

case "cToF":
output=(value*9/5)+32;
break;

case "fToC":
output=(value-32)*5/9;
break;

case "cmToIn":
output=value/2.54;
break;

case "inToCm":
output=value*2.54;
break;

case "kmhToMs":
output=value/3.6;
break;

case "msToKmh":
output=value*3.6;
break;

case "usdToInr":
output=value*83;
break;

case "inrToUsd":
output=value/83;
break;

}

result.innerText="Result: "+output;

}

const toggle=document.getElementById("modeToggle");

toggle.onclick=()=>{
document.body.classList.toggle("dark");
};
