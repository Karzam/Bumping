import { World, Events, Mouse, MouseConstraint, Vector } from 'matter-js';
import Bumper from './bumper';
import Game from './game';
import Ball from './ball';

export default class Player
{
  private bumpers: Bumper[];

  private draggedBumber: Bumper;

  private mouseConstraint: MouseConstraint;

  constructor() {
    this.bumpers = this.instantiateBumbers();

    const mouse: Mouse = Mouse.create(Game.getInstance().render.canvas);
    this.mouseConstraint = MouseConstraint.create(Game.getInstance().engine, { mouse });
    this.mouseConstraint.constraint.render.visible = false;
    this.mouseConstraint.collisionFilter.category = 0x0002;

    World.add(Game.getInstance().world, this.mouseConstraint);

    Events.on(this.mouseConstraint, 'mousedown', () => this.onMouseDown());
    Events.on(this.mouseConstraint, 'mouseup', () => this.onMouseUp());
  }

  private onMouseDown(): void {
    if (this.mouseConstraint.body) {
      this.draggedBumber = this.bumpers.find(b => b.body.id === this.mouseConstraint.body.id);
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

  private instantiateBumbers(): Bumper[] {
    const positions: { x: number, y: number }[] = [
      { x: 300, y: 100 },
      { x: 150, y: 200 },
      { x: 150, y: 300 },
      { x: 300, y: 400 },
    ];

    return positions.map(position => {
      const bumper: Bumper = new Bumper(position);

      World.add(Game.getInstance().world, bumper.body);

      return bumper;
    })
  }
}