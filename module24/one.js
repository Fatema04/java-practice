//tour of DOM

console.log('welcome');
console.log(document.body);

//document.getElementsByTagName

/*type1
    const liCollection = document.getElementsByTagName('li');
     console.log(liCollection);

type2
    const liCollection = document.getElementsByTagName('li');
    for (const li of liCollection) {
        console.log(li);
        console.log(li.innerText);
    }
//document.getElementsByClassName        

    const classes = document.getElementsByClassName('greet');
    console.log(classes)

//document.querySelectorAll
   
      const allLi = document.querySelectorAll('.container');

    for (const li of allLi) {
        console.log(li);
    }
    
//change color / background color by getElementById   
    
    document.getElementById('first').style.color='red'

    document.getElementById('first').styles.backgroundColor='green'

    //get.ATTRIBUTE

const  title = document.getElementById('first')

title.getAttribute('id')  

    
//add class
title.classList.add('bg')
title.classList

//remove class
    title.classList.remove('bg')
    title.classList


  //get class by index
   document.getElementsByClassName('container color bg-blue')[0]
   
   //get html code of a class

   document.getElementsByClassName('container color bg-blue')[0].innerHTML

   {output: **  /n = new line

    '\n        <h1 id="first">welcome to my dom</h1>
    \n        <ul>
    \n            <li class="greet">hi</li>\n            <li>hellow</li>
    \n            <li>how are you?</li>
    \n
    \n        </ul>
    \n  
}

//ADD IN HTML
   document.getElementsByClassName('container color bg-blue')[0].innerHTML='<h2> add</h2>'
    */

