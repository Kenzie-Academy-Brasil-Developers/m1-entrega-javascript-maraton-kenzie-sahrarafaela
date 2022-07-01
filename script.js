
    let names = [ 'Manoel', 'Daniel','Rafael'  ]

function positions (arr){
    
let procurando = arr.indexOf('Daniel')
let proc
if (procurando !== 0){
    // como daniel tem o bônus, ele sempre vai ficar um a menos com o anterior a ele
    proc = arr [(procurando - 1)]
arr [(procurando - 1)] = 'Daniel'
arr [procurando] = proc
return `Este é o pódio 1º ${arr[0]}, 2º ${arr[1]}, 3º ${arr[2]} `
} else {
   return 'Daniel é o vencedor'
}
}

console.log(positions(names))