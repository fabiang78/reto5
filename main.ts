let valor = 0
basic.forever(function () {
    valor = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(valor)
    basic.pause(3000)
    if (valor > 250) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(2000)
        basic.showString("REGAME")
    }
})
