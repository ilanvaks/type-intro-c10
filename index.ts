let age: number = 23; 
let firstName: string = "ilan"
let isTall: boolean = true;
let childrenNames: string[] = ["Lilly","David"] 

// console.log(`${firstName} is ${age} years old.`)

if (isTall) {
  // console.log("and so tall")
} else {
  // console.log("and so pretty")
}

for (let i: number = 0; i <childrenNames.length; i++) {
  // console.log(childrenNames[i])
}


enum taxForm {
  standarTaxForm = "1040",
  childTaxForm = "641",
  cryptoTaxForm = "420Z"
}

// console.log("the crypto one is:", taxForm.cryptoTaxForm)
// console.log("the crypto one is:", taxForm.cryptoTaxForm)
// console.log("the crypto one is:", taxForm.cryptoTaxForm)

let zipCode: string | number = 12345 // good
zipCode = "ABCDE" //good 
// zipCode = null //bad 
// console.log(zipCode)

function sum(x: number, y: number): number {
  return x+y
}

let total: number = sum(5, 6)

console.log(total)