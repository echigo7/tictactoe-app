const Board = document.querySelector("#gameboard");
const info = document.querySelector("#gameinfo")
const cells = [
    "","","","","","","","",""
]
let go = "cross"
info.textContent = "Cross goes first"


function makeBoard() {
cells.forEach((cell,index) => {
   const allCells = document.createElement("div");
   allCells.classList.add("square")
   allCells.id=index;
   allCells.addEventListener("click",addGo)
   Board.append(allCells)
})
}
makeBoard()

function addGo(e) {
    const display = document.createElement("div");
    display.classList.add(go)
    e.target.append(display)
    go = go === "cross"? "circle":"cross"
    info.textContent = "it is " + go + "'s turn"
    e.target.removeEventListener("click",addGo)
    checkScore()
}

function checkScore() {
    const allSquares = document.querySelectorAll(".square")
    const winningArray = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]
    winningArray.forEach(array => {
    const crossWins =    array.every(cell =>allSquares[cell].firstChild?.classList.contains("cross") )

    if(crossWins) {
        info.textContent = "Cross has won";
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        return
}
    })

    winningArray.forEach(array => {
    const circleWins =    array.every(cell =>allSquares[cell].firstChild?.classList.contains("circle") )

    if(circleWins) {
        info.textContent = "Circle has won";
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        return
}
    })
 }