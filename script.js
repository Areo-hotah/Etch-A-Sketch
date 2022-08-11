  let container = document.querySelector('.container');

function createGrid(gridSize) { 
  // selecting the HTML container
  let container = document.querySelector('.container');
 


  // adds the flex-container class to the new div.
  // hmm... this doesn't belong here
 /* flexContainer.classList.add('flex-container');

  mainContainer.appendChild(flexContainer);*/

  for(let i = 0; i < gridSize; i++) {
       // creating the flex container for the grid elements.
    let flexContainer = document.createElement('div');

// adds the flex-container class to the new div.
  flexContainer.classList.add('flex-container');

  //appends flexContainer to the main container.
  container.appendChild(flexContainer);

// FIXME: should create multiple cells
// TODO: an internal loop will probably work
    for(let j = 0; j < gridSize; j++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('mouseenter', ()=> cell.style.backgroundColor = "black");
    flexContainer.appendChild(cell); 
    }
  }
}

createGrid(16);

let btn = document.querySelector("#removeContent");
let clear = ()=>{
  // does this actually work
  return container.textContent = "";}

function regenerateDivs (){
  let size = prompt("Please choose the grid size");
  createGrid(size);
}

btn.addEventListener("click", ()=>{ 
  clear();
  regenerateDivs();
   });

