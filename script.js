const container=document.querySelector("#container");
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");

let size =8;
creategrid(size);
hover();

function creategrid(size){
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const grid=document.createElement("div");
            grid.classList.add('grid');
            gridContainer.appendChild(grid);   
        }
        
    }
    container.appendChild(gridContainer);
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    
    
}
let gridSize=document.querySelector("#gridSize");

gridSize.addEventListener("click",()=>{
    size=prompt("enter grid size=> ");
    if (size>50) {
        alert("not more than 50 kid");
        size=30;
    }
    else if(size===null){
        size=16;
    }
    
    creategrid(size);
    hover();
})



function hover() {
    const grid=document.querySelectorAll(".grid");

    grid.forEach((cell) => {
    cell.addEventListener("mouseenter", function() {
        // Code to run when a grid cell is hovered
        cell.classList.add("pixelated-cell") // Change background color on hover
    });

 
});
    
}
const clear=document.querySelector("#clear");

clear.addEventListener("click",()=>{
    creategrid(size)
    hover();
})









