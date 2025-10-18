let text=document.querySelector("#text");
let form=document.querySelector("input");
let counter=document.querySelector(".counter");
let maxLengh=form.getAttribute('maxlength')

form.addEventListener('keydown',()=>{
  
    counter.innerHTML=maxLengh - form.value.length
        if(form.value.length<5){
            text.textContent="your username is too short"
            text.style.color="red"
             text.style.fontSize="20px"
              text.style.textAlign="center"
              form.style.borderColor="rgb(208,114,114)"
        }else if(form.value.length>10){
            text.textContent="your username is too lorg"
             text.style.color="red"
              text.style.fontSize="20px"
              text.style.textAlign="center"
              form.style.borderColor="rgb(208,114,114)"
        }else{
            text.textContent="everything is ok"
              text.style.color="green"
              text.style.fontSize="20px"
              text.style.textAlign="center"
              form.style.borderColor="rgb(52,221,52)"
           
        }

    
})


































// const inputElem = document.querySelector("input");
// const spanElem = document.querySelector(".counter");
// const inputMaxlength = inputElem.getAttribute("maxlength");
// const newSpan = document.getElementById("text");


// inputElem.addEventListener("keydown" , function(){
//    spanElem.innerHTML = inputMaxlength - inputElem.value.length;   // 19 - 3 = 16
//     if(inputElem.value.length < 5){
//         newSpan.innerHTML = "your username is too short";
//         newSpan.style.color = "red";
//         newSpan.style.fontSize = "22px";
//         newSpan.style.textAlign = "center";
//         newSpan.style.marginTop = "20px";
//         inputElem.style.borderColor = "rgb(208 , 114 , 114)"
//     }else if(inputElem.value.length > 15){
//         newSpan.innerHTML = "your username is too long";
//         newSpan.style.color = "red";
//         newSpan.style.fontSize = "22px";
//         newSpan.style.textAlign = "center";
//         newSpan.style.marginTop = "20px";
//         inputElem.style.borderColor = "rgb(208 , 114 , 114)"
//     }else{
//         newSpan.innerHTML = "everything is ok";
//         newSpan.style.color = "green";
//         newSpan.style.fontSize = "22px";
//         newSpan.style.textAlign = "center";
//         newSpan.style.marginTop = "20px";
//         inputElem.style.borderColor = "rgb(52 , 221 , 52)"
//     }
// })
