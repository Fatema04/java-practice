let count = 0;
document.getElementById('add-btn').addEventListener('click', function () {
    count++;
    const inputValue = document.getElementById('input-field').value;

    const mainContainer = document.getElementById('content-container');
    const tableContainer = document.createElement('tr');
    tableContainer.innerHTML = `
    <th scope="row">${count}</th>
    <td>${inputValue}</td>
    <td>
    
<button class="btn btn-primary added">Add</button>
<button class="btn btn-danger delete-btn">Delete</button>

    </td>
    
    `
    mainContainer.appendChild(tableContainer);
    document.getElementById('input-field').value = '';


    const deleteBtn = document.getElementsByClassName('delete-btn');
    for (let button of deleteBtn) {
        button.addEventListener('click', function (event) {

            event.target.parentNode.parentNode.style.display = 'none'
        })
    }
    const addedBtn = document.getElementsByClassName('added');
    for (let buttons of addedBtn) {
        buttons.addEventListener('click', function (event) {

            event.target.parentNode.parentNode.style.display = 'linethrow'
        })
    }


})


