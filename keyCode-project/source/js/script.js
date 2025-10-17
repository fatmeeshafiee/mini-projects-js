
let heading=document.querySelector('#heading');
let ascii=document.querySelector('#ascii');
let keyCode=document.querySelector('#keyCode');
let infos=document.querySelector('#infos');
let starter=document.querySelector('#starter');
let key=document.querySelector('#key');
let location1=document.querySelector('#location');
let which=document.querySelector('#which');
let code=document.querySelector('#code');


document.addEventListener('keydown',(event)=>{
	event.preventDefault()
	starter.style.display="none";
	heading.style.display="flex";
	ascii.style.display="flex";
	infos.style.display="flex";

	key.textContent=event.key;
	location1.textContent=event.location;
	which.textContent=event.which;
	code.textContent=event.code;
	ascii.textContent=event.keyCode
	console.log(event);
})













































// let starter = document.getElementById("starter");
// let heading = document.getElementById("heading");
// let ascii = document.getElementById("ascii");
// let code = document.getElementById("code");


// let keyCode = document.getElementById("keyCode");
// let key = document.getElementById("key");
// let locationElem = document.getElementById("location");
// let which = document.getElementById("which");
// let codeElem = document.getElementById("code");



// document.body.addEventListener("keydown" , function(event){

// 	event.preventDefault();
// 	starter.style.display = "none";
// 	heading.style.display = "flex";
// 	ascii.style.display = "flex";
// 	infos.style.display = "flex";



// 	console.log(event);

// 	let eventKeyCode = event.keyCode;
// 	let eventKey = event.key;
// 	let eventLocation = event.location;
// 	let eventWhich = event.which;
// 	let eventCode = event.code;


// 	keyCode.innerHTML = eventKeyCode;
// 	key.innerHTML = eventKey;
// 	locationElem.innerHTML = eventLocation;
// 	which.innerHTML = eventWhich;
// 	codeElem.innerHTML = eventCode;





// })
