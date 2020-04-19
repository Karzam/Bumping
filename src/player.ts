import { World, Events, Mouse, MouseConstraint, Vector } from 'matter-js';
import Bumper from './bumper';
import Game from './game';
import Ball from './ball';
import Controller from './controller';

export default class Player extends Controller
{
  private draggedBumber: Bumper;

  private mouseConstraint: MouseConstraint;

  private fillStyle: string;

  constructor() {
    const positions: Vector[] = [
      { x: 300, y: 100 },
      { x: 150, y: 200 },
      { x: 150, y: 300 },
      { x: 300, y: 400 },
    ];

    super(positions, '#079992');

    const mouse: Mouse = Mouse.create(Game.getInstance().render.canvas);
    this.mouseConstraint = MouseConstraint.create(Game.getInstance().engine, { mouse });
    this.mouseConstraint.constraint.render.visible = false;

    World.add(Game.getInstance().world, this.mouseConstraint);

    Events.on(this.mouseConstraint, 'mousedown', () => this.onMouseDown());
    Events.on(this.mouseConstraint, 'mouseup', () => this.onMouseUp());
  }

  private onMouseDown(): void {
    const { body } = this.mouseConstraint;

    if (body) {
      this.draggedBumber = this.bumpers.find(b => b.body.id === body.id);
      this.draggedBumber && this.draggedBumber.drag();
    }
  }

  private onMouseUp(): void {
    if (this.draggedBumber) {
      setTimeout(() => {
        Ball.getInstance().enable();
        this.draggedBumber.release();
      }, 25);
    }
  }
}