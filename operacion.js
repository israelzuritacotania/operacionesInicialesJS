function Bienvenido(e){
    
    alert("Bienvenido a la practica 4 :)"); 
}

Bienvenido();



let buttonResta = document.getElementById('resta');
let buttonMultiplicar = document.getElementById('multiplicar');
let buttonPotencia = document.getElementById('potencia');
let formulario = document.getElementById('formulario');

buttonResta.style.backgroundColor="tomato";
buttonMultiplicar.style.backgroundColor="green";
buttonMultiplicar.style.width="33%";
buttonPotencia.style.backgroundColor="black";
formulario.classList.add("datos");

buttonResta.addEventListener("click", restar);
buttonMultiplicar.addEventListener("click",multiplicar);
buttonPotencia.addEventListener("click", potencia)


buttonResta.addEventListener("mouseover", function() {
    buttonResta.style.backgroundColor = "dodgerblue";
  });

  buttonResta.addEventListener("mouseout", function() {
    buttonResta.style.backgroundColor = "tomato"; 
  });


  buttonMultiplicar.addEventListener("mouseover", function() {
    buttonMultiplicar.style.backgroundColor = "dodgerblue";
  });

  buttonMultiplicar.addEventListener("mouseout", function() {
    buttonMultiplicar.style.backgroundColor = "green"; 
  });


  buttonPotencia.addEventListener("mouseover", function() {
    buttonPotencia.style.backgroundColor = "dodgerblue";
  });

  buttonPotencia.addEventListener("mouseout", function() {
    buttonPotencia.style.backgroundColor = "black";
  });

const tiempoProcesamiento = 700;

let mensaje=document.createElement("p");

let mensajeError="ERROR, DEBE LLENAR TODOS LOS DATOS PARA REALIZAR EL CÁLCULO";


function restar(event) {
    event.preventDefault();
    mensaje.classList.remove("error");
    mensaje.classList.add("p");
    mensaje.innerText=("Calculando espere por favor...")
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if (num1 == "" || num2 == "") {
        setTimeout(() => {
            mensaje.innerText=mensajeError;
            mensaje.classList.add("error","p");
          }, tiempoProcesamiento-200);

    } else {
        var resultado = num1 - num2;
        setTimeout(() => {
            mensaje.innerText="El resultado de la resta es: " + resultado;
            mensaje.classList.remove("error");
            mensaje.classList.add("p");
          }, tiempoProcesamiento);

    }
}

function multiplicar(event) {
    event.preventDefault();
    mensaje.classList.remove("error");
    mensaje.classList.add("p");
    mensaje.innerText=("Calculando espere por favor...")
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if (num1 == "" || num2 == "") {
        setTimeout(() => {
            mensaje.innerText=mensajeError;
            mensaje.classList.add("error","p");
          }, tiempoProcesamiento-200);

    } else {
        var resultado = num1 * num2;

        setTimeout(() => {
            mensaje.innerText="El resultado de la multiplicación es: " + resultado;
            mensaje.classList.remove("error");
            mensaje.classList.add("p");
          }, tiempoProcesamiento);

        

    }
}

function potencia(event) {
    event.preventDefault();
    mensaje.classList.remove("error");
    mensaje.classList.add("p");
    mensaje.innerText=("Calculando espere por favor...")
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    if (num1 == "" || num2 == "") {
        setTimeout(() => {
            mensaje.innerText=mensajeError;
            mensaje.classList.add("error","p");
          }, tiempoProcesamiento-200);

    } else {
        var resultado = Math.pow(num1, num2);

        setTimeout(() => {
            mensaje.innerText="El resultado de la potencia es: " + resultado;
            mensaje.classList.remove("error");
            mensaje.classList.add("p");
          }, tiempoProcesamiento);

        
        
    }
}


formulario.appendChild(mensaje);