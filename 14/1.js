function calculatePi(precision) {
    var pointsInsideCircle = 0;

    for (var i = 0; i < precision; i++) {
        var x = Math.random() * 2 - 1;
        var y = Math.random() * 2 - 1;
        if (x*x + y*y <= 1) {
            pointsInsideCircle++;
        }
    }
    var piApproximation = (4 * pointsInsideCircle) / precision;
    return piApproximation;
}
var lowPrecisionPi = calculatePi(10000);
console.log("Низкая степень точности: " + lowPrecisionPi);
