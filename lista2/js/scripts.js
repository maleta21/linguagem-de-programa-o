function exe1(){
    //recupera dados do usuario
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    let nota3 = Number(document.getElementById("nota3").value)
    let nota4 = Number(document.getElementById("nota4").value)
    // calcular média
    let media = (nota1 + nota2 + nota3 + nota4) / 4
    if (media >= 7){
        document.getElementById("media").innerText = "Aprovado com média " + media
    }
    else {
        document.getElementById("media").innerText = "Reprovado com média " + media
    }

}
function exe2(){
    // recupera os dados do usuario
    let nota1 = Number(document.getElementById("nota1").value)
    let nota2 = Number(document.getElementById("nota2").value)
    //calcula media
    let media = (nota1 + nota2) / 2
    if ((media >= 0) && (media < 3)){
        document.getElementById("media").innerHTML = "Reprovado " + media
    }
    else if ((media >= 3) && (media < 7)){
        document.getElementById("media").innerHTML = "Exame " + media
    }
    else if ((media >= 7) && (media < 10)){
        document.getElementById("media").innerHTML = "Aprovado " + media
    }
    else{
        document.getElementById("media").innerHTML = "Problemas com notas "
    }
}
function exe3(){
    //recupera dados do usuario
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    //calcula o menor e mostra o resultado
    if (nro1 < nro2){
        document.getElementById("menor").innerHTML = "O menor é " + nro1
    }
    else if (nro2 < nro1){
        document.getElementById("menor").innerHTML = "O menor é " + nro2
    }
    else {
        document.getElementById("menor").innerHTML = "Os dois são iguais"
    }
}
function exe4(){

    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let nro3 = Number(document.getElementById("nro3").value)
    //calcula o maior deles
    if (nro1 >= nro2 && nro1 >= nro3){
        document.getElementById("maior").innerHTML = "O maior é " + nro1
    }
    else if (nro2 >= nro2 && nro2 >= nro3){
        document.getElementById("maior").innerHTML = "O maior é " + nro2
    }
    else if (nro2 >= nro2 && nro2 >= nro3){
        document.getElementById("maior").innerHTML = "O maior é " + nro2
    }
}
function exe5(){
    // recupera os dados do usuario
    let nro1 = Number(document.getElementById("nro1").value)
    let nro2 = Number(document.getElementById("nro2").value)
    let selecao = Number(document.getElementById("selecao").value)
    // utilização do escolha
    switch (selecao){
        case 1: document.getElementById("result").innerHTML = "A média é " + (nro1 + nro2) / 2
        break
        case 2: if (nro1 >= nro2){
            document.getElementById("result").innerHTML = nro1 - nro2
        }
        else {
            document.getElementById("result").innerHTML = nro2 - nro1
        }
        break
        case 3: document.getElementById("result").innerHTML = nro1 * nro2
        break
        case 4: if (nro2 != 0){
            document.getElementById("result").innerHTML = nro1 / nro2
        }
        else{
            document.getElementById("result").innerHTML = "Divisão por zero"
        }    


    }
}
function exe6(){
    // recupera os dados do usuario
    let nro1 = Number(document.getElementById("nro1").value);
    let nro2 = Number(document.getElementById("nro2").value);
    let operacao = Number(document.getElementById("operacao").value);
    let resultado = document.getElementById("result");
    // utilização do escolha
    switch (operacao){
        
        case 1: 
            resultado.innerText = `A potência é: ${nro1 ** nro2}`;
            break

        case 2: 
            resultado.innerHTML = `Resultado: ${Math.sqrt(nro1).toFixed(2)} <br/> e ${Math.sqrt(nro2).toFixed(2)}`;
            break

        case 3: 
            resultado.innerHTML = `Resultado: ${Math.cbrt(nro1).toFixed(2)} <br/> e ${Math.cbrt(nro2).toFixed(2)}`;
            break
    
    default: 
    resultado.innerText = "Erro: opção invalida";
    }

 }
 function exe7(){
    // recupera os dados do usuario
    let salario = Number(document.getElementById("salario").value)
    //verifica valor do salario
     if (salario < 500){
        document.getElementById("salario").innerHTML = "Novo salário " + (salario + salario*30/100)
    }
    else {
        document.getElementById("novo").innerHTML = "Salário maior ou igual a 500, sem reajuste"
    }

 }
 function exe8(){
    let salario = Number(document.getElementById("salario").value)
    if (salario <= 300){
        //document.getElementById("novo").innerHTML = "Novo salário " + (salario + salario*35/100)
        novo.innerHTML = `O novo salario é ${salario + salario*35/100}`
    }
    else if (salario > 300){
        //document.getElementById("novo").innerHTML = "Novo salário " + (salario + salario*15/100)
        novo.innerHTML = `O novo salario é ${salario + salario*15/100}`
    }

 }
 function exe9(){
    let saldo = Number(document.getElementById("saldo").value)
    if (saldo > 400){
        credito.innerHTML = `O saldo médio é ${saldo} <br/> e o crédito especial é ${saldo*30/100}`
    }
    else if ((saldo >= 300) && (saldo < 400)){
        credito.innerHTML = `O saldo médio é ${saldo} <br/> e o crédito especial é ${saldo*25/100}`
    }
    else if ((saldo >= 200) && (saldo < 300)){
        credito.innerHTML = `O saldo médio é ${saldo} <br/> e o crédito especial é ${saldo*20/100}`
    }
    else if (saldo === 200){
        credito.innerHTML = `O saldo médio é ${saldo} <br/> e o crédito especial é ${saldo*10/100}`
    }

 }
