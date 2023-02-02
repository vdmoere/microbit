input.onButtonPressed(Button.A, function () {
    music.setVolume(100)
    if (brightness >= 0) {
        music.playTone(988, music.beat(BeatFraction.Whole))
        brightness += -10
        strip.setBrightness(brightness)
        strip.show()
    } else {
        music.playTone(131, music.beat(BeatFraction.Whole))
        brightness = 100
        strip.setBrightness(brightness)
        strip.show()
    }
    music.setVolume(0)
})
input.onButtonPressed(Button.B, function () {
	
})
let random = 0
let lumi = 0
let led_index = 0
let brightness = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)
strip.setBrightness(20)
strip.clear()
let opnieuw = true
music.setVolume(0)
let links = 0
let rechts = 0
let verschil = 0
let vorige_verschil = 0
let _switch = true
brightness = 100
basic.forever(function () {
    if (opnieuw) {
        for (let index = 0; index <= Math.abs(vorige_verschil); index++) {
            if (vorige_verschil > 0) {
                strip.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
            } else if (vorige_verschil < 0) {
                strip.setPixelColor(59 - index, neopixel.colors(NeoPixelColors.White))
            } else {
                strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
                strip.setPixelColor(59, neopixel.colors(NeoPixelColors.White))
            }
        }
        // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
        strip.show()
        basic.pause(1000)
        verschil = links - rechts
        if (Math.abs(vorige_verschil) < Math.abs(verschil)) {
            if (vorige_verschil > 0) {
                strip.setPixelColor(verschil, neopixel.colors(NeoPixelColors.Yellow))
            } else if (vorige_verschil < 0) {
                strip.setPixelColor(59 + verschil, neopixel.colors(NeoPixelColors.Yellow))
            }
        } else {
            if (vorige_verschil > 0) {
                strip.setPixelColor(vorige_verschil, neopixel.colors(NeoPixelColors.Black))
            } else if (vorige_verschil < 0) {
                strip.setPixelColor(59 + vorige_verschil, neopixel.colors(NeoPixelColors.Black))
            }
        }
        // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
        strip.show()
        basic.pause(1000)
        led_index = 29
        lumi = 50
        vorige_verschil = verschil
        strip.clear()
        for (let index = 0; index <= 5; index++) {
            strip.setPixelColor(led_index - index, neopixel.hsl(0, 100 - index * 2, lumi - index * 10))
        }
        for (let index = 0; index <= 5; index++) {
            strip.setPixelColor(led_index + index, neopixel.hsl(0, 100 - index * 2, lumi - index * 10))
        }
        // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
        strip.show()
        opnieuw = false
    }
    random = randint(-2, 2)
    if (random > 0) {
        for (let index = 0; index < random; index++) {
            strip.shift(1)
            // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
            strip.show()
        }
        led_index = led_index + random
    } else if (random < 0) {
        for (let index = 0; index < Math.abs(random); index++) {
            strip.shift(-1)
            // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
            strip.show()
        }
        led_index = led_index + random
    }
    if (led_index < 5) {
        music.playTone(131, music.beat(BeatFraction.Quarter))
        links = links + 1
        opnieuw = true
        strip.clear()
    }
    if (led_index > 54) {
        music.playTone(988, music.beat(BeatFraction.Quarter))
        rechts = rechts + 1
        opnieuw = true
        strip.clear()
    }
})
