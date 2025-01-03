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
