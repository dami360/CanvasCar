import "./style.scss";
import "./js/keysListeners";
import { car } from "./js/car";
import { canvas, ctx } from "./js/canvas-setup";
import carImg from "./img/car.webp";
import roadImg from "./img/road.jpg";

const carImage = new Image();
carImage.src = carImg;

const roadImage = new Image();
roadImage.src = roadImg;

function animation() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  ctx.fillStyle = "red";
  ctx.drawImage(roadImage, 0, 0, innerWidth, innerHeight);
  ctx.fill();
  car.move(carImage);

  requestAnimationFrame(animation);
}

carImage.onload = () => {
  animation();
};
