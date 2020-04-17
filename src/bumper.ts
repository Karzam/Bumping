import { Body, Bodies, Constraint, World, Vector } from 'matter-js';
import Game from './game';

export default class Bumper
{
  public body: Body;

  private constraint: Constraint;

  constructor(position: Vector) {
    this.body = Bodies.circle(100, 100, 20, {
      restitution: 1,
      frictionAir: 0.02,
      position,
      collisionFilter: { category: 0x0001, mask: 0x0002, group: 1 },
      render: { fillStyle: '#079992' },
    });
  }

  public drag(): void {
    const { position } = this.body;

    this.body.isSensor = true;

    const pointA: Vector = Vector.create(position.x, position.y);

    this.constraint = Constraint.create({
      pointA,
      bodyB: this.body,
      type: 'line',
      render: { strokeStyle: '#079992', type: 'line' },
      stiffness: 0.01,
    });

    World.add(Game.getInstance().world, this.constraint);
  }

  public release(): void {
    this.body.isSensor = false;
    World.remove(Game.getInstance().world, this.constraint);
  }
}