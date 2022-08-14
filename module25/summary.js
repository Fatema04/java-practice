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

//-----------------------EVENT HANDLER---------------------------------//

/**TYPE 1
 * 
 * <button onclick="handleOnClick()">handle</button>
 * 
 *  <script>
        function handleOnClick() {
            console.log('button clicked')
        }
    </script>

 type 2

  <h3 id="handle-status">default text</h3>
    <button onclick="handleOnClick()">handle</button>
    <script>

        function handleOnClick() {
            const handleStatus = document.getElementById('handle-status');
            handleStatus.innerText = 'thank you';
        }
   
    </script>


//-----------------------------INPUT BOX---------------------------------//

  <p id="default-text">ENTER A NAME</p>
    <input id="input-field" type="text">
    <button id="update-button">Update</button>


 <script>
        document.getElementById('update-button').addEventListener('click', function () {

            const inputField = document.getElementById('input-field');
            const inputText = inputField.value;

            const p = document.getElementById('default-text');
            p.innerText = inputText;
            inputField.value = '';
        })
    </script>










 */