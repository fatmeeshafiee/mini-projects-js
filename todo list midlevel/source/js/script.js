

let formControl = document.querySelector('.form-control');
let listGroup = document.querySelector('.list-group');
let label = document.querySelector('#label');

formControl.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        e.preventDefault(); 
        if (formControl.value.trim() === "") {
            label.textContent = "Please enter something";
        } else {
            addNewToDo(e)
        }
    }
});


function addNewToDo(e){
    label.textContent = "Add New Todo...";
    let newValue = document.createElement('li');
    let newValueSpan = document.createElement('span');
    let newValuei = document.createElement('i');
    newValueSpan.textContent =e.target.value;
    newValuei.className = "fa fa-trash-o delete";
    newValue.className = "list-group-item d-flex justify-content-between align-item-center";
    listGroup.append(newValue);
    newValue.append(newValueSpan,newValuei);
    formControl.value = "";
    newValuei.addEventListener("click",()=>{
        newValue.remove();
    })
}

































// let inputElem = document.getElementById("input");
// let todoUlElem = document.getElementById("ulTag");
// let addToDoForm = document.getElementById("form");


// function addNewToDo(newToDoValue){

//     let newToDoLi = document.createElement("li");
//     newToDoLi.className = "list-group-item d-flex justify-content-between align-item-center";


//     let newToDoSpan = document.createElement("span");
//     newToDoSpan.innerHTML = newToDoValue;

//     let newToDoTrash = document.createElement("i");
//     newToDoTrash.className = "fa fa-trash-o delete";

//     newToDoTrash.addEventListener("click" , function(event){
//         event.target.parentElement.remove();
//     })


//     newToDoLi.append(newToDoSpan , newToDoTrash);


//     todoUlElem.append(newToDoLi)

    
// }



// addToDoForm.addEventListener("submit" , function(event){
//     event.preventDefault();
// })


// inputElem.addEventListener("keydown" , function(event){

//     let newToDoValue = event.target.value.trim();

//     if(event.keyCode === 13)
//         if(newToDoValue){
//             inputElem.value = "";
//             addNewToDo(newToDoValue)
//         }


// })