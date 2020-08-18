input.onButtonPressed(Button.B, function () {
    Spielfigur.change(LedSpriteProperty.X, 1)
})
input.onButtonPressed(Button.A, function () {
    Spielfigur.change(LedSpriteProperty.X, -1)
})
let Spielfigur: game.LedSprite = null
Spielfigur = game.createSprite(2, 4)
let Hindernis1 = game.createSprite(Math.randomRange(0, 4), 0)
let Hindernis2 = game.createSprite(Math.randomRange(0, 4), 0)
let Hindernis3 = game.createSprite(Math.randomRange(0, 4), 0)
Hindernis1.turn(Direction.Right, 90)
Hindernis2.turn(Direction.Right, 90)
Hindernis3.turn(Direction.Right, 90)
let Zeit = 500
basic.forever(function () {
    if (Hindernis1.get(LedSpriteProperty.Y) == 4) {
        Zeit += -10
        Hindernis1.set(LedSpriteProperty.Y, 0)
        Hindernis1.set(LedSpriteProperty.X, Math.randomRange(0, 4))
    } else {
        Hindernis1.move(1)
    }
    if (Hindernis2.get(LedSpriteProperty.Y) == 4) {
        Hindernis2.set(LedSpriteProperty.Y, 0)
        Hindernis2.set(LedSpriteProperty.X, Math.randomRange(0, 4))
    } else {
        Hindernis2.move(1)
    }
    if (Hindernis3.get(LedSpriteProperty.Y) == 4) {
        Hindernis3.set(LedSpriteProperty.Y, 0)
        Hindernis3.set(LedSpriteProperty.X, Math.randomRange(0, 4))
    } else {
        Hindernis3.move(1)
    }
    basic.pause(Zeit)
    if (Spielfigur.isTouching(Hindernis1)) {
        game.gameOver()
    }
    if (Spielfigur.isTouching(Hindernis2)) {
        game.gameOver()
    }
    if (Spielfigur.isTouching(Hindernis3)) {
        game.gameOver()
    }
})
