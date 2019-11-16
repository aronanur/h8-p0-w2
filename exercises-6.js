//Soal Nomor 1
console.log('Soal Nomor 1')
var increaseNumber = 2;
var sentence1 = 'I Love Coding!';

console.log('Looping Pertama')
while(increaseNumber <= 20){
    console.log(increaseNumber + ' - ' + sentence1)
    increaseNumber += 2
}

console.log('\n'); 


var decreaseNumber = 20;
var sentence2 = 'I will become fullstack developer';

console.log('Looping Kedua')
while(decreaseNumber >= 2){
    console.log(decreaseNumber + ' - ' + sentence2)
    decreaseNumber -= 2
}

console.log('\n'); 


//Soal Nomor 2

console.log('Soal Nomor 2')
console.log('Looping Pertama')
for (i = 1; i <= 20; i++) {
    console.log(i + ' - ' + sentence1)
}

console.log('\n'); 

console.log('Looping Kedua')
for (i = 20; i >= 1; i--) {
    console.log(i + ' - ' + sentence2)
}


//Soal Nomor 3
console.log('Soal Nomor 3')

console.log('Soal Genap & Ganjil')
for (i = 1; i <= 100; i++) {
    if(i % 2 === 0){ 
        console.log(i + ' adalah angka Genap')
    }else if(i % 2 !== 0){
        console.log(i + ' adalah angka Ganjil')
    }
}

console.log('\n')
//Soal looping untuk bilangan kelipatan 3
console.log('Soal Angka Kelipatan 3')
for(i = 1; i <= 100;i += 2){
    if(i % 3 === 0){
        console.log(i + ' merupakan angka Kelipatan 3')
    }else{
        console.log('')
    }
}

console.log('\n')
//Soal looping untuk bilangan kelipatan 6
console.log('Soal Angka Kelipatan 6')
for(i = 1; i <= 100;i += 5){
    if(i % 6 === 0){
        console.log(i + ' merupakan angka Kelipatan 6')
    }else{
        console.log('')
    }
}

console.log('\n')
//Soal looping untuk bilangan kelipatan 10
console.log('Soal Angka Kelipatan 10')
for(i = 1; i <= 100;i += 9){
    if(i % 10 === 0){
        console.log(i + ' merupakan angka Kelipatan 10')
    }else{
        console.log('')
    }
}