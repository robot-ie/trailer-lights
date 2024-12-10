let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
let pattern = new xmas.OneLightPattern(strip)

pattern.init()
basic.showNumber(4)
basic.forever(function(){
    pattern.onForever()
})