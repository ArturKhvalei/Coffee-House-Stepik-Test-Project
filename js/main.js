const userSurname = document.querySelector('#usersurname');
const userName = document.querySelector('#username');

const goodsElements = document.querySelectorAll('[name="goods"]');
const countElements = document.querySelectorAll('[name="count"]');

const btn = document.querySelector(".btn");
const resultElem = document.querySelector(".sum");

const total = [];
const selectedGoods = [];

function sum(value, count, i) {
  total[i] = value * count;
  resultElem.innerHTML = total.reduce((counter, element) => counter + element, 0);
};

goodsElements.forEach((element, i) => {
  selectedGoods[i] = parseInt(element.value) || 0;
  total[i] = 0;

  element.addEventListener("change", function () {
    if (element.checked) {
      countElements[i].value = 1;
      sum(selectedGoods[i], 1, i);
    } else {
      countElements[i].value = 0;
      sum(selectedGoods[i], 0, i);
    }
  });
})

countElements.forEach((element, i) => {
  element.addEventListener("change", function () {
    const subTotal = parseInt(element.value);
    countElements[i] = subTotal;
    sum(selectedGoods[i], subTotal, i);

    if (subTotal <= 0) {
      alert("Пожалуйста, введите значение больше нуля");
      countElements[i].value = 1;
      sum(selectedGoods[i], 1, i);
    }
  });
});