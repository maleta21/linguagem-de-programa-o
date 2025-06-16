function entrada(vet){
    for(let i=0;i<5;i++){
        let obj = {
            nome : prompt(`Informe nome do ${i+1}o vendedor`),
            vendas : Number(prompt(`Informe total vendido pelo ${i+1}o vendedor`)),
            percentual : Number(prompt(`Informe percentual de vendas do ${i+1}o vendedor`)),
        }
        // calcula a comissão - vamos utilizar o . para acessar o campo/atributo do objeto
        obj.comissao = (obj.vendas * obj.percentual) / 100
        // adciona o objeto no vetor
        vet.push(obj)
    }// fecha o for
}
function gerarRelatorio(vet){
    // relação dos vendedores e os valores a receber
    let relatorio = ''
    for(let i=0;i<5;i++){
        relatorio += `\nVendedor: ${vet[i].nome} vai receber ${vet[i].comissao}`
    }
    alert(relatorio)
} 
function totalVendas(vet){   
    // total das vendas de todos os vendedores
    let somavendas = 0
    for(let i=0;i<5;i++){
        somavendas = somavendas + vet[i].vendas
    }
    alert(`Total de vendas ${somavendas.toFixed(2)}`)
}
function menorMaiorComissao(vet){
    // calcula o menor e maior valor de comissão
    let maior = vet[0] // primeiro funcionario é o maior
    let menor = vet[0] // primeiro funcionario é o menor
    for(let i=0;i<5;i++){
        if (vet[i].comissao > maior.comissao){
            maior = vet[i]
        }
        if (vet[i].comissao < menor.comissao){
            menor = vet[i]
        }
    }
    alert(`${maior.nome} vai receber maior comissão de ${maior.comissao}`)
    alert(`${menor.nome} vai receber menor comissão de ${menor.comissao}`)
}
function exe6(){
    let vetor = []
    entrada(vetor)
    gerarRelatorio(vetor)
    totalVendas(vetor)
    menorMaiorComissao(vetor)
}