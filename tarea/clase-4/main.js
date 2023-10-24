//1
console.log("consigna 1")
function addresses (st, no, ap, zp, ct, cn) {
    return `La dirección que ha ingresado es: ${st} ${no} ${ap}, ${zp}, ${ct}, ${cn}`;
}

console.log(addresses("saraza","12","1","cp983","BA","ARG"));

//2
console.log("consigna 2")
function playList (plname,fsong,ssong,tsong) {
    return `Se ha creado la playlist: ${plname} con las canciones ${fsong} ${ssong}, ${tsong}`;
}

console.log(playList("lista del tujes","12","lalala","ojete"));

//3
console.log("consigna 3")
function minutesToSeconds(min) {
    min = parseInt(min);
    if (!isNaN(min)) {
        const seconds = min * 60;
        return `El resultado de la conversión de ${min} minutos a segundos es: ${seconds} segundos`;
    } else {
        return "Por favor, ingresa un número válido de minutos.";
    }
}

const resultMintoSec = minutesToSeconds(40);
console.log(resultMintoSec);

//4
console.log("consigna 4")
function daysToSeconds(days) {
    min = parseInt(days);
    if (!isNaN(days)) {
        const daysSeconds = days  * 24 * 60 * 60;
        return `El resultado de la conversión de ${days} días a segundos es: ${daysSeconds}`;
    } else {
        return "Por favor, ingresa un número válido de días.";
    }
}

const resultDaysToSec = daysToSeconds(40);
console.log(resultDaysToSec);


//5
console.log("consigna 5")
function kmToMl(kms) {
    kms = parseFloat(kms);
    if (!isNaN(kms)) {
        const kmsTomls = kms * 0.621371;
        return `El resultado de la conversión de ${kms} kilómetros a millas es: ${kmsTomls}`;
    } else {
        return "Por favor, ingresa un número válido de kilómetros.";
    }
}

const resultKmsToMls = kmToMl(100);
console.log(resultKmsToMls);

//6
console.log("consigna 6")
function areaTriangle(base,height) {
    base = parseInt(base);
    height = parseInt(height);
    if (!isNaN(base) && !isNaN(height)) {
        const resultBasePerHeight = (base * height)/2;
        return `El resultado del área del triángulo con base ${base} y altura ${height} es: ${resultBasePerHeight}`;
    } else {
        return "Por favor, ingresa un número válido de base y altura.";
    }
}

const resultAreaTriangle = areaTriangle(100,200);
console.log(resultAreaTriangle);
//7
console.log("consigna 7")
function areaRectangle(base,height) {
    base = parseInt(base);
    height = parseInt(height);
    if (!isNaN(base) && !isNaN(height)) {
        const resultBasePerHeight = (base * height);
        return `El resultado del área del rectángulo con base ${base} y altura ${height} es: ${resultBasePerHeight}`;
    } else {
        return "Por favor, ingresa un número válido de base y altura.";
    }
}

const resultAreaRectangle = areaRectangle(100,200);
console.log(resultAreaRectangle);

//8
console.log("consigna 8")
function transportTimeCalculator (kms) {
    kms = parseInt(kms);
    if (!isNaN(kms)) {
        const footSpeed = Math.floor(Math.random() * 2) + 5; 
        const bicicleSpeed = Math.floor(Math.random() * 6) + 15;
        const carSpeed = Math.floor(Math.random() * 20) + 90;

        const timeByFoot = kms / footSpeed;
        const timeByBicicle = kms / bicicleSpeed;
        const timeByCar = kms / carSpeed;

        return `Para la distancia ${kms} km en bicicleta el tiempo de viaje es ${bicicleSpeed} hora/s, a pie ${footSpeed} hora/s y en auto ${carSpeed} hora/s`
    }
}

const resultTransportSpeeds = transportTimeCalculator(150);
console.log(resultTransportSpeeds)
const anotherResultTransportSpeeds = transportTimeCalculator(150);
console.log(anotherResultTransportSpeeds)

//9
console.log("consigna 9")
function incrementoPartida(num, qty) {
    num = parseInt(num);
    qty = parseInt(qty);
    if (!isNaN(num) && !isNaN(qty)) {
        let increaser = num;
        for (let i = 1; i <= 5; i++) {
            console.log(`Incremento ${i}: ` + (increaser += qty));
        }
    }
}

const increaserResult = incrementoPartida(150,3);
console.log(increaserResult)

//10
console.log("consigna 10")

function celsiusToFahrenheit (celsius) {
    celsius = parseInt(celsius);    
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32
        return `La conversión de ${celsius} grados Celsius a Fahrenheit es: ${fahrenheit}`
    }
}

const fahrenheitResult = celsiusToFahrenheit(10);
console.log(fahrenheitResult)