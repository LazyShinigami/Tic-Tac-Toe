const cell = Array.from(document.getElementsByClassName("cell"))

let player = ""
let turn = 0
const saveButton = document.getElementById("save")
saveButton.addEventListener("click", acceptValue)

let playerOneName = "Player 1"
let playerTwoName = "Player 2"
function acceptValue() {
    playerOneName = document.getElementById("playerOneName").value
    playerTwoName = document.getElementById("playerTwoName").value
    // console.log("1st player: ", playerOneName);
    // console.log("2nd player: ", playerTwoName);
    saveButton.remove()
    let inputs = Array.from(document.getElementsByTagName("input"))
    inputs[0].remove()
    inputs[1].remove()
    let p1 = document.getElementById("P1")  // setting name for player 1
    p1.innerText = playerOneName
    let p2 = document.getElementById("P2")  // setting name for player 2
    p2.innerText = playerTwoName
    let a = document.getElementById("a")
    a.innerText = playerOneName
    let b = document.getElementById("b")
    b.innerText = playerTwoName
    setBoard()
}

function setBoard() {
    for (let i = 0; i < cell.length; i++) {
        const tile = document.createElement("img")
        tile.classList = "tile"
        tile.src = "images/White.png"
        tile.id = i
        tile.addEventListener("click", clickCheck)
        cell[i].append(tile)
    }
    let turnMessagge = document.getElementById("playerTurn")
    turnMessagge.innerText = playerOneName + "'s Turn!"
}

const victory = [['0','1','2'], ['3','4','5'], ['6','7','8'], ['0','3','6'], ['1','4','7'], ['2','5','8'], ['0','4','8'], ['2','4','6']]
let playerOneId = []
let playerTwoId = []
function clickCheck() {
    // console.log(this.id);

    let turnMessagge = document.getElementById("playerTurn")
    visible()
    setTimeout(invisible, 1000)

    if (turn % 2 === 0) {
        player = "Player1"
        this.src = "images/Cross.jpg"
        playerOneId.push(this.id)
        turnMessagge.innerText = playerTwoName + "'s Turn!"
        
    }
    else {
        player = "Player2"
        this.src = "images/Circle.webp"
        playerTwoId.push(this.id)
        turnMessagge.innerText = playerOneName + "'s Turn!"
    }
    this.removeEventListener("click", clickCheck)
    turn++

    if (playerOneId.length > 2 || playerTwoId.length > 2) {
        checkVictory(player)
    }
}
let victor = ''
let playerIDs = ''
let pointsA = 0
let pointsB = 0
function checkVictory(playerUnknown) {
    if (playerUnknown === "Player1") {
        playerIDs = playerOneId
    }
    else if (playerUnknown === "Player2") {
        playerIDs = playerTwoId
    }
    let ch = 0
    for (let i = 0; i < victory.length; i++) {
        let a1 = victory[i]
        
        const containsAll = a1.every(element => {
            return playerIDs.indexOf(element) !== -1;
        });
        if (playerOneId.length + playerTwoId.length === 9) {
            result.innerText = "It's a draw!"
            setTimeout(resetBoard, 2000)
            gameEnd = true
            playerOneId = []
            playerTwoId = []
        }
        if (containsAll === true) {
            victor = playerUnknown
            gameEnd = true
            playerOneId = []
            playerTwoId = []
            if (gameEnd === true) {
                setTimeout(resetBoard, 2000)        
            }
            //cell.forEach(removeEventListener("click", clickCheck))
            let AllTiles = Array.from(document.getElementsByClassName("cell"))
            for (let i = 0; i < AllTiles.length; i++) {
                let resetTile = Array.from(AllTiles[i].getElementsByClassName("tile"))
                resetTile[0].removeEventListener("click", clickCheck)
            }
            let result = document.getElementById("result")
            if (victor === "Player1" ) {
                victor = playerOneName
                let score = document.getElementById("scoreOne")
                pointsA++
                score.innerText = pointsA
            }
            else if (victor === "Player2") {
                victor = playerTwoName
                let score = document.getElementById("scoreTwo")
                pointsB++
                score.innerText = pointsB
            }
            result.innerText = victor + " Wins!"
            break
        } 
    }
}
let gameEnd = false
function resetBoard() {
    let AllTiles = Array.from(document.getElementsByClassName("cell"))
    for (let i = 0; i < AllTiles.length; i++) {
        let resetTile = Array.from(AllTiles[i].getElementsByClassName("tile"))
        resetTile[0].src = "images/White.png"
        resetTile[0].addEventListener("click", clickCheck)
    }
    let result = document.getElementById("result")
    result.innerText = ""
    gameEnd = false
}
function visible() {
    let turnMessagge = document.getElementById("playerTurn")
    turnMessagge.style.opacity = "1"
}
function invisible() {
    let turnMessagge = document.getElementById("playerTurn")
    turnMessagge.style.opacity = "0"
}


const isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

if (isMobile) {
    let css = document.getElementById("css")
    css.href = "TTT_Mobile.css"
    console.log("molibe");
}
else {
    let css = document.getElementById("css")
    css.href = "TTT.css"
    console.log("not mobile");
}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }