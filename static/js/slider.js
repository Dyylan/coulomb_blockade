var sliderSource = document.getElementById("source-slider");
var outputSource = document.getElementById("source-value");
//var sliderDrain = document.getElementById("drain-slider");
//var outputDrain = document.getElementById("drain-value");
var sliderIsland = document.getElementById("island-slider");
var outputIsland = document.getElementById("island-value");

var sliderDrain = 50;

outputSource.innerHTML = sliderSource.value;
//outputDrain.innerHTML = sliderDrain.value;
outputIsland.innerHTML = sliderIsland.value;

generateSourceLine(sliderSource.value)
generateDrainLine(sliderSource.value);
generateIslandLine(sliderIsland.value);

sliderSource.oninput = function() {
  outputSource.innerHTML = this.value;
  generateSourceLine(this.value);
  calculateDiamondPosition(this.value, sliderDrain, sliderIsland.value);
}

//sliderDrain.oninput = function() {
//  outputDrain.innerHTML = this.value;
//   generateDrainLine(this.value);
 // calculateDiamondPosition(sliderSource.value, this.value, sliderIsland.value);
//}

sliderIsland.oninput = function() {
  outputIsland.innerHTML = this.value;
  generateIslandLine(this.value);
  calculateDiamondPosition(sliderSource.value, sliderDrain, this.value);
}