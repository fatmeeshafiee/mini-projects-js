let passwordField=document.querySelector("#password-field");
let iconEye=document.querySelector("#iconEye");


iconEye.addEventListener('click',()=>{
  if(passwordField.type=='password'){
      passwordField.setAttribute('type','text')
      iconEye.className="fa fa-eye-slash"
  }else{
     passwordField.setAttribute('type','password')
      iconEye.className="fa fa-eye"
  }

})