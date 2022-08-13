/* ---------------------onclick type1------------------------------/

//<button onclick="document.body.style.backgroundColor='yellow'">touch</button>

//--------------------------onclick type2---------------------------------//

<button onclick="makeRed()">Make me red</button>   //in html
<script>
        function makeRed() {
            document.body.style.backgroundColor = 'red';
        }
    </script>
//------------------------onclick type3-----------------------------------//

<button id="blue-button">Make me blue</button>
<script>
        const blueButton = document.getElementById('blue-button');
        blueButton.onclick = makeBlue;
        function makeBlue() {
            document.body.style.backgroundColor = 'blue';
        }
    </script>

//-----------------------addEventListener---------------------------------//

 <button id="pink-button">Make me pink</button>

 const pinkButton = document.getElementById('pink-button');
        pinkButton.addEventListener('click', makePink)

        function makePink() {
            document.body.style.backgroundColor = 'pink';
        }

//-----------------------addEventListener---------------------------------//

 <button id="green-button">Make me green</button>

 const greenButton = document.getElementById('green-button');
        greenButton.addEventListener('click', function makeGreen() {
            document.body.style.backgroundColor = 'green';
        })

//-----------------------addEventListener---------------------------------//

 <button id="tomato-button">Make me tomato</button>

 document.getElementById('tomato-button').addEventListener('click', function () {
            document.body.style.backgroundColor = 'tomato';
        })

*/