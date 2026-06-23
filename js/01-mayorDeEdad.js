var edad = Number(prompt("Ingresá tu edad"));
if (isNaN(edad)) {
  alert("Eso no es un número válido");
} else if (edad >= 18) {
  alert("Ya podés conducir");
} else {
  alert("Todavía no podés conducir");
}