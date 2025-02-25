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