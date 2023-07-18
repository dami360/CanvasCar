import { keys } from "./keysListeners";
import { ctx } from "./canvas-setup";

export const car = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
  width: 35,
  height: 55,
  velocity: 0,
  friction: 0.05,
  speed: 0.3,
  maxSpeed: 8,
  maxBackSpeed: 4,
  angle: 0,
  rotationSpeed: 0.01,

  draw(image) {
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.translate(-this.x, -this.y);
    ctx.fillStyle = "black";
    ctx.drawImage(
      image,
      this.x - this.width / 2,
      this.y - this.height / 4,
      this.width,
      this.height
    );
    ctx.fill();
  },

  move(image) {
    if (this.velocity > 0) {
      this.velocity -= this.friction;
    } else if (this.velocity < 0) {
      this.velocity += this.friction;
    }

    if (this.velocity > -this.friction && this.velocity < this.friction) {
      this.velocity = 0;
    }

    if (keys.w) {
      this.velocity += this.speed;
      if (this.velocity > this.maxSpeed) this.velocity = this.maxSpeed;
    }

    if (keys.s) {
      this.velocity -= this.speed;
      if (this.velocity < -this.maxBackSpeed)
        this.velocity = -this.maxBackSpeed;
    }

    if (this.velocity != 0) {
      if (keys.a) {
        this.angle -= this.rotationSpeed * this.velocity;
      }
      if (keys.d) {
        this.angle += this.rotationSpeed * this.velocity;
      }
    }

    this.y -= this.velocity * Math.cos(this.angle);
    this.x += this.velocity * Math.sin(this.angle);

    this.draw(image);
  },
};
