input.onButtonPressed(Button.A, function () {
    color += 1
    if (color > 3) {
        color = 0
    }
})
function displayColor () {
    if (color == 0) {
        for (let index = 0; index <= strip.length(); index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Green))
            strip.show()
            basic.pause(speed)
        }
        basic.pause(5 * speed)
        strip.clear()
        strip.show()
    } else if (color == 1) {
        for (let index = 0; index <= strip.length(); index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Blue))
            strip.show()
            basic.pause(speed)
        }
        basic.pause(5 * speed)
        strip.clear()
        strip.show()
    } else if (color == 2) {
        for (let index = 0; index <= strip.length(); index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Yellow))
            strip.show()
            basic.pause(speed)
        }
        basic.pause(5 * speed)
        strip.clear()
        strip.show()
    } else {
        for (let index = 0; index <= strip.length(); index++) {
            strip.setPixelColor(index, neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
            strip.show()
            basic.pause(speed)
        }
        basic.pause(5 * speed)
        strip.clear()
        strip.show()
    }
}
let color = 0
let speed = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 11, NeoPixelMode.RGB_RGB)
speed = 200
color = 0
basic.forever(function () {
    strip.setBrightness(pins.analogReadPin(AnalogPin.P1) / 8)
    displayColor()
    basic.pause(5 * speed)
})
