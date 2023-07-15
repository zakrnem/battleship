import "../node_modules/footer-zkrnem/styles.css"
import "./style.css"

import { homepage } from "./homepage"
homepage()

import { userBoardListener, pcBoardListener } from "./boardsListener"
userBoardListener()
pcBoardListener()

import { insertBoards } from "./app/printBoard"
insertBoards()