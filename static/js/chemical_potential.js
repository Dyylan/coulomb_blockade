var canvas = document.getElementById("chemical-potentials");
var container = document.getElementById("chemical-potentials-container");
canvas.width = container.offsetWidth;
canvas.height = 300;
var context = canvas.getContext("2d");
var spacingWidth = 12;
var levelWidth = (canvas.width/3) - spacingWidth;

function generateSourceLine(sourceVal) {
    context.clearRect(0, 0, levelWidth + 1, canvas.height);
    context.beginPath();
    context.rect(0, canvas.height - (sourceVal * canvas.height)/110  , levelWidth, canvas.height);
    context.stroke();
}