radio.onReceivedNumber(function (receivedNumber) {
    nearby_animal = receivedNumber
})
/**
 * 0 = prey
 */
/**
 * 1 = predator
 */
let nearby_animal = 0
radio.setGroup(42)
basic.forever(function () {
    let animal = 0
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
