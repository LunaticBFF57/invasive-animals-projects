def on_received_number(receivedNumber):
    global nearby_animal
    nearby_animal = receivedNumber
radio.on_received_number(on_received_number)

nearby_animal = 0
radio.set_group(42)
# 0 = prey
# 1 = predator
animal = 0

def on_forever():
    global animal
    if animal == 1:
        radio.send_number(animal)
        basic.pause(500)
    elif animal == 0:
        radio.send_number(animal)
        basic.pause(500)
        if nearby_animal == 1:
            pass
basic.forever(on_forever)
