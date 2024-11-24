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
const changeLedColors = () => {
    const mode = modes[selectedModeIndex]
    if (mode === 'blink') {
        showXmasPattern();
    }
    else if (mode === 'full') {
        strip.showColor(NeoPixelColors.Black)
    }
}
let strip: neopixel.Strip
const modes = ['blink', 'full']
let selectedModeIndex = 0
const init = () => {
    strip = neopixel.create(DigitalPin.P0, 51, NeoPixelMode.RGB)
    changeLedColors()
}

init()
basic.forever(function () {
    const mode = modes[selectedModeIndex]
    basic.showString(mode, 70)
})
basic.forever(function () {
    const mode = modes[selectedModeIndex]
    if (mode === 'blink') {
        strip.rotate(1)
        strip.show()
        basic.pause(200)
    }
    else if (mode === 'full') {
        strip.showColor(NeoPixelColors.Red)
        basic.pause(300)
        strip.showColor(NeoPixelColors.Green)
        basic.pause(300)
    }
})
input.onButtonPressed(Button.A, function () {
    selectedModeIndex = selectedModeIndex + 1
    if (selectedModeIndex >= modes.length) {
        selectedModeIndex = 0
    }
    changeLedColors()
})

