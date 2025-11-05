/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ethan Choy
 * Created on: Sep 2025
 * This program uses nested loops to make sprties go around the edge of the microbit.
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
    while (sprite1 < 16) {
        basic.pause(200)
        sprite.move(1)
        sprite1 = sprite1 + 1
        turn = turn + 1
        basic.pause(200)

    while (turn > 3) {
        sprite.turn(Direction.Right, 90)
        turn = 0
        }
    } 
        sprite.delete()
        basic.showIcon(IconNames.Happy)
        sprite1 = 0
        turn = 0
    })
