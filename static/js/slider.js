var sliderSource = document.getElementById("source-slider");
var outputSource = document.getElementById("source-value");
var sliderDrain = document.getElementById("drain-slider");
var outputDrain = document.getElementById("drain-value");
var sliderIsland = document.getElementById("island-slider");
var outputIsland = document.getElementById("island-value");
outputSource.innerHTML = sliderSource.value;
outputDrain.innerHTML = sliderDrain.value;
outputIsland.innerHTML = sliderIsland.value;

generateSourceLine(sliderSource.value)
generateDrainLine(sliderDrain.value);
generateIslandLine(sliderIsland.value);

sliderSource.oninput = function() {
  outputSource.innerHTML = this.value;
  generateSourceLine(this.value);
}

sliderDrain.oninput = function() {
  outputDrain.innerHTML = this.value;
  generateDrainLine(this.value);
}

sliderIsland.oninput = function() {
  outputIsland.innerHTML = this.value;
  generateIslandLine(this.value);
}