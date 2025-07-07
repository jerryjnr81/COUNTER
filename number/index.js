let learnCounting = document.getElementById("count")
let increaseButton = document.getElementById("decrease")
let decreaseButton = document.getElementById("increase")
let resetButton = document.getElementById("reset")

let count = 0;

function counter() {
    learnCounting.textContent = count;
}

decreaseButton.addEventListener("click", () => {
    count--;
    if (count <0) {
        count = 0;
    }
    counter();
});

increaseButton.addEventListener("click", () => {
    count++;
    counter();
});


resetButton.addEventListener("click", () => {
    count = 0;
    counter();
});


increaseButton.addEventListener("click", function() {
    let count = count.textcontent
})