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
        radio.sendValue("Drive", Math.map(input.rotation(Rotation.Pitch), -90, 90, -1000, 1000))
        radio.sendValue("Turn", Math.map(input.rotation(Rotation.Roll), -90, 90, -1000, 1000))
        radio.sendValue("Grabber", -9999)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("Drive", 0)
        radio.sendValue("Turn", 0)
        radio.sendValue("Grabber", Math.map(input.rotation(Rotation.Pitch), -90, 90, -1000, 1000))
    } else {
        radio.sendValue("Drive", 0)
        radio.sendValue("Turn", 0)
        radio.sendValue("Grabber", -9999)
    }
})
