let input = document.getElementById("inputValue");
let type = document.getElementById("conversionType");
let result = document.getElementById("result");

function convert(){

let value = Number(input.value);

if(!value){
result.innerText="Result:";
return;
}

let r=0;

switch(type.value){

case "kmToM":
r=value*1000;
break;

case "mToKm":
r=value/1000;
break;

case "kgToG":
r=value*1000;
break;

case "gToKg":
r=value/1000;
break;

case "cToF":
r=(value*9/5)+32;
break;

case "fToC":
r=(value-32)*5/9;
break;

case "cmToIn":
r=value/2.54;
break;

case "inToCm":
r=value*2.54;
break;

case "kmhToMs":
r=value/3.6;
break;

case "msToKmh":
r=value*3.6;
break;

}

result.innerText="Result: "+r;

}

input.addEventListener("input",convert);
type.addEventListener("change",convert);

document.getElementById("modeToggle").onclick=function(){

document.body.classList.toggle("dark");

};
