import "../node_modules/footer-zkrnem/styles.css"
import "./style.css"

import { homepage } from "./homepage"
homepage()

import { userBoardListener, pcBoardListener } from "./boardsListener"
/* userBoardListener()
pcBoardListener() */

import { insertUserBoard, insertComputerBoard } from "./app/printBoard"
insertUserBoard()
insertComputerBoard()