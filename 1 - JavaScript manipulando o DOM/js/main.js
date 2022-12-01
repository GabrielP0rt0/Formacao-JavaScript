const elementosControleAjuste = document.querySelectorAll(".controle-ajuste")

elementosControleAjuste.forEach( (elemento) => {
  elemento.addEventListener('click', (evento) => {
    ManipulaDados(evento.target.textContent, evento.target.parentNode)
  })
})

function ManipulaDados (operacao, controle){
  const peca = controle.querySelector(".controle-contador")

  if (operacao === "+"){
    peca.value =   parseInt(peca.value) + 1
    console.log("soma")
  } else if (operacao === "-" && parseInt(peca.value) > 0 ){
    peca.value = parseInt(peca.value) - 1
  } else {
    alert("Apenas núeros positivos de braços")
  }
}

