import { GameObjects, Game } from 'phaser';
import Stage from './Stage';

export default class Ball extends GameObjects.Graphics
{
  constructor() {
    super(Stage.getInstance());

    this.fillStyle(0xe1b12c);
    this.fillCircle(0, 0, 25);

    this.setPosition(
      Stage.getInstance().game.renderer.width / 2,
      Stage.getInstance().game.renderer.height / 2
    );

    Stage.getInstance().children.add(this);
  }
}