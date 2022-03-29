def on_button_pressed_a():
    basic.show_leds("""
        # # . # #
                # # . # #
                . . . . .
                # . . . #
                . # # # .
    """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_leds("""
        # # . # #
                # # . # #
                . . . . .
                . # # # .
                # . . . #
    """)
input.on_button_pressed(Button.B, on_button_pressed_b)

var1 = "Vlad"
basic.show_string(var1)
while False:
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . # . .
                . . . . .
    """)
    basic.pause(500)
    basic.show_leds("""
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    """)
    basic.pause(500)
for index in range(10):
    if index % 2 == 0:
        basic.show_number(index)

def on_forever():
    pass
basic.forever(on_forever)
