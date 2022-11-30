function songPlayer(audioSelector) {
  const audioElement =  document.querySelector(audioSelector);
  if (audioElement && audioElement.localName === "audio"){
    audioElement.play();
    return
  }
  throw Error("Audio não existente ou o seletor não é do tipo 'audio'")
} 

const keyList = document.querySelectorAll('.tecla');

for(let i = 0; i < keyList.length; i++){
  const key = keyList[i];
  const instrument = key.classList[1];
  const idAudio = `#som_${instrument}`;

  key.onclick = function(){
    songPlayer(idAudio);
  }
  
  key.onkeydown = function(evento){
    console.log(evento.code)
    if(evento.code === "Enter" || evento.code === "Space" || evento.code === "NumpadEnter"){
      key.classList.add('ativa')
    }
  }

  key.onkeyup = function(){
    key.classList.remove('ativa')
  }
}
