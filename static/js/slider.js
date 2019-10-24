var sliderSource = document.getElementById("source-slider");
var outputSource = document.getElementById("source-value");
var sliderDrain = document.getElementById("drain-slider");
var outputDrain = document.getElementById("drain-value");
outputSource.innerHTML = sliderSource.value;
outputDrain.innerHTML = sliderDrain.value;

generateSourceLine(sliderSource.value)
generateDrainLine(sliderDrain.value);

sliderSource.oninput = function() {
  outputSource.innerHTML = this.value;
  generateSourceLine(this.value);
}

sliderDrain.oninput = function() {
  outputDrain.innerHTML = this.value;
  generateDrainLine(this.value);
}