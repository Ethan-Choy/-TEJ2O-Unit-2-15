/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ethan Choy
 * Created on: Sep 2025
 * This program ...
*/

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables
let sprite: game.LedSprite = null
let sprite1: number = 0
let turn: number = 0

input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    sprite = game.createSprite(0, 0)
    while (sprite1 < 5) {
        sprite.move(1)
        sprite1 = + 1
        turn = + 1

    while (turn > 5) {
        sprite.turn(Direction.Right, 90)
        
    
    }

})