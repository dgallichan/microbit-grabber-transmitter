radio.set_group(1)
basic.show_leds("""
    . # # # .
        . . # . .
        . . # . .
        # . . . #
        . # # # .
""")

def on_forever():
    if input.button_is_pressed(Button.A):
        # pitch downwards is a negative value, and this corresponds to what we want to mean 'forwards'
        radio.send_value("Drive",
            Math.map(input.rotation(Rotation.PITCH), -90, 90, 1000, -1000))
        radio.send_value("Turn",
            Math.map(input.rotation(Rotation.ROLL), -90, 90, -1000, 1000))
        radio.send_value("Grabber", -9999)
        radio.send_value("Spin", -9999)
    elif input.button_is_pressed(Button.B):
        radio.send_value("Drive", 0)
        radio.send_value("Turn", 0)
        radio.send_value("Grabber",
            Math.map(input.rotation(Rotation.PITCH), -90, 90, 0, 1000))
        radio.send_value("Spin", -9999)
    elif input.logo_is_pressed():
        radio.send_value("Drive", 0)
        radio.send_value("Turn", 0)
        radio.send_value("Grabber", -9999)
        radio.send_value("Spin",
            Math.map(input.rotation(Rotation.ROLL), -90, 90, -1000, 1000))
    else:
        radio.send_value("Drive", 0)
        radio.send_value("Turn", 0)
        radio.send_value("Grabber", -9999)
        radio.send_value("Spin", -9999)
basic.forever(on_forever)
