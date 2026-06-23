var texto = prompt("Ingresá un texto");
for (var i = 0; i < texto.length; i++) {
  if ("aeiouAEIOU".includes(texto[i])) {
    alert("La vocal '" + texto[i] + "' está en la posición " + i);
    break;
  }
}