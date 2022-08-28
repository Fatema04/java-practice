function loadUser() {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayUser(data.results))
}


const displayUser = user => {
    const userContainer = document.getElementById('user-container');
    for (const userData of user) {
        // console.log(userData)
        const div = document.createElement('div');
        div.classList.add('user')
        div.innerHTML = `
        <h3>${userData.id.name}</h3>
        <h3>${userData.location.city}</h3>
        <h3>${userData.email}</h3>

        `;
        userContainer.appendChild(div)
    }
}
loadUser()