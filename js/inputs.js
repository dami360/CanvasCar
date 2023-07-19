import { car } from "./car";
const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("change", () => {
    switch (input.getAttribute("name")) {
      case "scale":
        inputsValue.scale = parseFloat(input.value);
        break;
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

    console.log(car.width);
  });
});

export const inputsValue = {
  scale: 1,
  accScale: 1,
  maxSpeedScale: 1,
  steerAngleScale: 1,
};
