/*const elementosControleAjuste = document.querySelectorAll("[data-controle]")

elementosControleAjuste.forEach( (elemento) => {
  elemento.addEventListener('click', (evento) => {
    ManipulaDados(evento.target.textContent, evento.target.parentNode)
  })
})

function ManipulaDados (operacao, controle){
  const peca = controle.querySelector("[data-contador]")
  const idPeca = peca.id

  if (operacao === "+"){
    peca.value =   parseInt(peca.value) + 1
  } else if (operacao === "-" && parseInt(peca.value) > 0 ){
    peca.value = parseInt(peca.value) - 1
  } else {
    alert("Apenas número positivo de " + idPeca)
  }
}*/

const botaoMostra = document.querySelectorAll("[data-controle]")

botaoMostra.forEach( (elemento) => {
  elemento.addEventListener('click', (evento) => {
    EditaTintas(evento.target.textContent, evento.target)
  })
})

function EditaTintas(operacao, texto){
  const corTip = document.querySelectorAll("[lista-cores]")

  if (operacao === "Mostrar tintas"){
    corTip.forEach((elemento) => {
      texto.innerHTML = "Esconder tintas"
      elemento.hidden = false
    })
  } else if (operacao === "Esconder tintas"){
    corTip.forEach((elemento) => {
      texto.innerHTML = "Mostrar tintas"
      elemento.hidden = true
    })
  } else {
    throw Error("Parametro de função inválido")
  }

}
