let nota01 = 8.0;
let nota02 = 5.8;

let media = (nota01 + nota02)/2;


function printResult(status, grade){
  console.log(status, "com nota", grade);
}


switch(media >= 7.0) {
  case true:
    printResult("aprovado", media);
    break;
  case false:
    printResult("reprovado", media) ;
    break;
  default:
    console.log("tente novamente");
    console.log(media);
}

