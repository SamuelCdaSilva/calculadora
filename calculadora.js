const display = document.getElementById("display");
const numeros = document.querySelectorAll("[id*=tecla]"); // Achando parte de um nome que corresponde à "tecla".


const atualizarDisplay = (texto) => { display.textContent += texto;};

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
numeros.forEach (numero => numero.addEventListener('click',inserirNumero)); // forEach -> varre todos os elementos de um array