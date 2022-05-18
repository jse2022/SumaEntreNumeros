import "./styles.css";
function sumarNumeros(primerNumero: number, segundoNumero: number) {
  let sumaDeNumeros = 0;
  for (let x = primerNumero; x <= segundoNumero; x++) {
    sumaDeNumeros = sumaDeNumeros + x;
    console.log(x);
  }
  console.log("Suma total: " + sumaDeNumeros);
}

let primerNumeroEntero = Number(prompt("Ingrese un numero entero"));
let segundoNumeroEntero = Number(prompt("Ingrese el segundo numero entero"));

if (primerNumeroEntero >= 0 && segundoNumeroEntero >= 0) {
  if (primerNumeroEntero < segundoNumeroEntero) {
    sumarNumeros(primerNumeroEntero, segundoNumeroEntero);
  } else {
    alert(`el primer numero debe ser menor que el segundo`);
  }
} else {
  alert(`Uno de los numeros ingresados es menor que 0`);
}
