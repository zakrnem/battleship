/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/checkCoordinates.js":
/*!*************************************!*\
  !*** ./src/app/checkCoordinates.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkCoordinates: () => (/* binding */ checkCoordinates)\n/* harmony export */ });\nfunction checkCoordinates(letterCoordinate, numberCoordinate) {\n  letterCoordinate = letterCoordinate.charCodeAt() < 65 || letterCoordinate.charCodeAt() > 74 ? null : letterCoordinate;\n  numberCoordinate = numberCoordinate > 10 || numberCoordinate < 1 ? null : numberCoordinate;\n  return letterCoordinate === null || numberCoordinate === null ? null : [letterCoordinate, numberCoordinate];\n}\n\n//# sourceURL=webpack://battleship/./src/app/checkCoordinates.js?");

/***/ }),

/***/ "./src/app/coordinateFromId.js":
/*!*************************************!*\
  !*** ./src/app/coordinateFromId.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCoordinatesFromId: () => (/* binding */ getCoordinatesFromId)\n/* harmony export */ });\nfunction getCoordinatesFromId(idNumber) {\n  const idNumberArray = idNumber.toString().split('');\n  let numberCoordinate;\n  let letterCoordinate;\n  if (idNumberArray.length < 2) {\n    numberCoordinate = 1;\n    letterCoordinate = String.fromCharCode(65 + parseInt(idNumberArray[0]));\n  } else {\n    numberCoordinate = parseInt(idNumberArray[0]) + 1;\n    letterCoordinate = String.fromCharCode(65 + parseInt(idNumberArray[1]));\n  }\n  return [letterCoordinate, numberCoordinate];\n}\n\n//# sourceURL=webpack://battleship/./src/app/coordinateFromId.js?");

/***/ }),

/***/ "./src/app/game.js":
/*!*************************!*\
  !*** ./src/app/game.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   buildBoard: () => (/* binding */ buildBoard),\n/* harmony export */   game: () => (/* binding */ game)\n/* harmony export */ });\n/* harmony import */ var _gameFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameFactory */ \"./src/app/gameFactory.js\");\n/* harmony import */ var _reportPlayerTurn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reportPlayerTurn */ \"./src/app/reportPlayerTurn.js\");\n/* harmony import */ var _insertShip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insertShip */ \"./src/app/insertShip.js\");\n/* harmony import */ var _printBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./printBoard */ \"./src/app/printBoard.js\");\n/* harmony import */ var _reportAllShipsSunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportAllShipsSunk */ \"./src/app/reportAllShipsSunk.js\");\n\n\n\n\n\nconst board = buildBoard();\nfunction game(typeOfOperation, attackCoordinates) {\n  if (typeOfOperation === 'initialize') {\n    (0,_printBoard__WEBPACK_IMPORTED_MODULE_3__.insertBoard)('user', board.user);\n    (0,_printBoard__WEBPACK_IMPORTED_MODULE_3__.insertBoard)('pc', board.computer);\n  }\n  if (typeOfOperation === 'attack') {\n    let areAllShipsSunk = board.computer.receiveAttack(attackCoordinates);\n    (0,_reportAllShipsSunk__WEBPACK_IMPORTED_MODULE_4__.reportStatus)(areAllShipsSunk);\n  }\n  (0,_reportPlayerTurn__WEBPACK_IMPORTED_MODULE_1__.gameMessages)(board);\n}\nfunction buildBoard() {\n  const game = {\n    user: (0,_gameFactory__WEBPACK_IMPORTED_MODULE_0__.gameboard)(),\n    computer: (0,_gameFactory__WEBPACK_IMPORTED_MODULE_0__.gameboard)()\n  };\n  //Build initial user board\n  (0,_insertShip__WEBPACK_IMPORTED_MODULE_2__.insertShip)(game.user, 1, ['B', 6], 'horizontal');\n  (0,_insertShip__WEBPACK_IMPORTED_MODULE_2__.insertShip)(game.user, 2, ['F', 9], 'horizontal');\n  (0,_insertShip__WEBPACK_IMPORTED_MODULE_2__.insertShip)(game.user, 3, ['C', 1], 'vertical');\n  (0,_insertShip__WEBPACK_IMPORTED_MODULE_2__.insertShip)(game.user, 4, ['D', 8], 'vertical');\n  (0,_insertShip__WEBPACK_IMPORTED_MODULE_2__.insertShip)(game.user, 5, ['I', 4], 'vertical');\n  game.user.receiveAttack(['A', 1]);\n  game.user.receiveAttack(['H', 6]);\n\n  //Build initial computer board\n  (0,_insertShip__WEBPACK_IMPORTED_MODULE_2__.insertShip)(game.computer, 1, ['B', 6], 'horizontal');\n  (0,_insertShip__WEBPACK_IMPORTED_MODULE_2__.insertShip)(game.computer, 2, ['B', 2], 'horizontal');\n  (0,_insertShip__WEBPACK_IMPORTED_MODULE_2__.insertShip)(game.computer, 3, ['J', 6], 'vertical');\n  (0,_insertShip__WEBPACK_IMPORTED_MODULE_2__.insertShip)(game.computer, 4, ['G', 1], 'vertical');\n  (0,_insertShip__WEBPACK_IMPORTED_MODULE_2__.insertShip)(game.computer, 5, ['I', 4], 'vertical');\n  game.computer.receiveAttack(['F', 4]);\n  game.computer.receiveAttack(['G', 8]);\n  return game;\n}\n\n//# sourceURL=webpack://battleship/./src/app/game.js?");

/***/ }),

/***/ "./src/app/gameFactory.js":
/*!********************************!*\
  !*** ./src/app/gameFactory.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameboard: () => (/* binding */ gameboard),\n/* harmony export */   ship: () => (/* binding */ ship)\n/* harmony export */ });\n/* harmony import */ var _checkCoordinates__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkCoordinates */ \"./src/app/checkCoordinates.js\");\n/* harmony import */ var _idFromCoordinates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./idFromCoordinates */ \"./src/app/idFromCoordinates.js\");\n\n\nfunction ship(length) {\n  return {\n    length: length,\n    hits: 0,\n    hit: function () {\n      if (this.hits < this.length) ++this.hits;\n      return this.isSunk();\n    },\n    isSunk: function () {\n      return this.hits === this.length ? true : false;\n    }\n  };\n}\nfunction gameboard() {\n  function buildGrid() {\n    const boardObj = {};\n    for (let row = 1; row <= 10; row++) {\n      boardObj[row] = {};\n      for (let column = 'A'; column <= 'J'; column = String.fromCharCode(column.charCodeAt(0) + 1)) {\n        boardObj[row][column] = '_';\n      }\n    }\n    return boardObj;\n  }\n  return {\n    grid: buildGrid(),\n    ship1: null,\n    ship2: null,\n    ship3: null,\n    ship4: null,\n    ship5: null,\n    receiveAttack: function (attackCoordinates) {\n      const coordinates = (0,_checkCoordinates__WEBPACK_IMPORTED_MODULE_0__.checkCoordinates)(attackCoordinates[0], attackCoordinates[1]);\n      const letterCoordinate = coordinates[0];\n      const numberCoordinate = coordinates[1];\n      let boardCell = this.grid[numberCoordinate][letterCoordinate];\n      const initialGrid = this.grid;\n      const initialBoardCell = initialGrid[numberCoordinate][letterCoordinate];\n      if (initialBoardCell === 'X') {\n        throw new Error('Cell has already been attacked');\n      }\n      if (!isNaN(parseInt(initialBoardCell))) {\n        (0,_idFromCoordinates__WEBPACK_IMPORTED_MODULE_1__.paintAttackedShip)(attackCoordinates);\n      }\n      switch (true) {\n        case boardCell === '1':\n          this.ship1.hit();\n          break;\n        case boardCell === '2':\n          this.ship2.hit();\n          break;\n        case boardCell === '3':\n          this.ship3.hit();\n          break;\n        case boardCell === '4':\n          this.ship4.hit();\n          break;\n        case boardCell === '5':\n          this.ship5.hit();\n          break;\n      }\n      this.grid[numberCoordinate][letterCoordinate] = 'X';\n      if (this.ship1 === null || this.ship2 === null || this.ship3 === null || this.ship4 === null || this.ship5 === null) {\n        return false;\n      } else {\n        return this.allShipsSunk();\n      }\n    },\n    locateShipCell: function (shipNumber, coordinates) {\n      const letterCoordinate = coordinates[0];\n      const numberCoordinate = coordinates[1];\n      let boardCell = this.grid[numberCoordinate][letterCoordinate];\n      if (boardCell === '_') {\n        this.grid[numberCoordinate][letterCoordinate] = shipNumber.toString();\n      } else if (typeof boardCell === 'object') {\n        throw new Error(`There's another ship in this location`);\n      }\n      return this.grid;\n    },\n    allShipsSunk: function () {\n      return this.ship1.isSunk() && this.ship2.isSunk() && this.ship3.isSunk() && this.ship4.isSunk() && this.ship5.isSunk() ? true : false;\n    }\n  };\n}\n\n//# sourceURL=webpack://battleship/./src/app/gameFactory.js?");

/***/ }),

/***/ "./src/app/idFromCoordinates.js":
/*!**************************************!*\
  !*** ./src/app/idFromCoordinates.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   idFromCoordinates: () => (/* binding */ idFromCoordinates),\n/* harmony export */   paintAttackedShip: () => (/* binding */ paintAttackedShip)\n/* harmony export */ });\nfunction paintAttackedShip(coordinates) {\n  //DOM calls are making tests fail\n  const cellId = idFromCoordinates(coordinates);\n  const cell = document.getElementById(cellId);\n  cell.style.backgroundColor = 'var(--hit-shot)';\n}\nfunction idFromCoordinates(coordinates) {\n  const letterCoordinate = coordinates[0];\n  const numberCoordinate = coordinates[1];\n  let digit1 = numberCoordinate - 1;\n  let digit2 = letterCoordinate.charCodeAt() - 65;\n  let result;\n  if (digit1 === 0) {\n    result = 'pc' + digit2;\n  } else {\n    result = 'pc' + digit1 + digit2;\n  }\n  return result;\n}\n\n//# sourceURL=webpack://battleship/./src/app/idFromCoordinates.js?");

/***/ }),

/***/ "./src/app/insertShip.js":
/*!*******************************!*\
  !*** ./src/app/insertShip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   insertShip: () => (/* binding */ insertShip)\n/* harmony export */ });\n/* harmony import */ var _gameFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameFactory */ \"./src/app/gameFactory.js\");\n/* harmony import */ var _checkCoordinates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkCoordinates */ \"./src/app/checkCoordinates.js\");\n\n\nfunction insertShip(gameObj, shipNumber, startCoordinate, orientation) {\n  const length = ['', 5, 4, 3, 3, 2];\n  switch (true) {\n    case shipNumber === 1:\n      gameObj.ship1 = new _gameFactory__WEBPACK_IMPORTED_MODULE_0__.ship(length[shipNumber]);\n      insertCompleteShip(length, shipNumber, startCoordinate, orientation, gameObj);\n      break;\n    case shipNumber === 2:\n      gameObj.ship2 = new _gameFactory__WEBPACK_IMPORTED_MODULE_0__.ship(length[shipNumber]);\n      insertCompleteShip(length, shipNumber, startCoordinate, orientation, gameObj);\n      break;\n    case shipNumber === 3:\n      gameObj.ship3 = new _gameFactory__WEBPACK_IMPORTED_MODULE_0__.ship(length[shipNumber]);\n      insertCompleteShip(length, shipNumber, startCoordinate, orientation, gameObj);\n      break;\n    case shipNumber === 4:\n      gameObj.ship4 = new _gameFactory__WEBPACK_IMPORTED_MODULE_0__.ship(length[shipNumber]);\n      insertCompleteShip(length, shipNumber, startCoordinate, orientation, gameObj);\n      break;\n    case shipNumber === 5:\n      gameObj.ship5 = new _gameFactory__WEBPACK_IMPORTED_MODULE_0__.ship(length[shipNumber]);\n      insertCompleteShip(length, shipNumber, startCoordinate, orientation, gameObj);\n      break;\n  }\n}\nfunction insertCompleteShip(length, shipNumber, startCoordinate, orientation, gameObj) {\n  const positionsArray = getPositionsArray(length[shipNumber], startCoordinate, orientation);\n  positionsArray.forEach(coordinates => {\n    gameObj.locateShipCell(shipNumber, coordinates);\n  });\n}\nfunction getPositionsArray(length, startCoordinate, orientation) {\n  const positionsArray = [];\n  let coordinates = (0,_checkCoordinates__WEBPACK_IMPORTED_MODULE_1__.checkCoordinates)(startCoordinate[0], startCoordinate[1]);\n  if (coordinates === null) {\n    throw new Error('Start position is outside of board');\n  } else {\n    let letterCoordinate = coordinates[0];\n    let numberCoordinate = coordinates[1];\n    if (orientation === 'horizontal') {\n      for (let i = 0; i < length; i++) {\n        if (i === 0) positionsArray.push([letterCoordinate, numberCoordinate]);else {\n          letterCoordinate = String.fromCharCode(letterCoordinate[0].charCodeAt(0) + 1);\n          coordinates = (0,_checkCoordinates__WEBPACK_IMPORTED_MODULE_1__.checkCoordinates)(letterCoordinate, numberCoordinate);\n          positionsArray.push(coordinates);\n        }\n      }\n    } else if (orientation === 'vertical') {\n      for (let i = 0; i < length; i++) {\n        if (i === 0) positionsArray.push([letterCoordinate, numberCoordinate]);else {\n          numberCoordinate += 1;\n          coordinates = (0,_checkCoordinates__WEBPACK_IMPORTED_MODULE_1__.checkCoordinates)(letterCoordinate, numberCoordinate);\n          positionsArray.push(coordinates);\n        }\n      }\n    }\n    if (coordinates === null) {\n      throw new Error('Part of the ship is outside the board');\n    } else {\n      return positionsArray;\n    }\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/app/insertShip.js?");

/***/ }),

/***/ "./src/app/printBoard.js":
/*!*******************************!*\
  !*** ./src/app/printBoard.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arrayFromBoard: () => (/* binding */ arrayFromBoard),\n/* harmony export */   insertBoard: () => (/* binding */ insertBoard)\n/* harmony export */ });\nfunction arrayFromBoard(board) {\n  const output = [];\n  for (let key1 in board) {\n    const arr = board[key1];\n    for (let key2 in arr) {\n      output.push(arr[key2]);\n    }\n  }\n  return output;\n}\nfunction insertBoard(boardSelector, board) {\n  const boardArray = arrayFromBoard(board.grid);\n  const DOMgrid = document.querySelectorAll(`.${boardSelector}.cell`);\n  for (let i = 0; i < 100; i++) {\n    const ObjCell = boardArray[i];\n    const ObjCellNumber = parseInt(ObjCell);\n    const DOMcell = DOMgrid[i];\n    if (!isNaN(ObjCellNumber)) {\n      DOMcell.style.backgroundColor = 'var(--ship-color)';\n    }\n    if (ObjCell === 'X') {\n      DOMcell.style.backgroundColor = 'var(--missed-shot)';\n    }\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/app/printBoard.js?");

/***/ }),

/***/ "./src/app/reportAllShipsSunk.js":
/*!***************************************!*\
  !*** ./src/app/reportAllShipsSunk.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   reportStatus: () => (/* binding */ reportStatus)\n/* harmony export */ });\nfunction reportStatus(boolean) {\n  //We could add a remaining ships notification checking for the status\n  //Of each ship after every attack\n  if (boolean === true) {\n    const pcMessage = document.getElementById('pc-message');\n    pcMessage.textContent = 'All ships have sunk';\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/app/reportAllShipsSunk.js?");

/***/ }),

/***/ "./src/app/reportPlayerTurn.js":
/*!*************************************!*\
  !*** ./src/app/reportPlayerTurn.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   gameMessages: () => (/* binding */ gameMessages)\n/* harmony export */ });\nfunction gameMessages(board) {\n  const messagePara = document.getElementById('message');\n  let message;\n  if (board.user.ship1 !== null && board.user.ship2 !== null && board.user.ship3 !== null && board.user.ship4 !== null && board.user.ship5 !== null) {\n    message = `It's your turn to attack the opponent's board.`;\n  } else {\n    message = `Please insert the ships on the left board`;\n  }\n  messagePara.textContent = message;\n}\n\n//# sourceURL=webpack://battleship/./src/app/reportPlayerTurn.js?");

/***/ }),

/***/ "./src/boardsListener.js":
/*!*******************************!*\
  !*** ./src/boardsListener.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   boardsListener: () => (/* binding */ boardsListener)\n/* harmony export */ });\n/* harmony import */ var _app_coordinateFromId__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/coordinateFromId */ \"./src/app/coordinateFromId.js\");\n/* harmony import */ var _app_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/game */ \"./src/app/game.js\");\n\n\nfunction boardsListener() {\n  boardListener();\n}\nfunction boardListener() {\n  const pcBoard = document.querySelector('.pc-board');\n  pcBoard.addEventListener('mouseover', e => {\n    if (e.target.style.backgroundColor === '') {\n      e.target.style.transition = \"background-color 0.2s ease-in\";\n      e.target.style.backgroundColor = 'var(--mouseover)';\n      setTimeout(() => {\n        e.target.style.transition = \"background-color 0.2s ease-in\";\n        e.target.style.backgroundColor = '';\n      }, 300);\n    }\n  });\n  pcBoard.addEventListener('click', e => {\n    const idNumber = parseInt(e.target.id.match(/\\d+/)[0]);\n    const attackCoordinates = (0,_app_coordinateFromId__WEBPACK_IMPORTED_MODULE_0__.getCoordinatesFromId)(idNumber);\n    e.target.style.backgroundColor = 'var(--missed-shot)';\n    (0,_app_game__WEBPACK_IMPORTED_MODULE_1__.game)('attack', attackCoordinates);\n  });\n}\n\n//# sourceURL=webpack://battleship/./src/boardsListener.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homepage: () => (/* binding */ homepage)\n/* harmony export */ });\n/* harmony import */ var footer_zkrnem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! footer-zkrnem */ \"./node_modules/footer-zkrnem/index.js\");\n\nfunction homepage() {\n  (0,footer_zkrnem__WEBPACK_IMPORTED_MODULE_0__.footer)();\n  const content = document.getElementById('content');\n  const container = document.createElement('div');\n  container.className = 'container';\n  const title = document.createElement('p');\n  title.textContent = 'Battleship';\n  title.className = 'title-logo';\n  const message = document.createElement('p');\n  message.textContent = 'Welcome to the game.';\n  message.id = 'message';\n  const userSide = document.createElement('div');\n  userSide.className = 'user-side';\n  const userBoard = document.createElement('div');\n  userBoard.className = 'user-board';\n  for (let i = 0; i < 100; i++) {\n    const userCell = document.createElement('div');\n    userCell.id = 'user' + i;\n    userCell.className = 'user cell';\n    userBoard.append(userCell);\n  }\n  const userBoardTitle = document.createElement('p');\n  userBoardTitle.textContent = 'Player board';\n  userBoardTitle.className = 'user-board-title';\n  const userAliveShips = document.createElement('p');\n  userAliveShips.id = 'user-message';\n  userSide.append(userBoardTitle, userBoard, userAliveShips);\n  const pcSide = document.createElement('div');\n  pcSide.className = 'pc-side';\n  const pcBoard = document.createElement('div');\n  pcBoard.className = 'pc-board';\n  for (let j = 0; j < 100; j++) {\n    const pcCell = document.createElement('div');\n    pcCell.id = 'pc' + j;\n    pcCell.className = 'pc cell';\n    pcBoard.append(pcCell);\n  }\n  const pcBoardTitle = document.createElement('p');\n  pcBoardTitle.textContent = 'Computer board';\n  pcBoardTitle.className = 'pc-board-title';\n  const pcAliveShips = document.createElement('p');\n  pcAliveShips.id = 'pc-message';\n  pcSide.append(pcBoardTitle, pcBoard, pcAliveShips);\n  container.append(userSide, pcSide);\n  content.append(title, message, container);\n}\n\n//# sourceURL=webpack://battleship/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_footer_zkrnem_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/footer-zkrnem/styles.css */ \"./node_modules/footer-zkrnem/styles.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _boardsListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boardsListener */ \"./src/boardsListener.js\");\n/* harmony import */ var _app_game__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/game */ \"./src/app/game.js\");\n\n\n\n(0,_homepage__WEBPACK_IMPORTED_MODULE_2__.homepage)();\n\n(0,_boardsListener__WEBPACK_IMPORTED_MODULE_3__.boardsListener)();\n\n(0,_app_game__WEBPACK_IMPORTED_MODULE_4__.game)('initialize');\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/footer-zkrnem/styles.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/footer-zkrnem/styles.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    margin: 0;\n    padding: 0;\n    font-size: inherit;\n    font-family: inherit;\n    user-select: none;\n}\n\nhtml, body {\n    height: 100%;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    flex: 1 0 auto;\n}\n\nfooter {\n    background-color: black;\n    color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0.4rem 0;\n    gap: 0.5rem;\n    flex-shrink: 0;\n    margin-top: 1.5rem;\n    font-weight: 300;\n}\n\n.github {\n    height: 1.5rem;\n    width:auto;\n    fill: white\n}\n\n.github:hover {\n    transform: rotate(720deg);\n    transition: transform 1.5s;\n    fill: white\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./node_modules/footer-zkrnem/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/RussoOne-Regular.ttf */ \"./src/fonts/RussoOne-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Ubuntu-Medium.ttf */ \"./src/fonts/Ubuntu-Medium.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --text-color: #2b2b1a;\n    --footer-color: #575755;\n    --background-color: #f1f0ea;\n    --mouseover: #baba99;\n    --ship-color: #000a2d;\n    --missed-shot: #e23c3c;\n    --hit-shot: #4b0000;\n}\n\n@font-face {\n    font-family: title;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n}\n\n@font-face {\n    font-family: para;\n    src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n}\n\nbody {\n    background-color: var(--background-color);\n    font-family: para;\n    color: var(--text-color);\n}\n\n#content {\n    align-items: center;\n}\n\n.container {\n    display: flex;\n    align-items: center;\n    flex-grow: 1;\n    width: 100vw;\n    justify-content: space-around;\n}\n\n.title-logo {\n    font-family: title, 'Trebuchet MS', 'Lucida Sans Unicode';\n    font-size: 3.5rem;\n}\n\n#message {\n    margin-top: 1.5rem;\n}\n\n.user-side, .pc-side {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.5rem;\n    font-size: 0.85rem;\n}\n\n.user-board, .pc-board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    grid-template-rows: repeat(10, 1fr);\n    margin-bottom: 0.5rem;\n}\n\n.cell {\n    border: 1px solid var(--footer-color);\n    height: 1.75rem;\n    aspect-ratio: 1/1;\n    margin: 0 -1px -1px 0;\n    font-size: 2rem;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter {\n    background-color: var(--footer-color);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/footer-zkrnem/index.js":
/*!*********************************************!*\
  !*** ./node_modules/footer-zkrnem/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   footer: () => (/* binding */ footer)\n/* harmony export */ });\nfunction footer() {\n    let footer = document.createElement('footer')\n    footer.innerHTML = 'Made by Zakrnem <a href=\"http://github.com/zakrnem\"><svg class=\"github\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z\"/></svg></a>'\n    \n    let body = document.querySelector('body')\n    return body.appendChild(footer)\n}\n\n//# sourceURL=webpack://battleship/./node_modules/footer-zkrnem/index.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/footer-zkrnem/styles.css":
/*!***********************************************!*\
  !*** ./node_modules/footer-zkrnem/styles.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/footer-zkrnem/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./node_modules/footer-zkrnem/styles.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./src/fonts/RussoOne-Regular.ttf":
/*!****************************************!*\
  !*** ./src/fonts/RussoOne-Regular.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b2f5b287ccb8fd446eae.ttf\";\n\n//# sourceURL=webpack://battleship/./src/fonts/RussoOne-Regular.ttf?");

/***/ }),

/***/ "./src/fonts/Ubuntu-Medium.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Ubuntu-Medium.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ea2efd053b75799d508e.ttf\";\n\n//# sourceURL=webpack://battleship/./src/fonts/Ubuntu-Medium.ttf?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;