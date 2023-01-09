const h1 = document.querySelector('h1');
const p = document.querySelector('p');
/* const p = document.querySelector('p');
const parrafo = document.querySelector('.parrafo');
const pid = document.querySelector('#pid'); */
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');


btn.addEventListener('click', btnOnclick);
/* 
console.log({
    h1,
    p,
    parrafo,
    pid,
    input,
});

h1.innerHTML = 'Nuevo titulo';
h1.innerText = 'Nuevo titulo';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'algo');
//h1.classList.add('nuevo');
//h1.classList.remove('nuevo');
input.value = "rrr";

const img = document.createElement('img');
img.setAttribute('src', 'https://i.annihil.us/u/prod/marvel/i/mg/c/f0/6169eecb78c4c/clean.jpg');
pid.append(img);
*/

function btnOnclick(){
    const suma = +input1.value + +input2.value;
    p.innerText = "Resultado: " + suma;
    
    
}