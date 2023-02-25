input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 6; index++) {
        music.playTone(587, music.beat(BeatFraction.Whole))
        music.playTone(659, music.beat(BeatFraction.Whole))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Quarter))
        music.playTone(784, music.beat(BeatFraction.Quarter))
        music.playTone(784, music.beat(BeatFraction.Quarter))
        music.playTone(784, music.beat(BeatFraction.Quarter))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Quarter))
        music.playTone(784, music.beat(BeatFraction.Quarter))
        music.playTone(784, music.beat(BeatFraction.Quarter))
        music.playTone(784, music.beat(BeatFraction.Quarter))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(587, music.beat(BeatFraction.Half))
        music.playTone(659, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Quarter))
        music.playTone(784, music.beat(BeatFraction.Quarter))
        music.playTone(784, music.beat(BeatFraction.Quarter))
        music.playTone(784, music.beat(BeatFraction.Quarter))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(784, music.beat(BeatFraction.Half))
        music.playTone(740, music.beat(BeatFraction.Whole))
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 6; index++) {
        basic.showLeds(`
            # # . . .
            . . # # .
            . . . . #
            . . # # .
            # # . . .
            `)
        basic.showLeds(`
            . . . . .
            # # # # .
            . . . . #
            # # # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            # # # # .
            . . . . #
            # # # # .
            . . . . .
            `)
    }
})
