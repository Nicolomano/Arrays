const nombres =[];
let cantidad = 7;


while (nombres.length != cantidad) {
    let entrada = prompt("ingrese nombre");
    nombres.push(entrada.toUpperCase());
}

alert(nombres.join(", "));