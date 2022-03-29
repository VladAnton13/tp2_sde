input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showLeds(`
        # # . # #
                # # . # #
                . . . . .
                # . . . #
                . # # # .
    `)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showLeds(`
        # # . # #
                # # . # #
                . . . . .
                . # # # .
                # . . . #
    `)
})
let var1 = "Vlad"
basic.showString(var1)
while (false) {
    basic.showLeds(`
        . . . . .
                . . . . .
                . . . . .
                . . # . .
                . . . . .
    `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
    `)
    basic.pause(500)
}
for (let index = 0; index < 10; index++) {
    if (index % 2 == 0) {
        basic.showNumber(index)
    }
    
}
basic.forever(function on_forever() {
    
})
