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
        basic.showString("do on things")
        steps = 0
    } else {
        basic.showString("do off things")
        radio.sendValue("steps", steps)
    }
})
function audioVisualAlerts () {
    basic.showString("lights sounds")
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
    basic.showIcon(IconNames.SmallHeart)
}
function randomSounds () {
    basic.showIcon(IconNames.Target)
}
let steps = 0
let onoff = 0
radio.setGroup(1)
onoff = 0
