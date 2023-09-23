const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    switch (input.getAttribute("name")) {
      case "acceleration":
        inputsValue.accScale = parseFloat(input.value);
        break;
      case "max-speed":
        inputsValue.maxSpeedScale = parseFloat(input.value);
        break;
      case "steering-angle":
        inputsValue.steerAngleScale = parseFloat(input.value);
        break;
    }
    input.blur();
  });
});

export const inputsValue = {
  accScale: 1,
  maxSpeedScale: 1,
  steerAngleScale: 1,
};
