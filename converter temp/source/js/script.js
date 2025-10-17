
let selection=document.getElementsByClassName(".selection")
let firstSelect=document.querySelector("#firstSelect")
let secondSelect=document.querySelector("#secondSelect")
let converter=document.querySelector("#converter")
let result=document.querySelector("#result")
let convertButton=document.querySelector(".convertButton")
let resetButton=document.querySelector(".resetButton")

convertButton.addEventListener('click',convert);
resetButton.addEventListener('click',reset);

function convert(){
    if(converter.value === ""){
        result.innerHTML = "insert correct value";
        result.style.color = "red"
    }else{
        if(firstSelect.value === "celsius" && secondSelect.value === "celsius"){  // °C To °C
            result.innerHTML = converter.value + " °C is:  " + converter.value + " °C"
        }else if(firstSelect.value === "celsius" && secondSelect.value === "fahrenheit"){   // °C To °F
            let resultValue = (converter.value * 1.8) + 32;
            result.innerHTML = converter.value + " °C is:  " + resultValue + " °F";
        }else if(firstSelect.value === "celsius" && secondSelect.value === "kelvin"){  // °C To °K
            let resultValue = +converter.value + 273.15;
            result.innerHTML = converter.value + " °C is:  " + resultValue + " °K";
        }else if(firstSelect.value === "fahrenheit" && secondSelect.value === "celsius"){  // °F To °C
            let resultValue = (converter.value - 32) * (5/9);
            result.innerHTML = converter.value + " °F is:  " + resultValue.toFixed(2) + " °C";
        }else if(firstSelect.value === "fahrenheit" && secondSelect.value === "fahrenheit"){   // °F To °F 
            result.innerHTML = converter.value + " °F is:  " + converter.value + " °F"
        }else if (firstSelect.value === 'fahrenheit' && secondSelect.value === 'kelvin') {  // °F to °K
            let resultValue = (+converter.value + 459.67) * (5/9);
            result.innerHTML = converter.value + " °F is: " + resultValue.toFixed(2) + " °K";
        } else if (firstSelect.value === 'kelvin' && secondSelect.value === 'celsius') {  // K to °C 
            let resultValue = converter.value - 273.15
            result.innerHTML = converter.value + "°K is: " + resultValue + " °C";
        } else if (firstSelect.value === 'kelvin' && secondSelect.value === 'fahrenheit') {  // K to °F

            let resultValue = +converter.value * (9/5) - 459.67
            result.innerHTML = converter.value + "°K is: " + resultValue.toFixed(2) + " °F";
        } else if (firstSelect.value === 'kelvin' && secondSelect.value === 'kelvin') {  // K to K
            result.innerHTML = converter.value + "K is: " + converter.value + "K"
        }
    }}

function reset(){

    result.innerHTML = "";
    converter.value = "";
}