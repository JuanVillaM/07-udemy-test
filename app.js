// Convertir de libras a kilogramos.
let libras = 737;
let kilogramos = libras / 2.205;
console.log(`${libras} libras son ${kilogramos} kilogramos.`);
console.log('-----------------');

// Convertir de millas a kilómetros.
let km = 100;
let millas = km * 0.62;
console.log(`${km} kilómetros son ${millas} millas.`);
console.log('-----------------');

// Calcular la el área de un triángulo rectangulo de base = 10 y altura = 5;
let base = 10;
let altura = 5;
let area = (base * altura) / 2;
console.log(`El área de un triángulo rectángulo de base ${base} y altura ${altura} es ${area}.`);
console.log('-----------------');

// Determinar mediante un ciclo FOR, el número mayor del arreglo.
let mayor = -100;
let numeros = [1, 6, 8, 4, 2, 7, 10, 3, 5];
for (let i = 0; i <= numeros.length; i++) {
    let numero = numeros[i];
    if (numero > mayor) { mayor = numero }
};
console.log(`El número mayor de todos estos números: ${numeros}, es: ${mayor}.`);
console.log('-----------------');

// Determinar si un número es par o impar de acuerdo a los números dados en el arreglo.
for (let i = 0; i <= numeros.length; i++) {
    if (numeros[i] % 2) { console.log(`${numeros[i]} es impar`) } else { console.log(`${numeros[i]} es par`) };
}
console.log('-----------------');

// Realizar cualquier TABLA de multiplicar.
for (let i = 1; i <= 5; i++) {
    let reglon = '';
    for (let j = 1; j <= 5; j++) {
        reglon += `${ j * i}        `;
    }
    console.log(reglon)
};
console.log('-----------------');

// Crear una función que reciba 3 argumentos y determine cuál es el mayor.
function max(a, b, c) {
    let mayor;
    if (a > b) {
        if (a > c) {
            mayor = a;

        } else {
            mayor = c;
        }
    } else {
        if (b > c) {
            mayor = b;
        } else {
            mayor = c;
        }
    }
    return mayor;
}
let numeroMayor = max(3, 7, 37);
console.log(`El número mayor es: ${numeroMayor}`);
console.log('-----------------');

// Crear una función que retorne el nombre más largo.
function masLargo(arr) {
    let nombreLargo = '';
    for (let i = 0; i < arr.length; i++) {
        let nombre = arr[i];
        if (nombre.length > nombreLargo.length) {
            nombreLargo = nombre;
        }
    }
    return nombreLargo;
}
let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
heroeLargo = masLargo(heroes);
console.log(`El Héroe con el nombre más largo es: ${heroeLargo}.`);
console.log('-----------------');

/*
Crear una función que reciba como parámetro un arreglo, la función debe de
retornar otro filtrando los nombre que empiezan con una determinada letra
*/

function filtrarLetra(arr, letra) {
    let nuevoArr = [];
    for (let i = 0; i < arr.length; i++) {
        let nombre = arr[i];
        if (nombre[0] === letra) { nuevoArr.push(nombre) }
    }
    return nuevoArr;
}
let heroesArr = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let heroesCon = filtrarLetra(heroesArr, 'S');
console.log(`De todos estos nombre de héroes: ${heroesArr} los que empiezan con la letra S son: ${heroesCon}.`);