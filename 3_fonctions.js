//exercice fonction

let a = 'Paul'
let b = 'Jean'

function checkName(a, b){
    if(a===b){
        return 'True'
    } else{
        return 'False'
    }
}

let check = checkName(a, b)

console.log(check)