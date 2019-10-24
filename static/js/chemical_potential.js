var canvas = document.getElementById("chemical-potentials");
var context = canvas.getContext("2d");

function generateSourceLine(sourceVal) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.rect(0, canvas.height-sourceVal, canvas.width , canvas.height);
    context.stroke();
}

