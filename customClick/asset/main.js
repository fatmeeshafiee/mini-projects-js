
let container=document.querySelector(".container");
let shareMenu=document.querySelector(".share-menu");

document.addEventListener('contextmenu',(e)=>{
    e.preventDefault()  //delete the default style of right click
    container.style.visibility="visible";
    let x=e.offsetX;
    let y=e.offsetY;
    let winWidth=window.innerWidth;
    let winHeight=window.innerHeight;
    let cmWidth=container.offsetWidth;
    let cmHeight=container.offsetHeight;
    
    x=x>winWidth-cmWidth ? winWidth-cmWidth:x
    y=y>winHeight-cmHeight ? winHeight-cmHeight:y

    if(x>winWidth-cmWidth-shareMenu.offsetWidth){
        shareMenu.style.left="-170px"
    }else{
        shareMenu.style.left="260px"
    }
    container.style.left=x+"px";
    container.style.top=y+"px";
    container.style.visibility="visible";

})
document.addEventListener('click',()=>{
    container.style.visibility="hidden";
})
