animal = 0 # 0 = prey, 1 = predator
nearby_animal = 0
radio.set_group(42)

def on_received_number(receivedNumber):
    global nearby_animal
    nearby_animal = receivedNumber
radio.on_received_number(on_received_number)

def on_forever():
    global animal
    global nearby_animal
    if animal == 1: # predator
        radio.send_number(animal)
        basic.pause(100)
    elif animal == 0 : # prey
        radio.send_number(animal)
        basic.pause(100)
        if nearby_animal == 1:
            pass
        elif nearby_animal == 0:
            pass
basic.forever(on_forever)
