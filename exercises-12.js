function konversiMenit(menit) {
    var hitungMenit = Math.floor(menit / 60);
    var sisaDetik = menit % 60;

    if (sisaDetik < 10) {
        return hitungMenit + ':0' + sisaDetik;
    }else{
        return hitungMenit + ':' + sisaDetik;
    } 
}
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00