let numeroaleatorio = Math.floor(Math.random() * 101);
let campoGame = document.querySelector('.campoGame');
let enviarnumb = document.querySelector('.enviarnumb');
let palpites = document.querySelector('.palpites');
let certoouerrado = document.querySelector('.certoouerrado');
let altooubaixo = document.querySelector('.altooubaixo');
let contarpalpites = 1;
let botaoreiniciar;
let print = console.log;

function analisarpalpite(){
let palpiteuser = Number(campoGame.value);
if (contarpalpites === 1){
  palpites.textContent = 'Palpites usados: ';
}
palpites.textContent += palpiteuser + ' ';

if(palpiteuser === numeroaleatorio){
  certoouerrado.textContent = 'Acertou!!';
  certoouerrado.style.backgroundColor = 'blue';
  altooubaixo.textContent= ' ';
  fimdojogo()
}
else if(contarpalpites === 10){
  certoouerrado.textContent = 'Fim do Jogo :(';
  certoouerrado.style.backgroundColor = 'yellow';
  certoouerrado.style.color = 'black'
  altooubaixo.textContent = ' ';
  fimdojogo()
}
else{
  certoouerrado.textContent = 'Errado!';
  certoouerrado.style.backgroundColor = 'red';
if(palpiteuser<numeroaleatorio){
  altooubaixo.textContent='O palpite está muito baixo!';
}
else if(palpiteuser>numeroaleatorio){
  altooubaixo.textContent='O palpite está muito alto!';
}
}
contarpalpites++;
campoGame.value=' ';
campoGame.focus();
}
enviarnumb.addEventListener('click', analisarpalpite);

function fimdojogo(){
campoGame.disabled = true;
enviarnumb.disabled = true;
botaoreiniciar=document.createElement('button');
botaoreiniciar.textContent='vai mais um joguinho?';
document.body.appendChild(botaoreiniciar);
botaoreiniciar.addEventListener('click', reiniciarjogo);
}

function reiniciarjogo() {
  contarpalpites = 1;

  var reiniciarParas = document.querySelectorAll('.resultado p');
  for (var i = 0 ; i < reiniciarParas.length ; i++) {
    reiniciarParas[i].textContent = '';
  }

  botaoreiniciar.parentNode.removeChild(botaoreiniciar);

  campoGame.disabled = false;
  enviarnumb.disabled = false;
  campoGame.value = '';
  campoGame.focus();

  certoouerrado.style.backgroundColor = 'white';

  numeroaleatorio = Math.floor(Math.random() * 100) + 1;
}