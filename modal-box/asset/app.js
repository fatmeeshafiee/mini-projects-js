let openBtn=document.querySelector("#openBtn");
let modalContainer=document.querySelector(".modal-container");
let closeBtn=document.querySelector(".closeBtn");
let body=document.querySelector("body");


openBtn.addEventListener('click',()=>{
    modalContainer.style.display="block"
    body.style.background="rgba(102, 33, 167, 0.8"
})
closeBtn.addEventListener('click',()=>{
    modalContainer.style.display="none"
    body.style.background="rgb(137,43,226,0.687)"
})
window.addEventListener('click',(e)=>{
    if(e.target ==modalContainer){
        modalContainer.style.display="none"
        body.style.background="rgb(137,43,226,0.687)"
    }

})

