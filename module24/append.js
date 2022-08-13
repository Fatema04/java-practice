const birdlist = document.getElementById('ul-of-bird');
console.log(birdlist);
const li = document.createElement('li');
li.innerText = 'kakatua';
birdlist.appendChild(li);

//add section type 1

const mainContainer = document.getElementById('main-section');

const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = ('vegetables');
section.appendChild(h1);

const ul = document.createElement('ul');
section.appendChild(ul);

const li1 = document.createElement('li');
li1.innerText = 'coliflower';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'bringle';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'potato';
ul.appendChild(li3);
mainContainer.appendChild(section);

//add section type 2

const colorSection = document.createElement('section');
colorSection.innerHTML = `
<h1> Colors </h1>
<ul>
<li>black</li>
<li>green</li>
<li>blue</li>
</ul>
`
mainContainer.appendChild(colorSection);
