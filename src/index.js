import '../node_modules/footer-zkrnem/styles.css'
import './style.css'

import { homepage } from './homepage'
homepage()

import { boardListener } from './boardListener'
boardListener()

import { game } from './app/game'
game('initialize')

import { placeShipListener } from './app/placeShips'
placeShipListener()
