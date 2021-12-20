// seletores por: tag, id, class

const header1 = document.querySelector('header'); // pega o primeiro elemento
// const header2 = document.getElementsByTagName('header'); // todos os headers

const main1 = document.querySelector('.principal'); // pega o primeiro
// const main2 = document.getElementsByClassName('principal'); // pega um array

const ul1 = document.querySelector('#planos'); // pega 1 só
// const ul2 = document.getElementById('planos'); // pega 1 só

// const liArray = document.querySelectorAll('li');

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

// const outraFuncao = () => {
//   console.log('teste');
// }

const excluirMes = () => {
  // console.log('funcao excluir mes'); 
  return (outraFuncao)
}

meses.forEach((mes) => {
  const novaLi = document.createElement('li');
  novaLi.innerText = mes;
  novaLi.className = 'mensal';
  novaLi.addEventListener('click', excluirMes)
  ul1.appendChild(novaLi);
})

const mesesElements = [];
const lisElements = document.querySelectorAll('li');
lisElements.forEach((li) => {
  mesesElements.push(li.innerText);
})

// console.log(mesesElements);
localStorage.setItem('meses', JSON.stringify(mesesElements));

const novoArray = JSON.parse(localStorage.getItem('meses'));
// console.log(Array.isArray(novoArray)); // sem o JSON.parse, fica como string