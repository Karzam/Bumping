import { GameObjects, Physics } from 'phaser';
import Stage from './Stage';

export default class Bumper extends Physics.Matter.Image
{
  constructor(position: { x: number, y: number }, texture: string) {
    super(Stage.getInstance().matter.world, position.x, position.y, texture);

    this.setPosition(position.x, position.y);

    this.setBody({ type: 'circle', radius: 30 });
    this.setFrictionAir(0.02);
    this.setBounce(1);

    Stage.getInstance().children.add(this);
  }
}