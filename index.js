//document.getElementById("count").innerText = 5;

let saveEl = document.getElementById("saveEl")
let countEl = document.getElementById("countEl")
let count= 0;

function increment() {

    count += 1;
    countEl.textContent = count;
}

function save() {
     let countStr = count + " - ";
     saveEl.textContent += countStr;
     countEl.textContent = 0;
     count = 0;
}