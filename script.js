
    let names = [  'Daniel' ,'Rafael' , 'Manoel' ]

function positions (arr){
    
let procurando = arr.indexOf('Daniel')
if (procurando !== 0){
    // como daniel tem o bônus, ele sempre vai ficar um a menos do anterior
arr [(procurando - 1)] = 'Daniel'
arr [procurando]
return `Este é o pódio 1º ${arr[0]}, 2º ${arr[1]}, 3º ${arr[2]} `
} else {
   return 'Daniel é o vencedor'
}
}

console.log(positions(names))
