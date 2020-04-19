import { World, Events, Mouse, MouseConstraint, Vector } from 'matter-js';
import Bumper from './bumper';
import Game from './game';
import Controller from './controller';

export default class Opponent extends Controller
{
  constructor() {
    const positions: Vector[] = [
      { x: 600, y: 100 },
      { x: 750, y: 200 },
      { x: 750, y: 300 },
      { x: 600, y: 400 },
    ];

    super(positions, '#B71540');
  }
}