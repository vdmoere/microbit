input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 10; index++) {
        music.playTone(131, music.beat(BeatFraction.Sixteenth))
        strip = neopixel.create(DigitalPin.P0, 80, NeoPixelMode.RGB)
        strip.setBrightness(100)
        for (let index = 0; index <= 79; index++) {
            strip.setPixelColor(index, neopixel.colors(NeoPixelColors.White))
            // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
            strip.show()
            basic.pause(1)
            strip.clear()
        }
        strip.clear()
        strip.show()
    }
})
input.onButtonPressed(Button.B, function () {
    brightness = 100
    start = 0
    stop = 360
    music.playTone(988, music.beat(BeatFraction.Sixteenth))
    strip = neopixel.create(DigitalPin.P0, 80, NeoPixelMode.RGB)
    strip.setBrightness(brightness)
    strip.showRainbow(0, 360)
    for (let index = 0; index < 200; index++) {
        start += 10
        stop += 10
        strip.showRainbow(start, stop)
        strip.show()
        basic.pause(20)
    }
    music.playTone(988, music.beat(BeatFraction.Sixteenth))
    for (let index = 0; index < 60; index++) {
        strip.shift(1)
        strip.show()
        basic.pause(20)
    }
    strip.clear()
    strip.show()
})
let random = 0
let lumi = 0
let led_index = 0
let stop = 0
let start = 0
let brightness = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 66, NeoPixelMode.RGB)
strip.setBrightness(100)
strip.clear()
let opnieuw = true
music.setVolume(25)
basic.forever(function () {
    if (opnieuw) {
        led_index = 33
        lumi = 50
        strip.clear()
        // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
        strip.show()
        for (let index = 0; index <= 5; index++) {
            strip.setPixelColor(led_index - index, neopixel.hsl(0, 100 - index * 2, lumi - index * 10))
        }
        for (let index = 0; index <= 5; index++) {
            strip.setPixelColor(led_index + index, neopixel.hsl(0, 100 - index * 1, lumi - index * 10))
        }
        // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
        strip.show()
        opnieuw = false
    }
    random = randint(1, 3)
    if (Math.randomBoolean()) {
        for (let index = 0; index < random; index++) {
            strip.shift(1)
            // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
            strip.show()
            basic.pause(1)
        }
        led_index = led_index + random
    } else {
        for (let index = 0; index < random; index++) {
            strip.shift(-1)
            // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
            strip.show()
            basic.pause(1)
        }
        led_index = led_index - random
    }
    if (led_index < 5) {
        music.playTone(131, music.beat(BeatFraction.Quarter))
        for (let index = 0; index < 10; index++) {
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
            // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
            strip.show()
            basic.pause(100)
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
            strip.show()
            basic.pause(100)
        }
        opnieuw = true
    }
    if (led_index > 54) {
        music.playTone(988, music.beat(BeatFraction.Quarter))
        opnieuw = true
        for (let index = 0; index < 10; index++) {
            strip.setPixelColor(59, neopixel.colors(NeoPixelColors.White))
            // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
            strip.show()
            basic.pause(100)
            strip.setPixelColor(59, neopixel.colors(NeoPixelColors.Red))
            // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
            strip.show()
            basic.pause(100)
        }
    }
    // Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
    strip.show()
})
