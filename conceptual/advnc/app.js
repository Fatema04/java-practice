

let busObject = {
    name: 'bus',
    imageUrl: "https://cms.eichertrucksandbuses.com/uploads/truck/sub-category/a933e5958e4a354cfb8d22665bd244fd.png",
    description: "ftydnbv6tgfxdjhoiyg vbbnmjmkkjjhghghfgfgf",

}

let carObject = {
    name: 'car',
    imageUrl: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200",
    description: "ftydnbv6tgfxdjhoiyg vbbnmjmkkjjhghghfgfgf",

}

function getCard(details) {
    const mainSection = document.getElementById('main-section');
    const modalInfo = JSON.stringify(details);
    const div = document.createElement('div');
    div.innerHTML = `

<div class="card" style="max-width:400px;">
  <img class="card-img" src=${details.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${details.name}</h5>
    <p class="card-text"> ${details.description}</p>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" onclick='openModal(${modalInfo})' data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>


  </div>
  

</div>

`
    mainSection.appendChild(div);
    console.log(details)
}
getCard(busObject);
getCard(carObject);

// //modal
// 
function openModal(modalObj) {

    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
    <div class="card" style="max-width:400px;">
  <img class="card-img" src=${modalObj.imageUrl} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${modalObj.name}</h5>
    <p class="card-text"> ${modalObj.description}</p>
    
  </div>
  </div>
    `



}
openModal(busObject);
openModal(carObject)

