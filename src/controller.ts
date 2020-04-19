import { World, Events, Mouse, MouseConstraint, Vector } from 'matter-js';
import Bumper from './bumper';
import Game from './game';

export default class Controller
{
  protected bumpers: Bumper[];

  constructor(positions: Vector[], fillStyle: string) {
    this.bumpers = this.instantiateBumbers(positions, fillStyle);
  }

  private instantiateBumbers(positions: Vector[], fillStyle: string): Bumper[] {
    return positions.map(position => {
      const bumper: Bumper = new Bumper(position, fillStyle);

      World.add(Game.getInstance().world, bumper.body);

      return bumper;
    })
  }
}