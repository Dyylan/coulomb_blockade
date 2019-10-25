var canvas = document.getElementById("chemical-potentials");
var container = document.getElementById("chemical-potentials-container");
canvas.width = container.offsetWidth;
canvas.height = 300;
var context = canvas.getContext("2d");
var spacingWidth = 12;
var levelWidth = (canvas.width/3) - spacingWidth;
var chargingEnergy = 30;

function generateSourceLine(sourceVal) {
    context.clearRect(0, 0, levelWidth + 1, canvas.height);
    context.beginPath();
    context.rect(0, canvas.height - (sourceVal * canvas.height)/110  , levelWidth, canvas.height);
    context.stroke();
}

function generateIslandLine(islandVal) {
    context.clearRect((levelWidth + spacingWidth) - 1, 0, levelWidth + 2, canvas.height);
    context.beginPath();

    context.moveTo((  levelWidth + spacingWidth) ,  (islandVal * canvas.height)/110); //U(N) line
    context.lineTo((2*levelWidth + spacingWidth) ,  (islandVal * canvas.height)/110);

    context.moveTo((  levelWidth + spacingWidth) , ((islandVal - chargingEnergy) * canvas.height)/110); //U(N+1) line
    context.lineTo((2*levelWidth + spacingWidth) , ((islandVal - chargingEnergy) * canvas.height)/110);
    
    context.stroke();
}

function generateDrainLine(drainVal) {
    context.clearRect((levelWidth+spacingWidth)*2 - 1, 0, levelWidth + 2, canvas.height);
    context.beginPath();
    context.rect((levelWidth+spacingWidth)*2, canvas.height - (drainVal * canvas.height)/110  , levelWidth, canvas.height);
    context.stroke();
}