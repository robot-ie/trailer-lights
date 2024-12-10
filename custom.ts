
namespace xmas {
    export class OneLightPattern{
        private strip:neopixel.Strip;
        constructor(strip:neopixel.Strip){
            this.strip = strip;
        }
        init(){
            let isRed = true
            for (let i = 0; i < 51; i++) {
                const color = isRed ? NeoPixelColors.Red : NeoPixelColors.Green
                strip.setPixelColor(i, neopixel.colors(color))
                isRed = !isRed
            }
        }

        onForever(){
            strip.rotate(1)
            strip.show()
            basic.pause(1000)
        }
        
    }
}
