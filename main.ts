input.onButtonPressed(Button.AB, function () {
    basic.showNumber(groupNumber)
    makingChoice = true
    while (makingChoice) {
        basic.pause(200)
        if (input.logoIsPressed()) {
            makingChoice = false
            if (groupNumber <= -1) {
                groupNumber = groupNumber + 256
            }
            if (groupNumber >= 256) {
                groupNumber = groupNumber - 256
            }
            radio.setGroup(groupNumber)
            basic.showIcon(IconNames.Yes)
            basic.pause(200)
            basic.showLeds(`
                . # # # .
                . . # . .
                . . # . .
                # . . . #
                . # # # .
                `)
        } else if (input.buttonIsPressed(Button.A)) {
            groupNumber = groupNumber - 1
            basic.showNumber(groupNumber)
        } else if (input.buttonIsPressed(Button.B)) {
            groupNumber = groupNumber + 1
            basic.showNumber(groupNumber)
        }
    }
})
let makingChoice = false
let groupNumber = 0
groupNumber = 255
radio.setGroup(groupNumber)
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        // pitch downwards is a negative value, and this corresponds to what we want to mean 'forwards'
        radio.sendValue("Drive", input.rotation(Rotation.Pitch) * -1)
        radio.sendValue("Turn", input.rotation(Rotation.Roll))
        radio.sendValue("Grabber", -999)
        radio.sendValue("Spin", -999)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("Drive", 0)
        radio.sendValue("Turn", 0)
        radio.sendValue("Grabber", input.rotation(Rotation.Pitch))
        radio.sendValue("Spin", -999)
    } else if (input.logoIsPressed()) {
        radio.sendValue("Drive", 0)
        radio.sendValue("Turn", 0)
        radio.sendValue("Grabber", -999)
        radio.sendValue("Spin", input.rotation(Rotation.Roll))
    } else {
        radio.sendValue("Drive", 0)
        radio.sendValue("Turn", 0)
        radio.sendValue("Grabber", -999)
        radio.sendValue("Spin", 0)
    }
})
