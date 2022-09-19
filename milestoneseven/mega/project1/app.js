let dataSet;
fetch("data.json")
  .then((res) => res.json())

  .then((data) => {
    dataSet = data
    displayData(data)
  })

const displayData = (data) => {
  const cardContainer = document.getElementById('card-container')
  data.forEach(element => {
    const { id, img, price, name } = element
    const cardDiv = document.createElement('div')
    cardDiv.classList.add("card", "w-80", "bg-base-100", "shadow-xl", "mb-19");
    cardDiv.innerHTML = `
        <figure><img src="${img}" alt="Shoes" /></figure>
        
        <div class="card-body">
            <h2 class="card-title">${name}</h2>

            <span onclick="wish('${id}'),this.style.color ='red'" id="hearts"><i class="fa-sharp fa-solid fa-heart"></i></span>

            <p>If a dog chews shoes whose shoes does he choose?</p>
            <p>Price : ${price}</p>
            <div class="card-actions justify-end">
                <button onclick="cart('${id}')" class="btn btn-outline btn-secondary">Buy Now</button>

                <label
        onclick="openModal('${id}')"
          for="my-modal"
          class="btn btn-outline btn-secondary w-[45%] mx-auto flex justify-center items-center"
        >
          <i class="fa-solid fa-circle-info mr-2"></i> See Details
        </label>

                </div>
        </div>
        `;
    cardContainer.appendChild(cardDiv)
  });
}
// modal

const openModal = (id) => {
  const modalContainer = document.getElementById('md')
  const product = dataSet.find(item => item.id === id)
  const { name, price, img } = product;
  modalContainer.innerHTML = `

    <div>
    <img
      src="${img}"
      class="w-[100%] h-[200px] mx-auto object-cover"
      alt=""
    />
  </div>
  <!-- modal infos -->
  <div>
    <h1 class="font-semibold text-xl my-2">
      <span class="text-primary">PRODUCT : </span> ${name}
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
      dolorem provident hic sed vitae nulla accusamus? Quas cupiditate
      iure nostrum iusto accusantium perspiciatis ad veniam quae
      quisquam perferendis
    </p>
    <div class="my-2">
      <h1 class="font-semibold text-xl text-primary">FEATURES :</h1>
      <p>feature01,feature02, feature03, feature04</p>
    </div>
    <p class="font-semibold text-xl">
      <span class="text-primary">PRICE : </span> $<span>${price}</span>
    </p>
  </div>
 
 `;

}
// wish
let count = 0;
const wishList = document.getElementById('wish')
const wish = (id) => {
  count++;

  const fvrt = dataSet.find((item) => item.id === id)
  console.log(fvrt)

  const { name, price } = fvrt;
  const wishBox = document.createElement('div')
  wishBox.classList.add("card", "w-90", "bg-base-100", "shadow-xl", "mb-19", "text-primary", "mt-4");
  wishBox
    .innerHTML = `

<div class="flex font-bold">
<p class="ml-4">${count}</p>
<p class="ml-7">Name :${name}</p>
<p class="ml-7">Price :${price}</p>
<p onclick="trush('${id}'),this.parentNode.style.display ='none'"><i class="fa-sharp fa-solid fa-trash ml-7"></i></p>
</div>
    `;
  wishList.appendChild(wishBox)

}

// trash

let count1 = 0;

const trush = (id) => {
  const trushList = document.getElementById('trush')
  count1++;

  const trushs = dataSet.find((item) => item.id === id)
  console.log(trushs)

  const { name, price } = trushs;
  const trushBox = document.createElement('div')
  trushBox.classList.add("card", "w-90", "bg-base-100", "shadow-xl", "mb-19", "text-primary", "mt-4");
  trushBox.innerHTML = `
<div class="flex font-bold">
<p class="ml-4">${count}</p>
<p class="ml-7">Name :${name}</p>
<p class="ml-7">Price :${price}</p>
    `;
  trushList.appendChild(trushBox)

}
//cart

const cartList = document.getElementById('cart-div')

let newprice = 0;
const cart = (id) => {

  const cart = dataSet.find((item) => item.id === id)
  console.log(cart)
  newprice = newprice + cart.price;
  const { name, img } = cart;
  const cartBox = document.createElement('div')
  cartBox.classList.add("card", "w-90", "bg-base-100", "shadow-xl", "mb-19", "text-primary", "mt-4");
  cartBox.innerHTML = `

  <div class="flex">
                        <img src="${img}" alt="" style="height:50px;width: 50px;" class="mr-4 p-1">
                        <p class="mr-4 mt-3">${name}</p>
                        <input type="text" name="" id="" placeholder="01" class="border mr-2" style="height:40px;width: 30px;">
                    </div>
    `;
  cartList.appendChild(cartBox)
  document.getElementById('price').innerText = newprice.toFixed(2)

}
//CLEAR
document.getElementById('clear').addEventListener('click', function () {
  console.log('clear')

  document.getElementById('cart-div').innerHTML = '';

})

