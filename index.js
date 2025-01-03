let countEl= document.getElementById('counter')
let saveBtn = document.getElementById('save-btn')
let saveEl = document.getElementById('saveEl')

let count = 0
function increment() {
    count += 1
    countEl.innerText = count
}
 
function save() {
    let new_var = count + " - "
    saveEl.textContent += new_var
    countEl.textContent = 0
    count = 0
}

//PRAC1
// let firstName = "Anyuon"
// let lastName = "Wang"

// let fullName = firstName + " " + lastName
// console.log(fullName)
// function logsOut() {
//     console.log(firstName + " " + lastName + " logged out")
// }

// logsOut()
// let myPoints = 3

// function add3Points() {
//     myPoints += 3
//     console.log(myPoints)
// }

// function remove1Point() {
//     myPoints -= 1
//     console.log(myPoints)
// }

// add3Points()
// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// let errorMessage = document.getElementById('error')

// function Purchase() {
//     errorMessage.textContent = "Something went wrong"
// }

//CALCULATOR CHALLENGE
let res = document.getElementById('result')
num1 = 6
num2 = 8
function add() {
    let addition = num1 + num2
    res.textContent += addition
    res = 0
}
function sub() {
    let subtraction = num1 - num2
    res.textContent += subtraction
    res = 0
}
function mult() {
    let multiplication = num1 * num2
    res.textContent += multiplication
    res = 0
}
function div() {
    let division = num1 / num2
    res.textContent += division
    res = 0
}