//Tanyain Ke Instruktur apakah harus pake console ???

//Soal Nomor 1
document.write('Soal Nomor 1')
document.write('<br>')
var loopingTimes = 5;

for(i = 0; i < loopingTimes; i++){
    document.write('*');
    document.write('<br>')
}

document.write('<br>')

document.write('Soal Nomor 2')
document.write('<br>')

for(i = 0; i < loopingTimes; i++){
    for(j = 0; j < loopingTimes; j++){
        document.write('*')
    }
    document.write('<br>')
}

document.write('<br>')

document.write('Soal Nomor 3')
document.write('<br>')

for(i = 0; i < loopingTimes;i++){
    for(j = 0; j <= i; j++){
        document.write('*')
    }
    document.write('<br>')
}
