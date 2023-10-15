//exercice for

let a = 4

for(let i = 0; i < a; i++){
    console.log('oklm')
}

//exercice while

let b = 3
while(b < 9){
    b++
    if(b=7){
        continue
    }
    if(b=8){
        break
    }
    console.log(b)
}
console.log('j\'ai cassé la boucle au bout de '+b+' tours.')