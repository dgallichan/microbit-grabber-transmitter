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
        radio.sendValue("Pitch", input.rotation(Rotation.Pitch))
        radio.sendValue("Roll", input.rotation(Rotation.Roll))
        radio.sendValue("Grabber", -999)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("Pitch", 0)
        radio.sendValue("Roll", 0)
        radio.sendValue("Grabber", input.rotation(Rotation.Pitch))
    } else {
        radio.sendValue("Pitch", 0)
        radio.sendValue("Roll", 0)
        radio.sendValue("Grabber", -999)
    }
})
