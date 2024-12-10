function init() {
    
    strip = neopixel.create(DigitalPin.P0, 51, NeoPixelMode.RGB)
    shoXmasPattern()
    strip.show()
}

function shoXmasPattern() {
    let color: number;
    
    isRed = true
    for (let i = 0; i < 51; i++) {
        color = isRed ? NeoPixelColors.Red : NeoPixelColors.Green
        strip.setPixelColor(i, neopixel.colors(color))
        isRed = !isRed
    }
}

let isRed = false
let strip : neopixel.Strip = null
init()
basic.forever(function on_forever() {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})
