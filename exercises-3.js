var nama ='Arona Nur Tetulis'
var peran ='Tabib'
var welcome = 'Selamat datang di dunia Proxytia'

if(nama !== ''){
    if(peran === ''){
        console.log(`Hello ${nama}, Pilih peranmu untuk memulai game!`)
    }else if(peran === 'Ksatria'){
        console.log(`${welcome}, ${nama} \nHallo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu`)
    }else if(peran === 'Tabib'){
        console.log(`${welcome}, ${nama} \nHallo ${peran} ${nama}, kamu akan membantu temanmu yang terluka`)        
    }else if(peran === 'Penyihir'){
        console.log(`${welcome}, ${nama} \nHallo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)        
    }else{
        console.log(`Upss !! peran ${peran} tidak tersedia. Pilihan peran hanya ada Ksatria, Tabib, dan Penyihir`)
    }
}else{
    console.log('Nama harus diisi')
}