let nombre   = "Homero";
let apellido = "Simpsons";
let edad     =  39;
console.log(nombre);
console.log(apellido);
console.log(edad);

const ciudad1 = "Springfield";  
const ciudad2 = "Shelbyville";  
const ciudad3 = "Capital City";  
const ciudad4 = "Cypress Creek";  
const ciudad5 = "Ogdenville";  
console.log(ciudad1);
console.log(ciudad2);
console.log(ciudad3);
console.log(ciudad4);
console.log(ciudad5);

let persona    = "BART SIMPSON";
let domicilio  = "742 EVERGREEN";
let pais       = "USA";
let nacimiento = "02-11-70";
const codigo   = "B47U89RE243";
let carnet = "Codigo: "+codigo+" "+
             "Nombre: "+persona+" "+
             "Pais: "+pais+" "+
             "Nacimiento: "+nacimiento+" "+
             "Domicilio: "+domicilio;
console.log(carnet);


let precio = parseFloat(prompt('INGRESAR PRECIO'));
let descuento20 = precio - (precio  * 0.2);
let descuento30 = precio - (precio  * 0.3);
console.log(descuento20);
console.log(descuento30);


let entrada4 = parseFloat(prompt("INGRESAR UN NUMERO"));
if ((entrada4 >= 0) && (entrada4 <= 1000)) {
    alert("PRESUPUESTO BAJO");
} else if ((entrada4 >= 1001) && (entrada4 <= 3000)) {
    alert("PRESUPUESTO MEDIO");
} else if (entrada4 > 3000) {
    alert("PRESUPUESTO ALTO");
}
else {
    alert("ERROR");
}

const lado = prompt("Ingrese una frase")
const num = prompt("Ingrese un número")

for (i = 1; i < 5; i++) {
    console.log(`lado ${i}: ${lado}`)
}