const dino = document.getElementById('dino');
const cactus =  document.getElementById('cactus');
document.addEventListener('click', ()=> {jump();
});
//console.log("d")
function jump() {
 if(dino.classList !== "jump"){
    dino.classList.add('jump')
 } 
setTimeout (function(){dino.classList.remove('jump')},300)

} 
let isAlive =  setInterval (
    function(){
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
        let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140){ soundClick()}
 
    
    }, 10)

    function soundClick() {
      let audio = new Audio(); // Создаём новый элемент Audio
      audio.src = 'boom.mp3'; // Указываем путь к звуку "клика"
      audio.autoplay = true; // Автоматически запускаем
    }