var nota = Number(prompt("Ingresá una nota del 0 al 10"));
if (isNaN(nota)) {
  alert("Introducí un número válido");
} else if (nota < 0 || nota > 10) {
  alert("Número erróneo");
} else if (nota <= 2) {
  alert("Muy deficiente");
} else if (nota <= 4) {
  alert("Insuficiente");
} else if (nota <= 6) {
  alert("Suficiente");
} else if (nota == 7) {
  alert("Bien");
} else if (nota <= 9) {
  alert("Notable");
} else {
  alert("Sobresaliente");
}