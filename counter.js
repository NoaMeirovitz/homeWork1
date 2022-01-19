const STARTING_COUNTER_DEFAULT = 0;

let counter = 0;

const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const count = document.getElementById("count");
const resetBtn = document.getElementById("reset");

plusBtn.addEventListener("click", up);
minusBtn.addEventListener("click", down);
resetBtn.addEventListener("click", reset);

function up() {
  count.innerHTML = ++counter;
  count.style.color = "green";
  zero();
}

function down() {
  negative();
  count.innerHTML = --counter;
  count.style.color = "crimson";
  zero();
}

function zero() {
  if (counter === 0) {
    count.style.color = "black";
  }
}

function negative() {
  if (counter <= 0) {
    counter = 1;
  }
}
function reset() {
  counter = STARTING_COUNTER_DEFAULT;
  count.innerHTML = counter;
  count.style.color = "black";
}
