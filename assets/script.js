// get DOM elements
const scoreEl = document.querySelector(".score");
const gameGridEl = document.querySelector(".game--grid");
const btnUpEl = document.querySelector(".btn--up");
const btnDownEl = document.querySelector(".btn--down");
const btnLeftEl = document.querySelector(".btn--left");
const btnRightEl = document.querySelector(".btn--right");
const overlayEl = document.querySelector(".overlay");
const modalScoreEl = document.querySelector(".modal__score");

const layout = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0,
  1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1,
  1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 0, 1, 1, 4, 1, 1, 2, 2, 2, 2, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
  4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4,
  4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4,
  4, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1,
  1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0,
  0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1,
];
// 0 - pac-dots
// 1 - wall
// 2 - ghost-lair
// 3 - power-pellet
// 4 - empty

// max score 238
let score = 0;
const width = 28;
const tabletopSquares = [];

// Building the tabletop

layout.forEach((square, i) => {
  const el = document.createElement("div");
  el.classList.add("square");
  el.id = parseInt(i);

  // debug
  // el.textContent = i;

  switch (square) {
    case 0:
      el.classList.add("pac-dot");
      break;
    case 1:
      el.classList.add("wall");
      break;
    case 2:
      el.classList.add("ghost-lair");
      break;
    case 3:
      el.classList.add("power-pellet");
      break;
    case 4:
      el.classList.add("empty");
      break;
  }
  gameGridEl.appendChild(el);
  tabletopSquares.push(el);
});

// PacHunters Ghost!
class Ghost {
  constructor(classCss, startSquareIndex, speed, tabletopSqrs, outLairPoint) {
    this.classCss = classCss;
    this.classMain = "ghost";
    this.startSquareIndex = startSquareIndex;
    this.currentSquareIndex = startSquareIndex;
    this.speed = speed;
    this.tabletopSqrs = tabletopSqrs;
    this.isScared = false;
    this.lastDirections = [null];
    this.outLairPoint = outLairPoint;
  }

  // calculate next random movement trying to not go back
  randomMove() {
    const position = this.currentSquareIndex;
    const directions = [
      position + 1,
      position - 1,
      position + width,
      position - width,
    ];
    let nextRandomDirections = [];
    let pacmanPos = getPacmanIndex(tabletopSquares);

    directions.forEach((direction) => {
      if (
        !isWall(this.tabletopSqrs[direction]) &&
        !isGhost(this.tabletopSqrs[direction]) &&
        direction != position &&
        !this.lastDirections?.includes(direction)
      ) {
        nextRandomDirections.push(direction);
      }
    });

    // if elements nextRandomDirections >6, shift 1 element
    if (this.lastDirections.length > 6) this.lastDirections.shift();

    // if ghost is in the ghostLair, first exit there
    if (isGhostLair(this.tabletopSqrs[position])) pacmanPos = this.outLairPoint;

    const newPosition = getCloserDirectionToB(
      nextRandomDirections,
      pacmanPos,
      width
    );
    console.log(newPosition);
    // remember the new movement
    this.lastDirections.push(newPosition);
    console.log(this.lastDirections);

    // guard clause
    if (!position || !newPosition) return;

    // change the CSS from the squares -> moving the ghost
    if (this.tabletopSqrs[position].classList.contains("ghost_scared")) {
      this.tabletopSqrs[position].classList.remove("ghost_scared");
      this.tabletopSqrs[newPosition].classList.add("ghost_scared");
    }
    this.tabletopSqrs[position].classList.remove(this.classCss, this.classMain);
    this.tabletopSqrs[newPosition].classList.add(this.classCss, this.classMain);

    this.currentSquareIndex = newPosition;

    // check if the square is pacman (the origin or the new square)
    if (
      isPacman(this.tabletopSqrs[newPosition]) ||
      isPacman(this.tabletopSqrs[position])
    ) {
      if (this.tabletopSqrs[newPosition].classList.contains("ghost_scared")) {
        console.log("ghost eat!");
        clearInterval(this.intervalID);
        this.tabletopSqrs[newPosition].classList.remove(
          this.classCss,
          this.classMain,
          "ghost_scared"
        );
        this.currentSquareIndex = null;
      } else {
        console.log("muertooo");
        pauseGame();
      }
    }
  }

  startMoving() {
    this.intervalID = setInterval(this.randomMove.bind(this), this.speed);
  }
}

const ghosts = [
  new Ghost("ghost_pink", 348, 600, tabletopSquares, 235),
  new Ghost("ghost_red", 351, 450, tabletopSquares, 239),
  new Ghost("ghost_green", 377, 650, tabletopSquares, 292),
  new Ghost("ghost_black", 378, 550, tabletopSquares, 293),
];

ghosts.forEach((ghost) => {
  tabletopSquares[ghost.startSquareIndex].classList.add(
    ghost.classMain,
    ghost.classCss
  );
  ghost.startMoving();
});

// set origin pacman on position 489
tabletopSquares[489].classList.add("pacman");

/////////////////////////////
// Key Events to move pacman:

// Touch
btnDownEl.addEventListener("touchstart", downHandler);
btnLeftEl.addEventListener("touchstart", leftHandler);
btnRightEl.addEventListener("touchstart", rightHandler);
btnUpEl.addEventListener("touchstart", upHandler);

document.body.addEventListener("touchstart", (e) => e.preventDefault());

function downHandler(e) {
  e.preventDefault();
  arrowDown();
}
function upHandler(e) {
  e.preventDefault();
  arrowUp();
}
function leftHandler(e) {
  e.preventDefault();
  arrowLeft();
}
function rightHandler(e) {
  e.preventDefault();
  arrowRight();
}

// Keyboard
document.body.addEventListener("keydown", eventHandler);

function eventHandler(e) {
  e.preventDefault();
  const key = e.code;
  switch (key) {
    case "ArrowUp":
      arrowUp();
      break;
    case "ArrowDown":
      arrowDown();
      break;
    case "ArrowLeft":
      arrowLeft();
      break;
    case "ArrowRight":
      arrowRight();
      break;
  }
}

function arrowDown() {
  const pacman = tabletopSquares.find((square) =>
    square.classList.contains("pacman")
  );
  if (!pacman) return;
  const nextSquare = tabletopSquares[parseInt(pacman.id) + width];

  pacEatDots(nextSquare);
  movePacman(pacman, nextSquare);
}

function arrowUp() {
  const pacman = tabletopSquares.find((square) =>
    square.classList.contains("pacman")
  );
  if (!pacman) return;
  const nextSquare = tabletopSquares[parseInt(pacman.id) - width];

  pacEatDots(nextSquare);
  movePacman(pacman, nextSquare);
}

function arrowLeft() {
  const pacman = tabletopSquares.find((square) =>
    square.classList.contains("pacman")
  );
  if (!pacman) return;
  let nextSquare = tabletopSquares[parseInt(pacman.id) - 1];

  if (isEdgeLeftSquare(nextSquare)) {
    nextSquare = tabletopSquares[390];
  }
  pacEatDots(nextSquare);
  movePacman(pacman, nextSquare);
}

function arrowRight() {
  const pacman = tabletopSquares.find((square) =>
    square.classList.contains("pacman")
  );
  if (!pacman) return;
  let nextSquare = tabletopSquares[parseInt(pacman.id) + 1];
  if (isEdgeRightSquare(nextSquare)) {
    nextSquare = tabletopSquares[365];
  }
  pacEatDots(nextSquare);
  movePacman(pacman, nextSquare);
}

function pacEatDots(square) {
  if (isPacDot(square)) {
    square.classList.remove("pac-dot");
    score++;
  }
  if (isPower(square)) {
    square.classList.remove("power-pellet");
    score++;

    // make all ghost scared
    ghosts.forEach((ghost) => {
      ghost.isScared = true;
      tabletopSquares[ghost.currentSquareIndex]?.classList.add("ghost_scared");
      setTimeout(function () {
        tabletopSquares[ghost.currentSquareIndex]?.classList.remove(
          "ghost_scared"
        );
        ghost.isScared = false;
      }, 6000);
    });
  }
  scoreEl.textContent = score;
  if (score === 238) {
    pauseGame();
  }
}

function movePacman(pacman, nextSquare) {
  if (isGhostLair(nextSquare) || isWall(nextSquare)) return;

  pacman.classList.remove("pacman");
  nextSquare.classList.add("pacman");
}

function pauseGame() {
  ghosts.forEach((ghost) => clearInterval(ghost.intervalID));
  document.body.removeEventListener("keydown", eventHandler);
  showGameOver(score === 238);
}

function showGameOver(isWin) {
  if (isWin) {
    modalScoreEl.textContent = `You won with a score of ${score}`;
  } else {
    modalScoreEl.textContent = `You lose with a score of ${score}`;
  }
  overlayEl.classList.remove("hidden");
}

// helpers
function getCloserDirectionToB(directions, pointB, width) {
  const directionDistances = directions.map((direction) => {
    const originCoord = [getX(direction, width), getY(direction, width)];
    const endCoord = [getX(pointB, width), getY(pointB, width)];
    const distance = getDistance(originCoord, endCoord);
    return distance;
  });
  const minInd = directionDistances.indexOf(Math.min(...directionDistances));
  console.log(directions, directions[minInd]);
  return directions[minInd];
}

function getX(index, cols) {
  return index % cols;
}
function getY(index, rows) {
  return parseInt(index / rows);
}

function getDistance(pointA, pointB) {
  const [aX, aY] = [...pointA];
  const [bX, bY] = [...pointB];

  // compare the distance from the coord and asign a final value, to compare later with other points distances.
  return Math.sqrt(Math.abs(aX - bX) ** 2 + Math.abs(aY - bY) ** 2);
}

function getPacmanIndex(squares) {
  return squares.find((square) => square.classList.contains("pacman")).id;
}

function isGhost(square) {
  return square.classList.contains("ghost");
}

function isEdgeLeftSquare(square) {
  return square.id === "364";
}
function isEdgeRightSquare(square) {
  return square.id === "391";
}

function isPower(square) {
  return square.classList.contains("power-pellet");
}
function isGhostLair(square) {
  return square.classList.contains("ghost-lair");
}
function isWall(square) {
  return square.classList.contains("wall");
}
function isPacDot(square) {
  return square.classList.contains("pac-dot");
}
function isGhost(square) {
  return square.classList.contains("ghost");
}
function isPacman(square) {
  return square.classList.contains("pacman");
}
function isPacDotsEmpty() {
  return score >= 238;
}
