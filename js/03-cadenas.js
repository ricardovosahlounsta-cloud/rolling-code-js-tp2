var resultado = "";
var cadena = prompt("Ingresá una cadena de texto");
while (cadena !== null) {
  resultado += cadena + "-";
  cadena = prompt("Ingresá otra cadena o cancelá");
}
alert(resultado);