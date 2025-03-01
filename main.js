const billInput = document.querySelector(".bill");
const tipInput = document.querySelector(".tip");
const button = document.querySelector(".btn");
const totalValue = document.querySelector(".total-value");

totalValue.textContent = 0;

button.addEventListener("click", function () {
  const bill = Number(billInput.value);
  const tip = Number(tipInput.value);
  const total = bill * (tip / 100) + bill;
  totalValue.textContent = total;
});
