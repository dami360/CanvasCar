import "./style.scss";
import "./js/keysListeners";
import { car } from "./js/car";
import { canvas, ctx } from "./js/canvas-setup";

const carImage = new Image();
carImage.src = "./img/car.webp";

const roadImage = new Image();
roadImage.src = "./img/road.jpg";

function animation() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  ctx.fillStyle = "red";
  ctx.drawImage(roadImage, 0, 0, innerWidth, innerHeight);
  ctx.fill();
  car.move(carImage);

  requestAnimationFrame(animation);
}

roadImage.onload = () => {
  animation();
};
