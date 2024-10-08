const mainContainer = document.getElementById('main');
const gridContainer = document.querySelector('.grid-container');    




// A func to create div
let gridDivs = [];
const maxWidth = 450;
function createDivs(numOfGrids) {
    

    for(let i = 0; i < numOfGrids * numOfGrids; i++ ){
        const divs = document.createElement('div');
        divs.className = 'divBox';
        divs.style.padding = "0px";
        divs.style.margin = "0px";
        

        divs.addEventListener('mouseover', changeColor);
        divs.addEventListener('click', removeColor);

        gridDivs.push(divs);

    }
    changeSize(gridDivs,numOfGrids);
    gridContainer.append(...gridDivs);
}

// func forhover effect
function changeColor (event){
    event.target.style.backgroundColor = `rgb(${r()}, ${g()}, ${b()})`;
}

function removeColor (event){
    event.target.style.backgroundColor = '';
}
//

// button creation
const userButton = document.createElement('button');
const buttonDiv = document.createElement('div');

userButton.textContent = 'Select Grid Size';
userButton.addEventListener('click', userInput);

//button evt listner func
function userInput (){
    const userGridNum = parseInt(prompt('Pick a number ?, '));
    gridDivs.length = 0;
    gridContainer.innerHTML = '';
    createDivs(userGridNum);
}


//func to change size
function changeSize(array, numOfGrids){
    array.forEach(element => {
        element.style.width = `${maxWidth / numOfGrids}px`;
        element.style.height = `${maxWidth / numOfGrids}px`;
    });
}

//function for random clor on hover
 function r () {
   return  Math.floor(Math.random() * 257);
}

const g = () => Math.floor(Math.random() * 257);


function b () {
    return  Math.floor(Math.random() * 257);
 }
console.log(g());
//append  userButton to buttonDiv
buttonDiv.appendChild(userButton);

createDivs(16);

mainContainer.insertBefore(buttonDiv, mainContainer.children[0]);

