// Functions
function add(){
    let num1 = parseInt(document.getElementById("num1").value) // Sets variable and converts to integer
    let num2 = parseInt(document.getElementById("num2").value) // Also gives id value of "num2" for HTML to reference
    let ans = num1 + num2 // Sets ans to the sum of num1 and num2
    displayAnswer(ans) // Runs the displayAnswer function on the value held in (ans) 
}

function sub(){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let ans = num1 - num2
    displayAnswer(ans)
}

function mult(){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let ans = num1 * num2
    displayAnswer(ans)
}

function div(){
    let num1 = parseInt(document.getElementById("num1").value)
    let num2 = parseInt(document.getElementById("num2").value)
    let ans = num1 / num2
    displayAnswer(ans)
}

function AC(){
    let ans = ''
    displayAnswer(ans)
}

function displayAnswer(ans) {
    document.getElementById("ans").value = ans // Gives ans an id value of "ans" for HTML to reference
}
