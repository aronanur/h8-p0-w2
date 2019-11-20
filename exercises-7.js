//Tanyain Ke Instruktur apakah harus pake console ???

//Soal Nomor 1
console.log('Soal Nomor 1')
var loopingTimes = 5;

for(i = 0; i < loopingTimes;i++){
    var starContainer = ''
    starContainer += '*'

    console.log(starContainer)
}


console.log('Soal Nomor 2')
for(i = 0; i < loopingTimes;i++){
    var starContainer = ''
    for(j = 0; j < loopingTimes;j++){
        starContainer += '*'
    }

    console.log(starContainer)
}


console.log('Soal Nomor 3')
for(i = 0; i < loopingTimes;i++){
    var starContainer = ''
    for(j = 0; j <= i;j++){
        starContainer += '*'
    }
    console.log(starContainer)
}

