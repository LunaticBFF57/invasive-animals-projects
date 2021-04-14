def on_received_number(receivedNumber):
    global nearby_animal
    nearby_animal = receivedNumber
radio.on_received_number(on_received_number)

# 0 = prey
# 1 = predator
nearby_animal = 0
radio.set_group(42)
animal = 0

def on_forever():
    if animal == 1:
        radio.send_number(animal)
        basic.pause(500)
    elif animal == 0:
        radio.send_number(animal)
        basic.pause(500)
        if nearby_animal == 1:
            pass
basic.forever(on_forever)
