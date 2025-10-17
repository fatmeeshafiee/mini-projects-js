let countrySelect=document.querySelector(".countrySelect");
let citySelect=document.querySelector(".citySelect");
let btn=document.querySelector(".btn");
let text=document.querySelector("#text");

//1
const cityOptions = {
  tehran: ["Niavaran", "Velenjak", "Shahrak Qarb"],
  esfahan: ["esfahan", "najafabad", "kashan"],
  lorestan:["khoramabad","borojerd"],

};
countrySelect.addEventListener("change", () => {
  const selected = countrySelect.value;
  const cities = cityOptions[selected] || [];
    if (cities.length === 0) {
    citySelect.innerHTML = `<option>Select City </option>`;
  } else {
    citySelect.innerHTML = cities.map(value => `<option>${value}</option>`).join("");
  }
});
btn.addEventListener("click", () => {
  btn.style.display="none"
  text.textContent=`You Reserved ${citySelect[0].value} in ${countrySelect.value}`
  
})
 
