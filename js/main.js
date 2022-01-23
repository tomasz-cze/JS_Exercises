const sizeUp = document.querySelector('.sizeUp');
const sizeDown = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const p = document.querySelector('p');
let fontSize = 36;
let randomColor


// function increasing font size by 1 px
function up() {
	fontSize += 1;
	console.log(fontSize);
    p.style.fontSize = fontSize+'px';
}

// function decrasing font size by 1 px
function down() {
	if (fontSize > 25) {
         fontSize--;
	console.log(fontSize);
    p.style.fontSize = `${fontSize}px` 
    } 
}
// function creating random color #

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      p.style.color = `${color}`;
    }
    return color;
  }


sizeUp.addEventListener('click', up);
sizeDown.addEventListener('click', down);
colorBtn.addEventListener('click', getRandomColor)