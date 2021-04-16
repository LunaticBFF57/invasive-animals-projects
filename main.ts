let animal = 0
//  0 = prey, 1 = predator
let nearby_animal = 0
radio.setGroup(42)
radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    
    nearby_animal = receivedNumber
})
basic.forever(function on_forever() {
    
    
    if (animal == 1) {
        //  predator
        radio.sendNumber(animal)
        basic.pause(100)
    } else if (animal == 0) {
        //  prey
        radio.sendNumber(animal)
        basic.pause(100)
        if (nearby_animal == 1) {
            
        } else if (nearby_animal == 0) {
            
        }
        
    }
    
})
