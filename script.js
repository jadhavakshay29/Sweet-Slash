const grid = document.querySelector('.grid');
const width = 8;
const squares = [];

const candyColors =  ["Blue", "Orange", "Green", "Yellow", "Red", "Purple"];

//create board
const createBoard = ()=>{
    for(let i=0; i < width*width; i++){
        const square = document.createElement('div');
        square.setAttribute('draggable', true);
        square.setAttribute('id',i)
        let randomColor =Math.floor(Math.random() * candyColors.length) ;
        square.style.backgroundColor = candyColors[randomColor];
        grid.appendChild(square);
        squares.push(square);
    }
}
createBoard();

//drag the candies
squares.forEach(square=> square.addEventListener('dragstart', dragStart));
squares.forEach(square=> square.addEventListener('dragend', dragEnd));
squares.forEach(square=> square.addEventListener('dragover', dragOver));
squares.forEach(square=> square.addEventListener('dragenter', dragEnter));
squares.forEach(square=> square.addEventListener('dragdrop', dragDrop));

const dragStart = ()=>{
    console.log(this.id, 'dragstart');
}

const dragEnd = ()=>{
    console.log(this.id, 'dragend');
}

const dragOver = ()=>{
    console.log(this.id, 'dragover');
}

const dragEnter = ()=>{
    console.log(this.id, 'dragenter');
}

const dragdr = ()=>{
    console.log(this.id, 'dragdrop');
}