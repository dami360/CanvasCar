export const keys = {
  w: false,
  s: false,
  a: false,
  d: false,
};

window.addEventListener("keydown", (e) => {
  e.preventDefault();
  console.log(e.key);
  switch (e.key) {
    case "w":
      keys.w = true;
      break;
    case "s":
      keys.s = true;
      break;
    case "a":
      keys.a = true;
      break;
    case "d":
      keys.d = true;
      break;
    case "ArrowUp":
      keys.w = true;
      break;
    case "ArrowDown":
      keys.s = true;
      break;
    case "ArrowLeft":
      keys.a = true;
      break;
    case "ArrowRight":
      keys.d = true;
      break;
  }
});

window.addEventListener("keyup", (e) => {
  e.preventDefault();
  switch (e.key) {
    case "w" || "ArrowUp":
      keys.w = false;
      break;
    case "s" || "ArrowDown":
      keys.s = false;
      break;
    case "a" || "ArrowLeft":
      keys.a = false;
      break;
    case "d" || "ArrowRight":
      keys.d = false;
      break;
    case "ArrowUp":
      keys.w = false;
      break;
    case "ArrowDown":
      keys.s = false;
      break;
    case "ArrowLeft":
      keys.a = false;
      break;
    case "ArrowRight":
      keys.d = false;
      break;
  }
});
