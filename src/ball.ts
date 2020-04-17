import { Bodies, Body, World } from "matter-js";
import Game from './game'

export default class Ball
{
  private static instance: Ball;

  private body: Body;

  constructor() {
    if (!Ball.instance) {
      Ball.instance = this;
    }

    this.body = Bodies.circle(450, 250, 20, {
      restitution: 1,
      frictionAir: 0.02,
      isSensor: true,
      collisionFilter: { category: 0x0002, mask: 0x0001 },
      render: { fillStyle: '#e1b12c' },
    });

    World.add(Game.getInstance().world, this.body);
  }

  public static getInstance(): Ball {
    return Ball.instance || new Ball();
  }

  public enable(): void {
    this.body.isSensor = false;
  }
}