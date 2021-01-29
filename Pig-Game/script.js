'use strict';
// Выбираемые элементы
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

// Констатны управления кнопками

const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--New');
const diceEl = document.querySelector('.dice');
// Начальные условия
score0El.textContent = 0;
score1El.textContent = 0;
current0El.textContent = 0;
current1El.textContent = 0;
diceEl.classList.add('hidden');
let playing;

// Функционал вращения кубика

btnRoll.addEventListener('click', function () {
  if (playing) {
    //Генерация рандома кубика
    const dice = Math.trunc(Math.random() * 6) + 1;
    // Вывод dice на экран
    diceEl.classList.remove('hidden');
    dice.src = `dice-${dice}.png`;
  }
});
// Генерация рандома кубика

// Вывод результата

// Проверка не выпала ли 1 и если да, то переход хода
