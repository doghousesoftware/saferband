input.onPinPressed(TouchPin.P0, function () {
    if (onoff == 0) {
        onoff = 1
        radio.sendNumber(onoff)
        basic.showIcon(IconNames.Happy)
    } else {
        onoff = 0
        radio.sendNumber(onoff)
        basic.showIcon(IconNames.Sad)
    }
})
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        steps = 0
    } else {
        allOff()
        radio.sendValue("steps", steps)
    }
})
function allOff () {
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
function audioVisualAlerts () {
    randomSounds()
    randomLights()
}
input.onGesture(Gesture.Shake, function () {
    steps += 1
    audioVisualAlerts()
})
radio.onReceivedValue(function (name, value) {
    if (name == "steps") {
        basic.showNumber(value)
    }
})
function randomLights () {
    rnd = randint(1, 2)
    if (rnd == 1) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
    allOff()
}
function randomSounds () {
    for (let index = 0; index < 2; index++) {
        music.playTone(262, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
        music.playTone(523, music.beat(BeatFraction.Quarter))
        music.rest(music.beat(BeatFraction.Quarter))
    }
}
let rnd = 0
let steps = 0
let onoff = 0
radio.setGroup(1)
onoff = 0
