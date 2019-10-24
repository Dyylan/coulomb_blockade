var canvas = document.getElementById("chemical-potentials");
var container = document.getElementById("chemical-potentials-container");
canvas.width = container.offsetWidth;
canvas.height = container.offsetHeight;
var context = canvas.getContext("2d");

function generateSourceLine(sourceVal) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.moveTo(0, canvas.height-sourceVal);
    context.lineTo(150, canvas.height-sourceVal);
    context.stroke();
}

