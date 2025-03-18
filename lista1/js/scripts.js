function seguir(){
    alert('Você agora está seguindo Matheus Gondim')
}
//exercicio 1
function exe1(){
    //vamos usar DOM para recuperar dados do html
    //DOM - Document Object Model
    //converte texto para numero - Number()
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    //vamos fazer a subtração
    let sub = nro1 - nro2
    //vamos mostrar o resultado do usuario
    // alert("A subtração é " + sub)
    document.getElementById("sub").innerText = "O resultado é " + sub
}
//exercicio 2
function exe2(){
    //vamos usar DOM para recuperar dados do html
    //DOM - Document Object Model
    //converte texto para numero - Number()
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    let multiplicacao = nro1 * nro2 * nro3
    document.getElementById("multiplicacao").innerText = "O resultado é " + multiplicacao
}
//exercicio 3
function exe3(){
    //vamos usar DOM para recuperar dados do html
    //DOM - Document Object Model
    //converte texto para numero - Number()
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let divisao = nro1 / nro2
    document.getElementById("divisao").innerText = "O resultado é " + divisao
}
//exercicio 4
function exe4(){
    //vamos usar DOM para recuperar dados do html
    //DOM - Document Object Model
    //converte texto para numero - Number()
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    //media ponderada
    let mp = ((nro1 * 2) + (nro2 * 3)) / 5
    document.getElementById("mp").innerText = "O resultado é " + mp
}
//exercicio 5
function exe5(){
    //vamos usar DOM para recuperar dados do html
    //DOM - Document Object Model
    //converte texto para numero - Number()
    let preco = Number(document.getElementById("preco").value)
    let desconto = (preco * 10) / 100
    document.getElementById("desconto").innerText = "O resultado é "+ (preco - desconto)
}
//exercicio 6
function exe6(){
    //vamos usar DOM para recuperar dados do html
    //DOM - Document Object Model
    //converte texto para numero - Number()
    let salario = Number(document.getElementById("salario").value)
    let comicao = (salario * 4) / 100
    let final = (salario * 4) / 100 + salario
    document.getElementById("comicao").innerText = "A comição é " + comicao
    document.getElementById("final").innerText = "O salario final é " + final
}
//exercicio 7
function exe7(){
    //vamos usar DOM para recuperar dados do html
    //DOM - Document Object Model
    //converte texto para numero - Number()
    let peso = Number(document.getElementById("peso").value)
    let engordar = (peso * 15) / 100
    let emagrecer = (peso * 20) / 100
    document.getElementById("engordar").innerText = "O peso acima é " + (peso + engordar)
    document.getElementById("emagrecer").innerText = "O peso abaixo é " + (peso - emagrecer)
}
//exercicio 8
function exe8(){
    //vamos usar DOM para recuperar dados do html
    //DOM - Document Object Model
    //converte texto para numero - Number()
    let kg = Number(document.getElementById("kg").value)
    let g = kg * 1000
    document.getElementById("g").innerText = "Seu peso em gramas é: " + g
}
//exercicio 9
function exe9(){
    //vamos usar DOM para recuperar dados do html
    //DOM - Document Object Model
    //converte texto para numero - Number()
    let maior = Number(document.getElementById("maior").value)
    let menor = Number(document.getElementById("menor").value)
    let altura = Number(document.getElementById("altura").value)
    let area = ((maior + menor) * altura) /2
    document.getElementById("area").innerText = "A área do traézio é " + area
}
//exercicio 10
function exe10(){
    //vamos usar DOM para recuperar dados do html
    //DOM - Document Object Model
    //converte texto para numero - Number()
    let lado = Number(document.getElementById("lado").value)
    let area = lado * lado
    document.getElementById("area").innerText = "O resultado é " + area
}