const sections = document.querySelectorAll('section');
for (const section of sections) {
    console.log(section);
    section.style.border = '2px solid green';
    section.style.marginBottom = '10px';
    section.style.borderRadius = '15px';
    section.style.backgroundColor = 'skyblue';
    section.style.color = 'white';
}

const fruitContainer = document.getElementById('id-of-fruits');
fruitContainer.style.backgroundColor = 'purple';

const fruitContainers = document.getElementById('id-of-fruits');
fruitContainers.classList.add('text-large');
fruitContainers.classList.remove('text-large');



