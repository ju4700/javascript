function palin(word){
    let string = word.toLowerCase();
    const check = word.split('').reverse().join('');
    if (string == check){
      return true;
    } else return false;
  }
  
  console.log(palin("racecar"));