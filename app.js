let numeroSecreto = 0;
let intentos= 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
   if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1)? "intento": "intentos"}`);
    document.getElementById("reiniciar").removeAttribute("disabled")
   } else {
    if(numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento("p","El número secreto es menor");
    } else {
        asignarTextoElemento("p","El número secreto es mayor");
    }
    intentos++;
    limpiarCaja();
   }
   return;

}

function limpiarCaja(){
 document.querySelector("#valorUsuario").value ="";
    
}
function generarNumeroSecreto(params) {
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
console.log(numeroGenerado);
console.log(listaNumerosSorteados);

if(listaNumerosSorteados.length == numeroMaximo){
    asignarTextoElemento("p","ya se sortearon todos los números posibles")

} else{

if(listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();

} else{
    listaNumerosSorteados.push(numeroGenerado)
    return numeroGenerado;

}
}

}
function condicionesIniciales (){
asignarTextoElemento("h1","juego del número secreto");
asignarTextoElemento("p",`Escoje un número del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos = 1;
}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true")


}

condicionesIniciales();