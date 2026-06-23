var resultado = "";
for (var i = 1; i <= 30; i++) {
  var linea = "";
  for (var j = 0; j < i; j++) {
    linea += i;
  }
  resultado += linea + "\n";
}
document.write("<pre>" + resultado + "</pre>");