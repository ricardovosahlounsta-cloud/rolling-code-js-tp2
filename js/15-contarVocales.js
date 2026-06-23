var texto = prompt("Ingresá un texto");
var vocales = 0;
for (var i = 0; i < texto.length; i++) {
  if ("aeiouAEIOU".includes(texto[i])) {
    vocales++;
  }
}
alert("El texto tiene " + vocales + " vocales");