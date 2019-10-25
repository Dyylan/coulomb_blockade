var diamondCanvas = document.getElementById("coulomb-diamond");
var diamondContainer = document.getElementById("coulomb-diamond-container");
diamondCanvas.width = diamondContainer.offsetWidth;
var diamondContext = diamondCanvas.getContext("2d");
diamondContext.lineWidth = 2;

var diamondSize = { 
    height : 200,
    width : 200,
    ratio : 0.8
};

var vSDzero = {
    x: 0, 
    y: diamondCanvas.height/2
};

function drawGreyBackground() {
    diamondContext.fillStyle = "EBECF0";
    diamondContext.fillRect(0, 0, diamondCanvas.width, diamondCanvas.height);
}

function drawCoulombDiamondAxis() {
    diamondContext.beginPath();
    diamondContext.strokeStyle = "#444";
    diamondContext.moveTo(0,0);
    diamondContext.lineTo(0, diamondCanvas.height);

    diamondContext.moveTo(vSDzero.x, vSDzero.y);
    diamondContext.lineTo(diamondCanvas.width, vSDzero.y);
    
    diamondContext.stroke();
}

function addCoulombDiamond(x, y, width, height) {
    diamondContext.beginPath();

    diamondContext.strokeStyle = "#000";
    diamondContext.moveTo(x,y);
    diamondContext.lineTo(x+width/2, y-height);
    diamondContext.lineTo(x+width, y);

    diamondContext.moveTo(x,y);
    diamondContext.lineTo(x+width/2, y+height);
    diamondContext.lineTo(x+width, y);
    diamondContext.stroke();

    let diamond = new Path2D();
    diamond.moveTo(x,y);
    diamond.lineTo(x+width/2, y-height);
    diamond.lineTo(x+width, y);
    diamond.lineTo(x+width/2, y+height);
    diamond.closePath();

    diamondContext.fillStyle = 'white';
    diamondContext.fill(diamond);
    return {xNext: x+width, yNext: y}
}

function drawDiamonds(x0, y0) {
    var nextDiamond = {xNext: x0, yNext: y0};
    nextDiamond = addCoulombDiamond(nextDiamond.xNext, nextDiamond.yNext, 
        diamondSize.width, diamondSize.height);
    nextDiamond = addCoulombDiamond(nextDiamond.xNext, nextDiamond.yNext, 
        diamondSize.width*diamondSize.ratio, diamondSize.height*diamondSize.ratio);
    nextDiamond = addCoulombDiamond(nextDiamond.xNext, nextDiamond.yNext, 
        diamondSize.width, diamondSize.height);
    nextDiamond = addCoulombDiamond(nextDiamond.xNext, nextDiamond.yNext, 
        diamondSize.width*diamondSize.ratio, diamondSize.height*diamondSize.ratio);
    nextDiamond = addCoulombDiamond(nextDiamond.xNext, nextDiamond.yNext, 
        diamondSize.width, diamondSize.height);
}

drawGreyBackground();
drawDiamonds(vSDzero.x, vSDzero.y);
drawCoulombDiamondAxis();
