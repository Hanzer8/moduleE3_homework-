let fNumber = Number(prompt('Введите первое число: '));
let sNumber = Number(prompt('Введите второе число: '));

if (sNumber > fNumber) {
  let subtraction = (sNumber - fNumber); 
  let counter = subtraction;
  fNumber--; 

  while (counter > 0) {
    fNumber++; 
    console.log(fNumber); 
    counter--; 
  }

  console.log(sNumber)

} else {
  let subtraction = (fNumber - sNumber);
  let counter = subtraction;
  sNumber--; 

  while (counter > 0) {
    console.log(fNumber); 
    counter--;
    fNumber--; 
  }

console.log(fNumber)

}