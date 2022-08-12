//Problem1 ----radianToDegree---


function radianToDegree(number) {

    if (isNaN(number)) { return 'Please enter a valid input!'; }

    return parseFloat((number * 180 / Math.PI).toFixed(2));

}

//Problem 2 -----isJavaScriptFile

function isJavaScriptFile(fileName) {

    const extension = fileName.split('.').pop();

    if (extension === 'js') {
        return true;
    }

    else { return false; }
}

