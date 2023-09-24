// Variables, operadores y cuadros de diálogo
// En estas actividades se busca que se incorporen nociones básicas relativas a las declaraciones de variables, 

// 1. Crea un programa que pida al usuario dos números y muestre su suma en un `alert`.

alert("suma")
// Solicitar los números
let numOne = prompt("Ingrese un número")
let numTwo = prompt("Ingrese otro número")

// Convertir los números a integer
let numOneNum = parseInt(numOne)
let numTwoNum = parseInt(numTwo)

// Operar los números
let sum = numOneNum + numTwoNum

// Mostrar el resultado
alert(sum)

// 2. Pide al usuario dos números y muestra en un `alert` el resultado de restar el segundo número al primero.
alert("resta")
// Solicitar los números
let numThree = prompt("Ingrese un número")
let numFour = prompt("Ingrese otro número")

// Convertir los números a integer
let numThreeNum = parseInt(numThree)
let numFourNum = parseInt(numFour)

// Operar los números
let rest = numThreeNum - numFourNum

// Mostrar el resultado
alert(rest)

// 3. Pide al usuario dos números y muestra en un `alert` el resultado de multiplicar ambos números.
alert("multiplicación")
// Solicitar los números
let numFive = prompt("Ingrese un número")
let numSix = prompt("Ingrese otro número")

// Convertir los números a integer
let numFiveNum = parseInt(numFive)
let numSixNum = parseInt(numSix)

// Operar los números
let mult = numFiveNum * numSixNum

// Mostrar el resultado
alert(mult)

// 4. Pide al usuario dos números y muestra en un `alert` el resultado de dividir el primer número por el segundo.
alert("división")
// Solicitar los números
let numSeven = prompt("Ingrese un número")
let numEight = prompt("Ingrese otro número")

// Convertir los números a integer
let numSevenNum = parseInt(numSeven)
let numEightNum = parseInt(numEight)

// Operar los números
let div = numSevenNum / numEightNum

// Mostrar el resultado
alert(div)

// 5. Pide al usuario un número y muestra en la consola (`console.log`) su cuadrado. Averiguar pow()
alert("cuadrado")
// Solicitar los números
let numPow = prompt("ingrese un número")
//punto 10
alert(`El tipo de dato es ${typeof numPow}`)

// Convertir el número a integer
let numPowNum = parseInt(numPow)
// Operar y mostrar el resultado en consola
console.log(numPowNum ** 2)

// 6. Crea un programa que pida al usuario su nombre mediante un `prompt` y luego muestre un mensaje de bienvenida en la consola (`console.log`).
alert("solicitar nombre")
let userName = prompt("escriba su nombre")
//punto 10
alert(`El tipo de dato es ${typeof userName}`)
//mensaje
console.log("¡Hola " + userName + "! ¡Es un placer tenerte aquí!")

// 7. Crea un programa que solicite dos números y muestra en la consola (`console.log`) el resultado de la suma, la resta, la multiplicación y la división, cada una en una línea separada.
alert("operciones + - * /")
// Solicitar los números
let numNine = prompt("Ingrese un número")
let numTen = prompt("Ingrese otro número")

// Convertir los números a integer
let numNineNum = parseInt(numNine)
let numTenNum = parseInt(numTen)

// Operar los números
console.log(numNineNum + numTenNum)
console.log(numNineNum - numTenNum)
console.log(numNineNum * numTenNum)
console.log(numNineNum / numTenNum)

// 8. Hacer una variable que almacene un número par mayor a 10.
// Solicitar número
let numEleven = prompt("Ingrese un número par mayor a 10")

// Convertir número a integer
let numElevenNum = parseInt(numEleven)

// Comprobar si el número cumple las condiciones
if (numElevenNum % 2 === 0 && numElevenNum > 10) {
    console.log(numElevenNum)
} else {
    console.log("El número ingresado no es par o mayor a 10")
}

// 9. Hacer una variable que almacene un numero impar menor a 100.
// Solicitar número
let numTwelve = prompt("Ingrese un número impar menor a 100")

// Convertir número a integer
let numTwelveNum = parseInt(numTwelve)

// Comprobar si el número cumple las condiciones
if (numTwelveNum % 2 === 1 && numTwelveNum > 10) {
    console.log(numTwelveNum)
} else {
    console.log("El número ingresado no es impar o menor a 100")
}

// 10. Coteje el tipo de dato del punto 5 y 6 y un alert para cada dato visualizar la respuesta incluída en la siguiente frase: `El tipo de dato es ${ hacer operación aquí }`

// 11. Declara dos variables: admin y name. Asigna el valor "John" a name. Copia el valor de name a admin. Muestra el valor de admin usando alert.

let admin

let name = "Jhon"

admin = name

alert(admin)

// 12. Crea una variable con el nombre de nuestro planeta. ¿Cómo nombrarías a dicha variable?

let planetName = "Tierra"

// 13. Crea una variable para almacenar el nombre del usuario actual de un sitio web. ¿Cómo nombrarías a dicha variable?

let currentUserName

// 14. Evaluar si los nombres de todas las variables anteriores están hechos con el formato camelCase y si sus identificadores son apropiados para expresar su contenido. Si tenemos nombres como numero1, numero2, buscar generar variables que reflejen con mayor certeza su contenido.

// 15. A través de un confirm, pregunte al usuario si quiere iniciar la descarga del archivo resumen.pdf. Guardar el resultado en una variable.

const downloadConfirmation = confirm("Quiere iniciar la descarga del archivo resumen.pdf")
console.log(downloadConfirmation)

// 16. Corrige el siguiente código:
// var fechaDeCumpleanios = "20/09/1990"
// let PASSWORD = "sSs34adFF123"
// const edad;
// var nombredeusuario = "destroyer999"

const fechaDeCumpleanios = "20/09/1990"
let password = "sSs34adFF123"
const edad = 33
let nombreDeUsuario = "destroyer999"

// 17. Genere una variable llamada edadDelUsuario y asigne un valor entre los 25 y 35. Reasigne su valor 5 veces, sumando 1 en interacción. A través de un console.log visualice el siguiente mensaje: "El usuario de edad inicial: ${ edad del usuario al delcarar la primera variable }, luego de cinco años ahora tiene ${ último valor reasignado }"

const edadDelUsuario = 34

let edadDelUsuarioMasCinco = edadDelUsuario

for (let i = 0; i < 5; i++) {
  edadDelUsuarioMasCinco++;
}

console.log(`El usuario de edad inicial: ${edadDelUsuario}, luego de cinco años ahora tiene ${edadDelUsuarioMasCinco}`)

// 19. Declare en una variable un valor que no quieras que se reasigne nunca acerca de algún gusto que tengas. Visualice en consola: `Siempre ${ valor } va a gustarme`
const valor = "la música"
console.log(`Siempre ${ valor } va a gustarme`)

// 20. Del siguiente caso, defina cuál de los dos procedimientos es de reasignación o asignación:


// let edad;
//Reasignación:
// edad = 100; 

//asignación:
// const fraseAlegóricaDeLaEdad = "Estoy cansado viejo"