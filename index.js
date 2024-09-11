let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count++;
    countEl.textContent = count + " Overall Response";
}

function decrement() {
    count--;
    countEl.textContent = count + " Overall Response";
}
