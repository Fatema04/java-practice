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

*/