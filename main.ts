const showXmasPattern = () => {
    isRed = false
    for (let i = 0; i <= 51; i++) {
        if (isRed) {
            strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
        } else {
            strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Green))
        }
        isRed = !(isRed)
    }
}
let isRed = false
let strip = neopixel.create(DigitalPin.P0, 51, NeoPixelMode.RGB)
showXmasPattern();
strip.show()
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})

