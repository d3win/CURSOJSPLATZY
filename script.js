const h1 = document.querySelector('h1');
const form=document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const presultado = document.querySelector('#result');

form.addEventListener('submit',sumarInputValues);



function sumarInputValues(event)
{
    event.preventDefault();
//    event.preventDefault();

const sumaInputs=input1.value + input2.value;
presultado.innerText = "Resultado: "+ sumaInputs;
}