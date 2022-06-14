const userSurname = document.querySelector('#usersurname');
const userName = document.querySelector('#username');
const goodsElements = document.querySelectorAll('[name="goods"]');
const countElements = document.querySelectorAll('[name="count"]');

const btn = document.querySelector(".btn");
const resultElem = document.querySelector(".sum");

const totalGoods = [];
const prices = [];
const selectedGoods = [];

function sum(value, count, i) {
  totalGoods[i] = value * count;
  resultElem.innerHTML = totalGoods.reduce((counter, element) => counter + element, 0) + " р.";
};

goodsElements.forEach((element, i) => {
  prices[i] = parseInt(element.value) || 0;
  totalGoods[i] = 0;
  selectedGoods[i] = 0;

  element.addEventListener("change", function () {
    if (element.checked) {
      countElements[i].value = 1;
      sum(prices[i], 1, i);
      selectedGoods[i] = 1;
    } else {
      countElements[i].value = 0;
      sum(prices[i], 0, i);
      selectedGoods[i] = 0;
    }
  });
})

countElements.forEach((element, i) => {
  element.addEventListener("change", function () {
    const subtotalGoods = parseInt(element.value);
    countElements[i] = subtotalGoods;
    if (selectedGoods[i] === 1) {
      if (!Number.isNaN(subtotalGoods) && subtotalGoods >= 1 && Number.isInteger(subtotalGoods)) {
        sum(prices[i], subtotalGoods, i);
      } else {
        countElements[i].value = 1;
        alert("Пожалуйста, введите целое число больше нуля");
      }
    } else {
      sum(prices[i], 0, i);
      countElements[i].value = 0;
    }
  });
});

btn.addEventListener("click", function() {
  alert("Заказчик: " + userSurname.value + " " + userName.value +"\n" + "Итого: " + totalGoods.reduce((counter, element) => counter + element, 0) + " р.");
});