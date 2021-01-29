'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelector('.close-modal'); // крестик закрытия
const btnsOpenModal = document.querySelectorAll('.show-modal'); // это все кнопки 3 шт
console.log(btnsOpenModal);

const OpenModal = function () {
  modal.classList.remove('hidden'); // Свойство classList возвращает псевдомассив DOMTokenList, содержащий все классы элемента.
  overlay.classList.remove('hidden');
};

const CloseModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', OpenModal);

btnsCloseModal.addEventListener('click', CloseModal);
overlay.addEventListener('click', CloseModal);

document.addEventListener('keydown', function(e){
  console.log ('Knopka najata');
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      CloseModal();
    }
  })




// // Действия 
// const info = document.querySelector('.modal');
// const podlogka = document.querySelector('.overlay');
// const knopkiOtkr = document.querySelectorAll('.show-modal');
// const knopkaZakr = document.querySelector('.close-modal');


// for (let i=0;i<knopkiOtkr.length; i++ )
//   knopkiOtkr[i].addEventListener('click', function(){
//     info.classList.remove('hidden');
//     podlogka.classList.remove('hidden');
//   });

// knopkaZakr.addEventListener('click', function(){
//   info.classList.add('hidden');
//   podlogka.classList.add('hidden');
// })

