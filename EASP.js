const mainContainer = document.getElementById('main');
const gridContainer = document.querySelector('.grid-container');    




// A func to create div
let gridDivs = [];
function createDivs(numOfGrids) {
    

    for(let i = 0; i < numOfGrids * numOfGrids; i++ ){
        const divs = document.createElement('div');
        divs.style.border = "1px solid red";
        divs.style.width = '20px';
        divs.style.height = '20px';
        divs.style.padding = "0px";
        divs.style.margin = "0px";

        divs.addEventListener('mouseover', changeColor);
        divs.addEventListener('click', removeColor);

        gridDivs.push(divs);

    }
    
}

// func forhover effect
function changeColor (event){
    event.target.style.backgroundColor = 'black';
}

function removeColor (event){
    event.target.style.backgroundColor = '';
}
//

// button creation
const userButton = document.createElement('button');
const buttonDiv = document.createElement('div');

userButton.textContent = 'Select Grid Size';
//append  userButton to buttonDiv
buttonDiv.appendChild(userButton);

createDivs(16);

mainContainer.insertBefore(buttonDiv, mainContainer.children[0]);
gridContainer.append(...gridDivs);
