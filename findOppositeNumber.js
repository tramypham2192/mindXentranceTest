let inputNumber = 0
let n = 0

function findOppositeNumber(n, inputNumber){
    let result = 0
    if ( 0 <= inputNumber <= n - 1){
        result = inputNumber + n/2
    }
    return result
} 

console.log(findOppositeNumber(10,2))
console.log(findOppositeNumber(10,1))
console.log(findOppositeNumber(16,5))