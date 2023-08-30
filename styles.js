document.addEventListener("DOMContentLoaded", function() {
  const colorPicker = document.getElementById("colorPicker");

  colorPicker.addEventListener("input", function(event) {
    const selectedColor = event.target.value;
    document.body.style.backgroundColor = selectedColor;
  });
});
