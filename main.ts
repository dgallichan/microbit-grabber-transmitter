radio.setGroup(1)
basic.showLeds(`
    . # # # .
    . . # . .
    . . # . .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("Drive", input.rotation(Rotation.Pitch))
        radio.sendValue("Turn", input.rotation(Rotation.Roll))
        radio.sendValue("Grabber", -999)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("Drive", 0)
        radio.sendValue("Turn", 0)
        radio.sendValue("Grabber", input.rotation(Rotation.Pitch))
    } else {
        radio.sendValue("Drive", 0)
        radio.sendValue("Turn", 0)
        radio.sendValue("Grabber", -999)
    }
})
