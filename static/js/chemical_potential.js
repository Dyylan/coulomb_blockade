var potentialsCanvas = document.getElementById("chemical-potentials");
var potentialsContainer = document.getElementById("chemical-potentials-container");
potentialsCanvas.width = potentialsContainer.offsetWidth;
var potentialsContext = potentialsCanvas.getContext("2d");
var spacingWidth = 12;
var levelWidth = (potentialsCanvas.width/3) - spacingWidth;
var chargingEnergy = 20;
var quantumEnergy = 5;
var diamondCount = 4;
potentialsContext.lineWidth = 2;
potentialsContext.font = "10px Arial";

function generateSourceLine(sourceVal) {
    potentialsContext.clearRect(0, 0, levelWidth + 2, potentialsCanvas.height);
    potentialsContext.beginPath();
    potentialsContext.rect(0, potentialsCanvas.height - (sourceVal * potentialsCanvas.height)/110  , levelWidth, potentialsCanvas.height);
    potentialsContext.stroke();
}

function generateDrainLine(drainVal) {
    potentialsContext.clearRect((levelWidth+spacingWidth)*2 - 2, 0, levelWidth + 3, potentialsCanvas.height);
    potentialsContext.beginPath();
    potentialsContext.rect((levelWidth+spacingWidth)*2, potentialsCanvas.height - (drainVal * potentialsCanvas.height)/110  , levelWidth, potentialsCanvas.height);
    potentialsContext.stroke();
}

function generateIslandLine(islandVal) {
    potentialsContext.clearRect((levelWidth + spacingWidth) - 2, 0, levelWidth + 3, potentialsCanvas.height);
    var i;
    for (i=0; i < diamondCount; i++){
        drawEnergyLine(islandVal, i);
    }
}

function drawEnergyLine(islandVal, i){
    var lineX1 =   levelWidth + spacingWidth;
    var lineX2 = 2*levelWidth + spacingWidth;
    var lineHeight = (islandVal - chargingEnergy*(i) - (quantumEnergy * (~~(i/2)) )) * potentialsCanvas.height/110;
    
    potentialsContext.beginPath();
    potentialsContext.moveTo(lineX1 , lineHeight);
    potentialsContext.lineTo(lineX2 , lineHeight);
    
    potentialsContext.strokeStyle = '#FF9E20';
    potentialsContext.stroke();
    
    if(i%2 == 1){
        potentialsContext.beginPath();
        potentialsContext.moveTo(lineX1 , lineHeight + chargingEnergy);
        potentialsContext.lineTo(lineX2 , lineHeight + chargingEnergy);
        potentialsContext.strokeStyle = '#8a8a8a';
        potentialsContext.stroke();
    }
} 