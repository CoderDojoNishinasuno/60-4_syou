function とめる () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function みぎて (数値: number) {
    servos.P1.setAngle(60 - 数値)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        まえにすすむ()
    } else if (receivedNumber == 1) {
        right_continue()
    } else if (receivedNumber == 2) {
        left_continue()
    } else if (receivedNumber == 3) {
        うしろにすすむ()
    } else if (receivedNumber == 4) {
        みぎてをふる(2)
    } else if (receivedNumber == 5) {
        ひだりてをふる(2)
    } else {
        とめる()
    }
})
function ひだりて (数値: number) {
    servos.P2.setAngle(120 - 数値)
}
function うしろにすすむ () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function まえにすすむ () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
input.onButtonPressed(Button.A, function () {
    みぎて(0)
    ひだりて(0)
})
function みぎにまわる (じかん: number) {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(じかん)
    とめる()
}
function left_continue () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function ひだりてをふる (かいすう: number) {
    for (let index = 0; index < かいすう; index++) {
        ひだりて(-30)
        basic.pause(200)
        ひだりて(30)
        basic.pause(200)
    }
}
function ひだりにまわる (じかん: number) {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(じかん)
    とめる()
}
function みぎてをふる (かいすう: number) {
    for (let index = 0; index < かいすう; index++) {
        みぎて(-30)
        basic.pause(200)
        みぎて(30)
        basic.pause(200)
    }
}
function right_continue () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
basic.showIcon(IconNames.Umbrella)
radio.setGroup(40)
basic.forever(function () {
	
})
