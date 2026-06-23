var suma = 0;
var num = prompt("Ingresá un número");
while (num !== null) {
  if (isNaN(num)) {
    alert("Eso no es un número válido");
  } else {
    suma += Number(num);
  }
  num = prompt("Ingresá otro número o cancelá");
}
alert("La suma total es: " + suma);