

let busObject = {
  name: 'Bus',
  imageUrl: "https://cms.eichertrucksandbuses.com/uploads/truck/sub-category/a933e5958e4a354cfb8d22665bd244fd.png",
  description: "Description of Bus",
  cart: "<i class='fa-solid fa-basket-shopping'></i>"

}

let carObject = {
  name: 'Car',
  imageUrl: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200",
  description: "Description of Car",
  cart: "<i class='fa-solid fa-basket-shopping'></i>"
}

function getCard(details) {
  const mainSection = document.getElementById('main-section');
  const modalInfo = JSON.stringify(details);
  const div = document.createElement('div');
  console.log(modalInfo)
  div.innerHTML = `

<div class="card" style="max-width:400px;">
  <img class="card-img" src=${details.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${details.name}</h5>
    <p class="card-text"> ${details.description}</p>
    <button  onclick="addToCart('${details.name}')">${details.cart}</button>
    <!-- Button trigger modal -->
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" onclick="openModal('${details.name}', '${details.description}', '${details.imageUrl}')" data-bs-target="#exampleModal">
      See more
    </button>


  </div>
  

</div>

`
  mainSection.appendChild(div);
}
getCard(busObject);
getCard(carObject);

// //modal

function openModal(name, description, imageUrl) {
  console.log('fatema')

  const modalBody = document.getElementById('modal-body');
  modalBody.innerHTML = `
    <div class="card" style="max-width:400px;">
  <img class="card-img" src=${imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text"> ${description}</
  </div>
  </div>
    `
}
// openModal(busObject);

// openModal(carObject);
//ADD LIST
let count = 0;
function addToCart(name) {

  count++;
  document.getElementById('list').innerText = count;

  const itemList = document.getElementById('item-list');

  const tableBody = document.createElement('tr');
  tableBody.innerHTML = `
  <th scope="row">${count}</th>
  <td>${name}</td
  
  
  `
  itemList.appendChild(tableBody);

}




