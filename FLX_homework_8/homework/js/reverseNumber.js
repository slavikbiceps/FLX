function reverseNumber(number){
  let reversedNumber = 0;
  while (number) {
      if(number>0){
          reversedNumber = (reversedNumber * 10) + (number % 10);
          number = Math.floor(number / 10);
      }else{
          number = -number;
          reversedNumber = (reversedNumber * 10) + (number % 10);
          number = Math.floor(number / 10);
          reversedNumber
      }
  }
  return reversedNumber;
}
console.log(reverseNumber(123)); 
console.log(reverseNumber(-456)); 
console.log(reverseNumber(10000)); 
