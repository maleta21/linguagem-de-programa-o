function entrada(mat){
    // será 3 x 5
    for(let i=0;i<3;i++){
        mat[i] = [] // cria cada linha da matriz
        for(let j=0;j<5;j++){
            mat[i][j] = parseint(Math.random() * 10) + 15 // gera numero aleatorio entre 0 e 9
        }
    }
}
function somaEntre15e20(mat){
    let soma = 0
    for(let i=0;i<3;i++){
         for(let j=0;j<5;j++){
            if (mat[i][j] >= 15 && mat[i][j] <= 20){
                soma++
            }
         }
    }
    // função vai retornar a soma
    return soma
}
function exibeMatriz(mat){
    let saida = ''
    for(let i=0;i<mat.length;i++){
        saida = saida + '\n'
        for(let j=0;j<mat[i].length;j++){
            saida = saida + " " + mat[i][j]
        }
    }
    alert(saida)
}
function exemplo(){
    let mat = [] 
    entrada(mat)
    alert(`A soma dos numeros entre 15 e 20 são ${somaEntre15e20(mat)}`)
    exibeMatriz(mat)
}

exe1()