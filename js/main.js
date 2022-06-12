const userSurname = document.querySelector('#usersurname');
const userName = document.querySelector('#username');

const goodsElements = document.querySelectorAll('[name="goods"]');
const countElements = document.querySelectorAll('[name="count"]');

const btn = document.querySelector(".btn");
const resultElem = document.querySelector(".sum");

let currentValue = 0;
let total = 0;

const countGoods = {};
const selectedGoods = {};

function sum(value, count) {
  if (value != 0 && count != 0) {
    currentValue = value * count;
    total += currentValue;
    resultElem.innerHTML = total;
  }
  else {
    total -= currentValue;
    resultElem.innerHTML = total;
  }
};

goodsElements.forEach((element, i) => {
  element.addEventListener("change", function () {
    if (element.checked) {
      countElements[i].value = 1;
      countGoods[i] = 1;
      selectedGoods[i] = parseInt(element.value);
      currentValue = selectedGoods[i] * countGoods[i];
      sum(selectedGoods[i], countGoods[i],);
    }
    else {
      currentValue = selectedGoods[i] * countGoods[i];
      selectedGoods[i] = 0;
      countElements[i].value = 0;
      countGoods[i] = 0;
      sum(selectedGoods[i], countGoods[i]);
    }
  });
})

countElements.forEach((element, i) => {
  element.addEventListener("change", function () {
    countGoods[i] = parseInt(element.value);
    if (countGoods[i] >= 0) {
      currentValue = selectedGoods[i] * countGoods[i];
      sum(selectedGoods[i], countGoods[i]);
    }
  });
});
