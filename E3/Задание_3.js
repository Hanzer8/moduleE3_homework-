let a = '';

function nombA(a){
  return function nombB(b){
    return a + b;
  };
}

const resalt = nombA(1)(2);
console.log(resalt);