var potentialsCanvas = document.getElementById("chemical-potentials");
var potentialsContainer = document.getElementById("chemical-potentials-container");
potentialsCanvas.width = potentialsContainer.offsetWidth;
var potentialsContext = potentialsCanvas.getContext("2d");
var spacingWidth = 12;
var levelWidth = (potentialsCanvas.width/3) - spacingWidth;
var chargingEnergy = 20;
var quantumEnergy = 5;
potentialsContext.lineWidth = 2;

function generateSourceLine(sourceVal) {
    potentialsContext.clearRect(0, 0, levelWidth + 2, potentialsCanvas.height);
    potentialsContext.beginPath();
    potentialsContext.rect(0, potentialsCanvas.height - (sourceVal * potentialsCanvas.height)/110  , levelWidth, potentialsCanvas.height);
    potentialsContext.stroke();
}

function generateIslandLine(islandVal) {
    potentialsContext.clearRect((levelWidth + spacingWidth) - 2, 0, levelWidth + 3, potentialsCanvas.height);
    potentialsContext.beginPath();

    potentialsContext.moveTo((  levelWidth + spacingWidth) ,  (islandVal * potentialsCanvas.height)/110); //U(N) line
    potentialsContext.lineTo((2*levelWidth + spacingWidth) ,  (islandVal * potentialsCanvas.height)/110);

    potentialsContext.moveTo((  levelWidth + spacingWidth) , ((islandVal - chargingEnergy - quantumEnergy) * potentialsCanvas.height)/110); //U(N+1) + dE line
    potentialsContext.lineTo((2*levelWidth + spacingWidth) , ((islandVal - chargingEnergy - quantumEnergy) * potentialsCanvas.height)/110); 

    potentialsContext.moveTo((  levelWidth + spacingWidth) , ((islandVal - chargingEnergy - quantumEnergy - chargingEnergy) * potentialsCanvas.height)/110); //U(N+2) line
    potentialsContext.lineTo((2*levelWidth + spacingWidth) , ((islandVal - chargingEnergy - quantumEnergy - chargingEnergy) * potentialsCanvas.height)/110); 
 
  
    potentialsContext.moveTo((  levelWidth + spacingWidth) , ((islandVal - chargingEnergy - quantumEnergy - chargingEnergy - chargingEnergy - quantumEnergy) * potentialsCanvas.height)/110); //U(N+3) + dE line
    potentialsContext.lineTo((2*levelWidth + spacingWidth) , ((islandVal - chargingEnergy - quantumEnergy - chargingEnergy - chargingEnergy - quantumEnergy) * potentialsCanvas.height)/110); 

    potentialsContext.moveTo((  levelWidth + spacingWidth) , ((islandVal - chargingEnergy - quantumEnergy - chargingEnergy - chargingEnergy - quantumEnergy - chargingEnergy) * potentialsCanvas.height)/110); //U(N+4) line
    potentialsContext.lineTo((2*levelWidth + spacingWidth) , ((islandVal - chargingEnergy - quantumEnergy - chargingEnergy - chargingEnergy - quantumEnergy - chargingEnergy) * potentialsCanvas.height)/110); 
    
    potentialsContext.strokeStyle = '#c58025';
    potentialsContext.stroke();

    potentialsContext.beginPath();
    potentialsContext.moveTo((  levelWidth + spacingWidth) , ((islandVal - chargingEnergy) * potentialsCanvas.height)/110); //U(N+1) (extra line)
    potentialsContext.lineTo((2*levelWidth + spacingWidth) , ((islandVal - chargingEnergy) * potentialsCanvas.height)/110); 

    potentialsContext.moveTo((  levelWidth + spacingWidth) , ((islandVal - chargingEnergy - quantumEnergy - chargingEnergy - chargingEnergy) * potentialsCanvas.height)/110); //U(N+3) (extra line)
    potentialsContext.lineTo((2*levelWidth + spacingWidth) , ((islandVal - chargingEnergy - quantumEnergy - chargingEnergy - chargingEnergy) * potentialsCanvas.height)/110); 

    
    potentialsContext.strokeStyle = '#8a8a8a';
    potentialsContext.stroke();
    
    potentialsContext.strokeStyle = '#000000';
}

function generateDrainLine(drainVal) {
    potentialsContext.clearRect((levelWidth+spacingWidth)*2 - 2, 0, levelWidth + 3, potentialsCanvas.height);
    potentialsContext.beginPath();
    potentialsContext.rect((levelWidth+spacingWidth)*2, potentialsCanvas.height - (drainVal * potentialsCanvas.height)/110  , levelWidth, potentialsCanvas.height);
    potentialsContext.stroke();
}