let nama ='Arona Nur Tetulis'
let peran ='Tabib'

if(nama === '' && peran === ''){
    console.log('Nama harus diisi!')
}else if(nama !== '' && peran === ''){
    console.log('Hello '+ nama + ', Pilih peranmu untuk memulai game!')
}else if(nama !== '' && peran === 'Ksatria'){
    console.log('Selamat datang di dunia Proxytia,' + nama + '\nHallo Ksatria '+ nama + ', kamu dapat menyerang dengan senjatamu')
}else if(nama !== '' && peran === 'Tabib'){
    console.log('Selamat datang di dunia Proxytia,' + nama + '\nHallo Tabib '+ nama + ', kamu akan membantu temanmu yang terluka.')
}else if(nama !== '' && peran === 'Penyihir'){
    console.log('Selamat datang di dunia Proxytia,' + nama + '\nHallo Penyihir '+ nama + ', ciptakan keajaiban yang membantu kemenanganmu!.')    
}