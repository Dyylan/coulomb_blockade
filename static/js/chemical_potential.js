var potentialsCanvas = document.getElementById("chemical-potentials");
var potentialsContainer = document.getElementById("chemical-potentials-container");
potentialsCanvas.width = potentialsContainer.offsetWidth;
var potentialsContext = potentialsCanvas.getContext("2d");
var spacingWidth = 12;
var levelWidth = (potentialsCanvas.width/3) - spacingWidth;
var chargingEnergy = 30;

function generateSourceLine(sourceVal) {
    potentialsContext.clearRect(0, 0, levelWidth + 1, potentialsCanvas.height);
    potentialsContext.beginPath();
    potentialsContext.rect(0, potentialsCanvas.height - (sourceVal * potentialsCanvas.height)/110  , levelWidth, potentialsCanvas.height);
    potentialsContext.stroke();
}

function generateIslandLine(islandVal) {
    potentialsContext.clearRect((levelWidth + spacingWidth) - 1, 0, levelWidth + 2, potentialsCanvas.height);
    potentialsContext.beginPath();

    potentialsContext.moveTo((  levelWidth + spacingWidth) ,  (islandVal * potentialsCanvas.height)/110); //U(N) line
    potentialsContext.lineTo((2*levelWidth + spacingWidth) ,  (islandVal * potentialsCanvas.height)/110);

    potentialsContext.moveTo((  levelWidth + spacingWidth) , ((islandVal - chargingEnergy) * potentialsCanvas.height)/110); //U(N+1) line
    potentialsContext.lineTo((2*levelWidth + spacingWidth) , ((islandVal - chargingEnergy) * potentialsCanvas.height)/110);
    
    potentialsContext.stroke();
}

function generateDrainLine(drainVal) {
    potentialsContext.clearRect((levelWidth+spacingWidth)*2 - 1, 0, levelWidth + 2, potentialsCanvas.height);
    potentialsContext.beginPath();
    potentialsContext.rect((levelWidth+spacingWidth)*2, potentialsCanvas.height - (drainVal * potentialsCanvas.height)/110  , levelWidth, potentialsCanvas.height);
    potentialsContext.stroke();
}