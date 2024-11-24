const showXmasPattern = () => {
    let isRed = false
    for (let i = 0; i <= 51; i++) {
        if (isRed) {
            strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Red))
        } else {
            strip.setPixelColor(i, neopixel.colors(NeoPixelColors.Green))
        }
        isRed = !(isRed)
    }
}
let strip: neopixel.Strip
const init = () => {
    strip = neopixel.create(DigitalPin.P0, 51, NeoPixelMode.RGB)
    showXmasPattern();
    strip.show()
}

init()

basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})
