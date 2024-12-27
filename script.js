// document.addEventListener('DOMContentLoaded', () =>{


// const container = document.getElementById('container')
// const clearButton = document.getElementById("clear")
// const resizeButton = document.getElementById('resize')
// let gridSize = 16

// let isDrawing = false;

// function createGrid(size){
//     container.innerHTML = ''

//     const cellSize = 400 / gridSize;

//     for(let i=0; i<size * size; i++){
//         const cell = document.createElement('div')
//         cell.classList.add ='grid-item';
//         cell.style.flex = `1 0 calc(100% / ${size})`;
//         cell.style.height = `${cellSize}px`;
//         cell.style.background ='blue'
//         cell.style.border ='1px solid black'
//         cell.style.flexWrap = 'wrap'
//         cell.addEventListener('mousedown', ()=>(isDrawing =true));
//         cell.addEventListener('mouseup', ()=> (isDrawing=false));
//         cell.addEventListener('mousemove', ()=>{
//             if(isDrawing){
//                 cell.classList.add("active");
//             }
//         });
//         container.appendChild(cell)
//     }
// }

// clearButton.addEventListener('click', ()=>{
//     document.querySelectorAll('grid-item').forEach(cell =>{
//         cell.classList.remove("active")
//     })
// })

// resizeButton.addEventListener('click', () =>{
//     let newSize = parseInt(prompt("Enter new grid size (e.g., 16):", gridSize))
//     if(newSize && newSize > 0 && newSize <= 100){
//         gridSize = newSize;
//         createGrid(gridSize)
//     }else{
//         alert("pleae enter a number between 1 and 100")
//     }
  
// });
// createGrid(gridSize)
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const container = document.getElementById('container');
//     const clearButton = document.getElementById("clear");
//     const resizeButton = document.getElementById('resize');
//     let gridSize = 16;
//     let isDrawing = false;

//     function createGrid(size) {
//         container.innerHTML = '';
//         const cellSize = 960 / size;

//         for (let i = 0; i < size * size; i++) {
//             const cell = document.createElement('div');
//             cell.classList.add('grid-item');
//             cell.style.flex = `1 0 calc(100% / ${size})`;
//             cell.style.height = `${cellSize}px`;
//             cell.style.background = 'blue';
//             cell.style.border = '1px solid black';
//             cell.addEventListener('mousedown', () => (isDrawing = true));
//             cell.addEventListener('mouseup', () => (isDrawing = false));
//             cell.addEventListener('mousemove', () => {
//                 if (isDrawing) {
//                     cell.classList.add("active");
//                 }
//             });

//             container.appendChild(cell);
//         }
//     }

//     clearButton.addEventListener('click', () => {
//         document.querySelectorAll('.grid-item').forEach(cell => {
//             cell.classList.remove("active");
//         });
//     });

//     resizeButton.addEventListener('click', () => {
//         let newSize = parseInt(prompt("Enter new grid size (e.g., 16):", gridSize));
//         if (newSize && newSize > 0 && newSize <= 100) {
//             gridSize = newSize;
//             createGrid(gridSize);
//         } else {
//             alert("Please enter a number between 1 and 100");
//         }
//     });

//     createGrid(gridSize);
// });


document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('container');
    const clearButton = document.getElementById("clear");
    const resizeButton = document.getElementById('resize');
    let gridSize = 16;
    let isDrawing = false;

    function createGrid(size) {
        container.innerHTML = '';
        const cellSize = 960 / size;

        for (let i = 0; i < size * size; i++) {
            const cell = document.createElement('div');
            cell.classList.add('grid-item');
            cell.style.flex = `1 0 calc(100% / ${size})`;
            cell.style.height = `${cellSize}px`;

            cell.addEventListener('mousedown', () => (isDrawing = true));
            cell.addEventListener('mouseup', () => (isDrawing = false));
            cell.addEventListener('mousemove', () => {
                if (isDrawing) {
                    cell.classList.add("active");
                }
            });

            container.appendChild(cell);
        }
    }

    clearButton.addEventListener('click', () => {
        document.querySelectorAll('.grid-item').forEach(cell => {
            cell.classList.remove("active");
        });
    });

    resizeButton.addEventListener('click', () => {
        let newSize = parseInt(prompt("Enter new grid size (e.g., 16):", gridSize));
        if (newSize && newSize > 0 && newSize <= 100) {
            gridSize = newSize;
            createGrid(gridSize);
        } else {
            alert("Please enter a number between 1 and 100");
        }
    });

    createGrid(gridSize);
});
