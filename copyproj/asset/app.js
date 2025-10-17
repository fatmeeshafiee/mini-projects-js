let textarea=document.querySelector("textarea");
let button=document.querySelector("button");

button.addEventListener('click',()=>{
    textarea.select()
    textValue=textarea.value;
    navigator.clipboard.writeText(textValue)
   
    setTimeout(() => {
         button.textContent="کپی شد!"
         button.style.background="#03A9F4";
    }, 600);
})