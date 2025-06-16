function Cadastra(mat, vet){
    for(let i=0;i<12;i++){
        mat[i] = [] // cria um espaço na memória para cada vetor da matriz
        for(let j=0;j<4;j++){
            mat[i][j] = Number(prompt(`Informe as vendas na semana ${j+1} do mês ${vet[i]}`))
        }
    }
}
function calculaTotalMes(mat, vet){
    for(let i=0;i<12;i++){
        let soma = 0 // vamos iniciar um novo mês
        for(let j=0;j<mat[i].length;j++){
            soma = soma + mat[i][j]
        }
        alert(`Total vendido em ${vet[i]}foi de ${soma}`)
    }
}
function calculaTotalSemana(mat){
    for(let j=0;j<4;j++){ // para cada semana
        let soma = 0
        for(let i=0;i<12;i++){ // para cada mês
            soma = soma + mat[i][j]
        }
        alert(`Total vendido na semana ${j} foi de ${soma}`)
    }
}
function calculaTotalAno(mat){
    let soma = 0
    for(let i=0;i<mat.length;i++){
        for(let j=0;j<4;j++){
            soma += mat[i][j]
        }
    }
    return soma
}
function calculaMaiores(mat, vet){
    for(let i=0;i<12;i++){
        let qtde = 0
        for(let j=0;j<4;j++){
            if (mat[i][j] > 5000){
                qtde++
            }
        }
        alert(`Em ${vet[i]} teve ${qtde} vendas maiores que R$5.000,00`)
    }
}
function exe5(){
    let mat = [] 
    const vet = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto",
    "Setembro", "Outubro", "Novembro", "Dezembro"]
    Cadastra(mat, vet)
    calculaTotalMes(mat, vet)
    calculaTotalSemana(mat)
    alert(`Total vendido no ano ${calculaTotalAno(mat)}`)
}
exe5()