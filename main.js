import "./style.scss";
import "./js/keysListeners";
import { car } from "./js/car";
import { canvas, ctx } from "./js/canvas-setup";

function animation() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  ctx.fillStyle = "red";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fill();
  car.state();

  requestAnimationFrame(animation);
}

animation();
