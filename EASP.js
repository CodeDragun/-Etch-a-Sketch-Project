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

        gridDivs.push(divs);

    }
    
}



createDivs(16);

gridContainer.append(...gridDivs);
