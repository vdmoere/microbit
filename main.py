strip: neopixel.Strip = None
brightness = 0
start = 0
stop = 0

def on_button_pressed_a():
    global strip
    for index in range(10):
        music.play_tone(131, music.beat(BeatFraction.SIXTEENTH))
        strip = neopixel.create(DigitalPin.P0, 80, NeoPixelMode.RGB)
        strip.set_brightness(100)
        for index2 in range(80):
            strip.set_pixel_color(index2, neopixel.colors(NeoPixelColors.WHITE))
            # Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
            strip.show()
            basic.pause(1)
            strip.clear()
        strip.clear()
        strip.show()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global brightness, start, stop, strip
    brightness = 100
    start = 0
    stop = 360
    music.play_tone(988, music.beat(BeatFraction.SIXTEENTH))
    strip = neopixel.create(DigitalPin.P0, 80, NeoPixelMode.RGB)
    strip.set_brightness(brightness)
    strip.show_rainbow(0, 360)
    for index3 in range(200):
        start += 10
        stop += 10
        strip.show_rainbow(start, stop)
        strip.show()
        basic.pause(20)
    music.play_tone(988, music.beat(BeatFraction.SIXTEENTH))
    for index4 in range(60):
        strip.shift(1)
        strip.show()
        basic.pause(20)
    strip.clear()
    strip.show()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    global strip
    strip = neopixel.create(DigitalPin.P0, 80, NeoPixelMode.RGB)
    strip.set_brightness(100)
    for index5 in range(67):
        strip.set_pixel_color(index5, neopixel.colors(NeoPixelColors.WHITE))
        # Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
        strip.show()
        basic.pause(1)
        strip.clear()
    basic.pause(60000)
basic.forever(on_forever)

def on_forever2():
    global strip
    strip = neopixel.create(DigitalPin.P0, 80, NeoPixelMode.RGB)
    strip.set_brightness(100)
    strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.WHITE))
    # Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
    strip.show()
    for index6 in range(67):
        basic.pause(60000)
        strip.shift(1)
        strip.set_pixel_color(1, neopixel.colors(NeoPixelColors.WHITE))
        # Pas bij dit blok worden de hiervoor ingestelde aanpassingen getoond.
        strip.show()
basic.forever(on_forever2)
