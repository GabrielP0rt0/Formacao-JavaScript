const elementosControleAjuste = document.querySelectorAll("[data-controle]")
const estatistica = document.querySelectorAll("[data-estatistica]")
const peca = document.querySelectorAll("[peca]")
const pecas = {
  "bracos": {
      "forca": 29,
      "poder": 35,
      "energia": -21,
      "velocidade": -5
  },

  "blindagem": {
      "forca": 41,
      "poder": 20,
      "energia": 0,
      "velocidade": -20
  },
  "nucleos":{
      "forca": 0,
      "poder": 7,
      "energia": 48,
      "velocidade": -24
  },
  "pernas":{
      "forca": 27,
      "poder": 21,
      "energia": -32,
      "velocidade": 42
  },
  "foguetes":{
      "forca": 0,
      "poder": 28,
      "energia": 0,
      "velocidade": -2
  }
}

elementosControleAjuste.forEach( (elemento) => {
  elemento.addEventListener('click', (evento) => {
    ManipulaDados(evento.target.textContent, evento.target.parentNode)
    AtualizarEstatisticas(evento.target.dataset.peca)
  })
})

function ManipulaDados (operacao, controle){
  const parte = controle.querySelector("[data-contador]")
  const idPeca = parte.id

  if (operacao === "+"){
    parte.value =   parseInt(parte.value) + 1
  } else if (operacao === "-" && parseInt(parte.value) > 0 ){
    parte.value = parseInt(parte.value) - 1
  } else {
    alert("Apenas número positivo de " + idPeca)
  }
}

function AtualizarEstatisticas(peca){
  estatistica.forEach ( (elemento) => {
    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
  })
}

