"use strict"

var firstValue = "0"
var secondValue = "0"
var currentOperation = "none"
var clearNextTime = false

function buttonPress(b) {
    if (clearNextTime == true) {
        firstValue = 0
    }
    if (firstValue == 0) {
        firstValue = b
    } else {
        firstValue = firstValue + b
    }
    document.getElementById("display").innerHTML = firstValue
}

function resetAll() {
    firstValue = 0
    secondValue = 0
    currentOperation = 0
    clearNextTime = false
    document.getElementById("display").innerHTML = firstValue
}

function operationButton(o) {
    if (currentOperation == "none") {
        currentOperation = o
        //secondValue = [firstValue, firstValue = secondValue][0]
        secondValue = firstValue
        //document.getElementById("display").innerHTML = firstValue
    } else {
        finishOperation()
        currentOperation = o
        //secondValue = [firstValue, firstValue = secondValue][0]
        secondValue = firstValue
        //document.getElementById("display").innerHTML = firstValue
    }
    clearNextTime = true
}

function multiplyWithMinusOne() {
    firstValue = parseFloat(firstValue) * -1
    firstValue = firstValue.toString()
    document.getElementById("display").innerHTML = firstValue
}

function finishOperation() {
    if (currentOperation == "add") {
        firstValue = parseFloat(firstValue) + parseFloat(secondValue)
        firstValue = firstValue.toString()
        secondValue = "0"
        document.getElementById("display").innerHTML = firstValue
        currentOperation = "none"
    } else if (currentOperation == "subtract") {
        firstValue = parseFloat(secondValue) - parseFloat(firstValue)
        firstValue = firstValue.toString()
        secondValue = "0"
        document.getElementById("display").innerHTML = firstValue
        currentOperation = "none"
    } else if (currentOperation == "multiply") {
        firstValue = parseFloat(secondValue) * parseFloat(firstValue)
        firstValue = firstValue.toString()
        secondValue = "0"
        document.getElementById("display").innerHTML = firstValue
        currentOperation = "none"
    } else if (currentOperation == "divide") {
        firstValue = parseFloat(secondValue) / parseFloat(firstValue)
        firstValue = firstValue.toString()
        secondValue = "0"
        document.getElementById("display").innerHTML = firstValue
        currentOperation = "none"
    }
}

function deleteLast() {
    if (firstValue.length == 1 || firstValue.length == 0) {
        firstValue = "0"
        document.getElementById("display").innerHTML = firstValue
    } else {
        firstValue = firstValue.substring(0, firstValue.length - 1)
        document.getElementById("display").innerHTML = firstValue
    }
}