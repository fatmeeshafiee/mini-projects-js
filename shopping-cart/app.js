const products = [
  {
    id: 1,
    name: 'iPhone 12',
    price: 99,
    image: './images/iphone-12.png',
  },
  {
    id: 2,
    name: 'AirPods',
    price: 89,
    image: './images/airpods.png',
  },
]
let totalPrice=0
function renderProduct(){
  let allProducts=document.querySelector(".products");
  allProducts.innerHTML=''
  products.map((item,index)=>{
    
    allProducts.innerHTML += `
    <div class="product">
    <div class="product__image">
      <img src=${item.image} />
    </div>
    <h2 class="product__title">${item.name}</h2>
    <h3 class="product__price">${item.price} تومان</h3>
    <button class="add-to-cart" onclick="addToCart(${index})">افزودن به سبد خرید</button>
  </div>
    `
  })
 
}
renderProduct()

function addToCart(index) {
  const item = products[index]; 
  let cart__items = document.querySelector(".cart__items");
  let cart__total_price = document.querySelector(".cart__total-price");
  
  cart__items.innerHTML += `
    <div class="cart__item">
      <div class="col-md-4">
        <button class="cart__item-remove" onclick="removeFromCart('${item.name}', ${index}, this)">حذف</button>
      </div>
      <div class="col-md-4">
        <div class="qty">${item.price}</div>
      </div>
      <div class="col-md-4">
        <h3 class="cart__item-title">${item.name}</h3>
      </div>
    </div>
  `;
  totalPrice += item.price;
  cart__total_price.textContent = totalPrice + " تومان";

}
function removeFromCart(name, index, btn) {
  btn.closest(".cart__item").remove();
    totalPrice -= price;
    let cart__total_price = document.querySelector(".cart__total-price");
    cart__total_price.textContent = totalPrice + " تومان";
}