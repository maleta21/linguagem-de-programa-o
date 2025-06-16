function exe3() {
    // cadastra código, qtde em estoque e preço
    let vetor = [] // vetor de objetos
    for (let i = 0; i < 3; i++) {
        let objeto = {
            codigo: prompt("Informe o código do produto"),
            estoque: Number(prompt("Informe a qtde em estoque")),
            preco: Number(prompt("Informe o preço do produto"))
        }
        vetor.push(objeto)
    }

    // processo de compra
    let cliente = Number(prompt("Informe o código do cliente"))
    do {
        let codigo = prompt("Informe código do produto para compra")
        let qtde = Number(prompt("Informe a qtde do produto para compra"))

        // procura o produto
        let produtoEncontrado = null
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i].codigo === codigo) {
                produtoEncontrado = vetor[i]
                break
            }
        }

        if (!produtoEncontrado) {
            alert(`Código ${codigo} inexistente`)
        } else {
            if (produtoEncontrado.estoque >= qtde) {
                produtoEncontrado.estoque -= qtde
                alert("Pedido atendido. Obrigado e volte sempre")
            } else {
                alert("Não temos estoque suficiente desta mercadoria")
            }
        }

        cliente = Number(prompt("Informe o código do novo cliente. Digite 0 para encerrar"))
    } while (cliente != 0)

    console.log(vetor)
}
function exe6(){
    let vetor = []
    // entrada de dados
    for(let i=0;i<5;i++){
        let obj = {
            nome : prompt(`Informe nome do ${i+1}o vendedor`),
            vendas : Number(prompt(`Informe total vendido pelo ${i+1}o vendedor`)),
            percentual : Number(prompt(`Informe percentual de vendas do ${i+1}o vendedor`)),
        }
        // calcula a comissão - vamos utilizar o . para acessar o campo/atributo do objeto
        obj.comissao = (obj.vendas * obj.percentual) / 100
        // adciona o objeto no vetor
        vetor.push(obj)
    }// fecha o for

    // relação dos vendedores e os valores a receber
    let relatorio = ''
    for(let i=0;i<5;i++){
        relatorio += `\nVendedor: ${vetor[i].nome} vai receber ${vetor[i].comissao}`
    }
    alert(relatorio)
    // total das vendas de todos os vendedores
    let somavendas = 0
    for(let i=0;i<5;i++){
        somavendas = somavendas + vetor[i].vendas
    }
    alert(`Total de vendas ${somavendas.toFixed(2)}`)
    // calcula o menor e maior valor de comissão
    let maior = vetor[0] // primeiro funcionario é o maior
    let menor = vetor[0] // primeiro funcionario é o menor
    for(let i=0;i<5;i++){
        if (vetor[i].comissao > maior.comissao){
            maior = vetor[i]
        }
        if (vetor[i].comissao < menor.comissao){
            menor = vetor[i]
        }
    }
    alert(`${maior.nome} vai receber maior comissão de ${maior.comissao}`)
    alert(`${menor.nome} vai receber menor comissão de ${menor.comissao}`)
}
function exe9(){
    let vetor = []
    for(let i=0;i<10;i++){
        let obj = {
            nome: prompt(`Informe nome do produto ${i+1}`),
            codigo: Number(prompt(`Informe o codigo do produto ${i+1}`)),
            preco: Number(prompt(`Informe o preço do produto ${i+1}`)),
            novo : 0
        }
        vetor.push(obj)
    }
    // gerar o relatório com os novos preços
    for(let i=0;i<10;i++){
        if (vetor[i].codigo % 2 == 0 && vetor[i].preco > 1000){
            vetor[i].novo = vetor[i].preco + vetor[i].preco * 20/100
        }
        else if (vetor[i].codigo % 2 == 0){
            vetor[i].novo = vetor[i].preco + vetor[i].preco * 15/100
        }
        else if (vetor[i].preco > 100){
            vetor[i].novo = vetor[i].preco + vetor[i].preco * 10/100
        }
        else {
            vetor[i].novo = vetor[i].preco
        }
        alert(`${vetor[i].nome} - ${vetor[i].codigo} - ${vetor[i].preco} - ${vetor[i].novo}`)
    }
}