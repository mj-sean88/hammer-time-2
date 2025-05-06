sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    simplified.moveToRandomHoleOnGrid(myMole)
})
let myMole: Sprite = null
myMole = sprites.create(assets.image`mole`, SpriteKind.Ball)
scene.setBackgroundImage(assets.image`grid`)
let myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)
carnival.startCountdownGame(15, carnival.WinTypes.Score)
game.onUpdateInterval(1000, function () {
    simplified.moveToRandomHoleOnGrid(myMole)
})
