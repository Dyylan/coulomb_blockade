var slider = document.getElementById("source-slider");
var output = document.getElementById("source-value");
output.innerHTML = slider.value;
generateSourceLine(slider.value);

slider.oninput = function() {
  output.innerHTML = this.value;
  generateSourceLine(this.value);
}
