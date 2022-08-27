function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
}

function displayUser(datas) {

    const userContainer = document.getElementById('user');
    for (const userData of datas) {
        console.log(userData)
        const userDiv = document.createElement('div')
        userDiv.innerHTML = `
        
        <h4>${userData.id}</h4>
        <h5>${userData.username}</h5>
        <h3>${userData.email}</h3>
        `;
        userContainer.appendChild(userDiv)
    }
}