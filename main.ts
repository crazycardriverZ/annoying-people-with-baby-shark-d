input.onButtonPressed(Button.A, function () {
    State = 1
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    State = 0
})
let State = 0
music.setTempo(85)
State = 0
basic.forever(function () {
    if (State == 1) {
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
        music.changeTempoBy(22)
    }
})
basic.forever(function () {
    if (State == 1) {
        for (let index = 0; index < 99999999; index++) {
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
    }
})
basic.forever(function () {
    if (State == 0) {
        basic.showString("Baby Shark!")
    }
})
