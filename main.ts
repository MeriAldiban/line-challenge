let X1 = 0
input.onButtonPressed(Button.A, function () {
    X1 += 1
})
input.onButtonPressed(Button.AB, function () {
    let counter = 0
    X1 = counter
})
input.onButtonPressed(Button.B, function () {
    X1 += -1
})
basic.forever(function () {
	
})
