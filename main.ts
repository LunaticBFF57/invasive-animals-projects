radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    nearby_animal = receivedNumber
})
//  0 = prey
//  1 = predator
let nearby_animal = 0
radio.setGroup(42)
let animal = 0
basic.forever(function on_forever() {
    if (animal == 1) {
        radio.sendNumber(animal)
        basic.pause(500)
    } else if (animal == 0) {
        radio.sendNumber(animal)
        basic.pause(500)
        if (nearby_animal == 1) {
            
        }
        
    }
    
})
