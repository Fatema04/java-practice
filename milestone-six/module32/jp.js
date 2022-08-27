console.log('clicked');

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
function displayPost(posts) {

    const postButton = document.getElementById('post');

    for (const post of posts) {
        console.log(post)
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
    
        <h4>${post.userId}</h4>
        <h5>${post.title}</h5>
        <p>${post.body}</p>
    
    `;
        postButton.appendChild(postDiv)


    }
}