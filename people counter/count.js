 
let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let saveNum = count + " - "
    saveEl.textContent += saveNum
    countEl.textContent = 0
    count = 0
}

console.log("Let's count people on the subway!")

