import { Body, Bodies, Constraint, World, Vector, Events } from 'matter-js';
import Game from './game';

export default class Bumper
{
  public body: Body;

  private constraint: Constraint;

  constructor(position: Vector, fillStyle: string) {
    this.body = Bodies.circle(100, 100, 25, {
      restitution: 1,
      frictionAir: 0.02,
      position,
      collisionFilter: { group: 1, mask: 0x0001 },
      render: { fillStyle },
    });
  }

  public drag(): void {
    const { position } = this.body;

    this.body.isSensor = true;

    const pointA: Vector = Vector.create(position.x, position.y);

    this.constraint = Constraint.create({
      pointA,
      bodyB: this.body,
      render: { strokeStyle: '#079992', type: 'line' },
      stiffness: 0.01,
    });

    Events.on(this.constraint, 'tick', () => this.constraint.stiffness = 1);

    World.add(Game.getInstance().world, this.constraint);
  }

  public release(): void {
    this.body.isSensor = false;
    World.remove(Game.getInstance().world, this.constraint);
  }
}