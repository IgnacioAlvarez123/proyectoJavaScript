function hamburguesas(selector){
  switch (selector){
    case "1":
      return "Usted a elegido la hamburguesa simple";
      case "2":
      return "Usted a elegido la hamburguesa doble";
      case "3":
      return "Usted a elegido la hamburguesa triple";
    default:
      return "opcion no encontrada."
}
}
let selector

while(selector != "ESC"){
selector = (prompt("Ingrese la opcion '1' si quiere una hamburguesa simple. '2' Si quiere una hamburguesa doble. '3' si quiere una hamburguesa triple."));
if (selector != "ESC"){
alert(hamburguesas(selector))
}
}

