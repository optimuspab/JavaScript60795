//1
console.log("consiga 1")
for (let i = 0; i < 10; i++) {
    console.log("¡¡Oh no, entré en un bucleeee!!")
}

//2
console.log("consiga 2")
for (let i = 20; i < 70; i++) {
    console.log(i)
}

//3
console.log("consiga 3")
const word = "Pirates"

for (let i = 0; i < word.length; i++) {
    if ("aeiou".includes(word[i].toLowerCase())) {
        console.log(("Vowel: " + word[i]))
    } else if ("bcdfghjklmnpqrstvwxyz".includes(word[i].toLowerCase())) {
        console.log(("Consonant: " + word[i]))
    } else {
        console.log("nothing to show")
    }
}

//4
console.log("consiga 4")
let suma = 0
for (let i = 10; i < 101; i++) {
    suma += i
}
console.log("Suma total de la consiga 4 es de :" + suma)

//5
console.log("consiga 5")
let addition = 0
for (let i = 0; i < 10; i++) {
    if (i % 2 !== 0) {
        addition += i
    }
}
console.log("Suma total de la consiga 5 es de :" + addition)

//6
console.log("consiga 6")
const username = "Pirates"
let addVowels = 0
for (let i = 0; i < username.length; i++) {
    if ("aeiou".includes(username[i].toLowerCase())) {
        addVowels += 1
    }
}
console.log("Cantidad de vocales del nombre de usuario: " + addVowels)

//7
console.log("consiga 7")
const theWord = "Pirates"
let invertedWord = ""
for (let i = theWord.length -1; i >= 0; i--)
    invertedWord += theWord[i].toLowerCase();
console.log(invertedWord);
//another way to do it
const otherInvertedWord = theWord.split("").reverse().join("").toLowerCase();
console.log(otherInvertedWord);

//8
console.log("consiga 8")
const toSearch = "xenomorph"
for (let i = 0; i < toSearch.length; i++) {
    if ("o".includes(toSearch[i].toLowerCase())) {
        console.log("the index of the letter is: " + i)
    }
}

//9
console.log("consiga 9")
const toPrint = "xenomorph means strange form";
const numOfRows = toPrint.length;

for (let i = 0; i < numOfRows; i++) {
    let row = "";
    for (let k = 0; k < numOfRows; k++) {
        if (k <= i) {
            row += "*";
        } else {
            row += " ";
        }
    }
    console.log(row);
}
