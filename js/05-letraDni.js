var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
var num = Number(prompt("Ingresá tu número de DNI"));
if (isNaN(num)) {
  alert("Eso no es un número válido");
} else {
  alert("La letra es: " + letras[num % 23]);
}