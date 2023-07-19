import { keys } from "./keysListeners";
import { ctx } from "./canvas-setup";
import { inputsValue } from "./inputs";

export const car = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 1.25,
  velocity: 0,
  friction: 0.05,
  angle: 0,

  draw(image) {
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.translate(-this.x, -this.y);
    ctx.fillStyle = "black";
    ctx.drawImage(
      image,
      this.x - this.width / 2,
      this.y - this.height / 2,
      this.width,
      this.height
    );
    ctx.fill();
  },

  move(image) {
    this.width = 35 * inputsValue.scale;
    this.height = 55 * inputsValue.scale;
    this.acceleration = 0.3 * inputsValue.accScale;
    this.maxSpeed = 8 * inputsValue.maxSpeedScale;
    this.maxBackSpeed = 4 * inputsValue.maxSpeedScale;
    this.steeringAngle = 0.01 * inputsValue.steerAngleScale;

    if (this.velocity > 0) {
      this.velocity -= this.friction;
    } else if (this.velocity < 0) {
      this.velocity += this.friction;
    }

    if (this.velocity > -this.friction && this.velocity < this.friction) {
      this.velocity = 0;
    }

    if (keys.w) {
      this.velocity += this.acceleration;
      if (this.velocity > this.maxSpeed) this.velocity = this.maxSpeed;
    }

    if (keys.s) {
      this.velocity -= this.acceleration;
      if (this.velocity < -this.maxBackSpeed)
        this.velocity = -this.maxBackSpeed;
    }

    if (this.velocity != 0) {
      if (keys.a) {
        this.angle -= this.steeringAngle * this.velocity;
      }
      if (keys.d) {
        this.angle += this.steeringAngle * this.velocity;
      }
    }

    this.y -= this.velocity * Math.cos(this.angle);
    this.x += this.velocity * Math.sin(this.angle);

    this.draw(image);
  },
};
