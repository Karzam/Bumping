import { Physics } from 'phaser';
import Stage from './Stage';

export default class Ball extends Physics.Matter.Image
{
  constructor() {
    const position: { x: number, y: number } = {
      x: Stage.getInstance().game.renderer.width / 2,
      y: Stage.getInstance().game.renderer.height / 2
    };

    super(Stage.getInstance().matter.world, position.x, position.y, 'ball');

    this.setBody({ type: 'circle', radius: 25 });
    this.setFrictionAir(0.02);
    this.setBounce(1);

    Stage.getInstance().children.add(this);
  }
}