//Soal Nomor 1
console.log('Soal Nomor 1')

function shoutOut() {
    return 'Hallo Function!'
}

console.log(shoutOut())

console.log('\n')

//Soal Nomor 2
console.log('Soal Nomor 2')

var num1 = 5;
var num2 = 6;

function calculateMultiply(num1, num2) {
    return num1 * num2;
}

var hasilPerkalian = calculateMultiply(num1, num2);
console.log(hasilPerkalian)

console.log('\n')

//Soal Nomor 3
console.log('Soal Nomor 3')

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

function processSentence(name,age,address,hobby) {
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`;
}

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 