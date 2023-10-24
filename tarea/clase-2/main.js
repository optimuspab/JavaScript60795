// 1
console.log("consigna 1")
let stateSemaforo = "saraza"

if (stateSemaforo === "red" || stateSemaforo === "yellow") {
    console.log(false)
} else if (stateSemaforo === "green") {
    console.log(true)
} else {
    console.log("Error: color de semáforo inválido")
}

console.log("consigna 1 - otro método")
let semaforo = "Verde"; // Puedes cambiar esto para probar diferentes colores

switch (semaforo.toLowerCase()) {
    case "rojo":
        console.log(false);
        break;
    case "verde":
        console.log(true);
        break;
    case "amarillo":
        console.log(false);
        break;
    default:
        console.log("Error: color de semáforo inválido");
}

// 2
console.log("consigna 2")
let letter = "f"
if ("aeiou".includes(letter.toLowerCase())) {
    console.log(false)
} else{
    console.log(false) 
}

//3

console.log("consigna 3")
let letterConsonant = "f"
if ("bcdfghjklmnpqrstvwxyz".includes(letterConsonant.toLowerCase())) {
    console.log(true)
} else{
    console.log(false) 
}

//4

let pasoTests = false
let tieneMultasImpagas = false
let pagoImpuestos = true

if (pasoTests && pagoImpuestos === true && tieneMultasImpagas === false) {
    console.log("habilitado")
}  else {
    console.log("no habilitado")
}

// otro método
console.log("consigna 4 - otro método")

if (pasoTests === true) {
    if (tieneMultasImpagas === false) {
        if (pagoImpuestos === true) {
            console.log("habilitado")
        } else {
            console.log("no habilitado")
        }
    } else {
        console.log("no habilitado")
    }
} else {
    console.log("no habilitado")
}

//5
console.log("consigna 5")
let num = 3

if (num % 2 === 0) {
    console.log("Es par")
} else {
    console.log("Es impar")
}
console.log("consigna 5 - otro método")
const mensaje = num % 2 === 0 ? "Es par" : "Es impar";
console.log(mensaje);

//6 y 7
console.log("consigna 6 y 7")

let isNegativeOrPositive = 2
if (isNegativeOrPositive >= 1) {
    console.log("Es positivo")
} else if (isNegativeOrPositive === 0){
    alert('Hello');
}
else {
    console.log("Es negativo")
}

//8
console.log("consigna 8")
let question = prompt("¿Cuál es el nombre “oficial” de JavaScript?")

if (question.toLowerCase() === "ecmascript") {
    console.log("¡Correcto!")
} else {
    console.log("¿No lo sabes? ¡ECMAScript!")
}

//9
console.log("consigna 9")
let nmbr = prompt("Ingrese un número");
nmbr = parseInt(nmbr); // Convertir a número

if (!isNaN(nmbr)) {
    if (nmbr > 0) {
        alert(1);
    } else if (nmbr < 0) {
        alert(-1);
    } else {
        alert(0);
    }
} else {
    alert("Error, el valor ingresado no es un número");
}

//10
console.log("consigna 10")
let num1 = prompt("Ingrese un número");
let num2 = prompt("Ingrese un número");
num1 = parseInt(num1);
num2 = parseInt(num2);

if (num1 > num2) {
    alert(num1)
} else if (num1 == num2) {
    alert("los números son iguales")
} else {
    alert(num2)
}

//11
console.log("consigna 11")
let nmbr1 = prompt("Ingrese un número");
let nmbr2 = prompt("Ingrese un número");
let nmbr3 = prompt("Ingrese un número");

nmbr1 = parseInt(nmbr1)
nmbr2 = parseInt(nmbr2)
nmbr3 = parseInt(nmbr3)

if (!isNaN(nmbr1) && !isNaN(nmbr2) && !isNaN(nmbr3)) {

    let suma = nmbr1 + nmbr2 + nmbr3;

    let resta = nmbr1 - nmbr2 - nmbr3;

    let producto = nmbr1 * nmbr2 * nmbr3;

    let division = nmbr1 / nmbr2 / nmbr3;

    alert("La suma de los tres números es: " + suma);

    alert("La resta de los tres números es: " + resta);

    alert("La multiplicación de los tres números es: " + producto);

    alert("La división de los tres números es: " + division);

} else {
    alert("Por favor, ingrese números válidos.");
}

//12
console.log("consigna 12")
const username = prompt("ingrese su usuario")
const password = prompt("ingrese su contraseña")

const usuario = "caracol"
const wordpass = "saraza"

if (username === usuario && password === wordpass) {
    console.log("acceso ok")
} else {
    console.log("el usuario / contraseña ingresado es incorrecto")
}

//13
console.log("consigna 13")
let cost = prompt("Ingrese el precio del producto");
let age = prompt("Ingrese su edad");
cost = parseFloat(cost);
age = parseInt(age);

if (!isNaN(age) && !isNaN(cost)) {
    if (age > 65) {
        let descuento = (cost * 10) / 100; 
        let precioFinal = cost - descuento;
        alert("Ud. tiene un 10% de descuento, el costo final es de: " + precioFinal.toFixed(2));
    } else {
        alert("Ud. no tiene descuento.");
    }
} else {
    alert("La edad ingresada o el precio no son válidos");
}

//14
console.log("consigna 14")
const pie = 3.281
let metros = prompt("¿Cuantos metros va a calcular?")
metros = parseInt(metros)
alert("En total de metros equivale a "+(pie*metros)+" pies.")

//15
console.log("consigna 15")
const friend1 = prompt("Ingrese su nombre");
let age1 = prompt("Ingrese su edad");
const friend2 = prompt("Ingrese el nombre de su amigo");
let age2 = prompt("Ingrese la edad de su amigo");
age1 = parseInt(age1);
age2 = parseInt(age2);

if (age1 > age2) {
    alert(friend1 + " es mayor que " + friend2)
} else if (age1 == age2) {
    alert(friend1 + " y " + friend2 + " tienen la misma edad")
} else {
    alert(friend2 + " es mayor que " + friend1)
}

// 16
console.log("consigna 16")
let price = prompt("Ingrese el precio del producto");
let discount = prompt("Ingrese el descuento");
price = parseFloat(price);
discount = parseInt(discount);

if (!isNaN(price) && !isNaN(discount)) {
    let descuento = (discount / 100); // Dividir por 100 para obtener el valor decimal del descuento
    let finalPrice = price - (price * descuento); // Aplicar el descuento al precio original
    alert("El precio final con descuento es de: " + finalPrice.toFixed(2));
} else {
    alert("El precio o descuento ingresados no son válidos");
}

//17
console.log("consigna 17")
const dayOfTheWeek = prompt("Ingrese un número del 1 al 7")

switch (dayOfTheWeek) {
    case "1":
        alert("Lunes");
        break;
    case "2":
        alert("Martes");
        break;
    case "3":
        alert("Miércoles");
        break;
    case "4":
        alert("Jueves");
        break;
    case "5":
        alert("Viernes");
        break;
    case "6":
        alert("Sábado");
        break;
    case "7":
        alert("Domingo");
        break;
    default:
        alert("El número ingresado no es correcto")
}

//18
console.log("consigna 18")
let costo = prompt("Ingrese el precio del producto");
let rebaja = prompt("Ingrese el descuento");
costo = parseFloat(costo);
rebaja = parseInt(rebaja);

if (!isNaN(costo) && !isNaN(rebaja)) {
    if (rebaja > 50) {
        alert("Descuento demasiado grande, ¡intente nuevamente!")
    } else {
        let descuento = (rebaja / 100); // Dividir por 100 para obtener el valor decimal del descuento
        let finalPrice = costo - (costo * descuento); // Aplicar el descuento al precio original
        alert("El precio final con descuento es de: " + finalPrice.toFixed(2));
    }
} else {
    alert("El precio o descuento ingresados no son válidos");
}

//versión optimizada
console.log("consigna 18 - otro método")
if (!isNaN(costo) && !isNaN(rebaja)) {
    if (rebaja > 50) {
        alert("Descuento demasiado grande, ¡intente nuevamente!");
    } else {
        let finalPrice = costo * (1 - rebaja / 100); // Aplicar el descuento directamente en la fórmula
        alert("El precio final con descuento es de: " + finalPrice.toFixed(2));
    }
} else {
    alert("El precio o descuento ingresados no son válidos");
}

//19
console.log("consigna 19")
let year = parseInt(prompt("Ingrese un año"), 10);

if (!isNaN(year)) {
    if (year % 400 === 0) {
        alert("El año " + year + " es bisiesto");
    } else if (year % 4 === 0 && year % 100 !== 0) {
        alert("El año " + year + " es bisiesto");
    } else {
        alert("El año " + year + " no es bisiesto");
    }
} else {
    alert("El año ingresado no es correcto");
}
//20
console.log("consigna 20")
let calification = parseInt(prompt("Ingrese su calificación"), 10);

let calificationLetter;

switch (true) {
    case (calification >= 90 && calification <= 100):
        calificationLetter = "A";
        break;
    case (calification >= 80 && calification < 90):
        calificationLetter = "B";
        break;
    case (calification >= 70 && calification < 80):
        calificationLetter = "C";
        break;
    case (calification >= 60 && calification < 70):
        calificationLetter = "D";
        break;
    case (calification < 60 && calification >= 0):
        calificationLetter = "F";
        break;
    default:
        alert("La calificación ingresada no es válida");
        break;
}

alert("La calificación equivalente es: " + calificationLetter);

console.log("consigna 20 - otro método")

if (calification >= 90 && calification <= 100) {
    calificationLetter = "A";
} else if (calification >= 80 && calification < 90) {
    calificationLetter = "B";
} else if (calification >= 70 && calification < 80) {
    calificationLetter = "C";
} else if (calification >= 60 && calification < 70) {
    calificationLetter = "D";
} else if (calification < 60 && calification >= 0) {
    calificationLetter = "F";
} else {
    alert("La calificación ingresada no es válida");
}

alert("La calificación equivalente es: " + calificationLetter);


//21
console.log("consigna 21")
let primeNumber = parseInt(prompt("Ingrese un número"), 10);

if (!isNaN(primeNumber)) {
    if (primeNumber <= 1) {
        alert("Los números menores o iguales a 1 no son primos");
    } else {
        let esPrimo = true;
        for (let i = 2; i < primeNumber; i++) {
            if (primeNumber % i === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            alert("El " + primeNumber + " es primo");
        } else {
            alert("El " + primeNumber + " no es primo");
        }
    }
} else {
    alert("El número ingresado no es válido");
}

//22
console.log("consigna 22")
const mes = prompt("Ingrese un mes").toLowerCase();
const meses31 = ["enero", "marzo", "mayo", "julio", "agosto", "octubre", "diciembre"];
const meses30 = ["abril", "junio", "noviembre"];
const febrero = "febrero";

if (meses31.includes(mes)) {
    alert("31 días");
} else if (meses30.includes(mes)) {
    alert("30 días");
} else if (mes === febrero) {
    alert("Febrero tiene 28 días. Si el año es bisiesto, febrero tiene 29 días.");
} else {
    alert("El mes ingresado no es válido");
}

//23
console.log("consigna 23")
//$1 por kilogramo de peso por cada 100 kilómetros de distancia. Muestra el costo de envío en un `alert`.
let weight = parseInt(prompt("Ingrese el peso del paquete"), 10);
let distance = parseInt(prompt("Ingrese la distancia"), 10);
if (!isNaN(weight) && !isNaN(distance)) {
    alert("el costo del envío es de " + (distance / 100) * weight)
} else {
    alert("El peso o distancia ingresado no es válido")
}


//24
console.log("consigna 24")
//ingrese una temperatura en grados Fahrenheit y conviértela a grados Celsius
//Temperature in degrees Celsius (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9
let fahrenheit = parseInt(prompt("Ingrese la temperatura en Fahrenheit"), 10);
if (!isNaN(fahrenheit)) {
    alert("La temperatura en Celsius es " + ((fahrenheit - 32)*5/9))
} else {
    alert("No ha ingresado una temperatura válida")
}
