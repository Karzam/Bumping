import { GameObjects, Physics } from 'phaser';
import Stage from './Stage';

export default class Bumper extends Physics.Arcade.Image
{
  constructor(position: { x: number, y: number }, texture: string) {
    super(Stage.getInstance(), position.x, position.y, texture);

    this.setPosition(position.x, position.y);

    Stage.getInstance().physics.world.enableBody(this);
    Stage.getInstance().children.add(this);

    this.setCircle(31);
    this.setDamping(true);
    this.setCollideWorldBounds(true);
    this.setDrag(0.97);
    this.setFriction(0.6, 0.6);
    this.setMass(100);
    this.setBounce(0.1, 0.1)

    Stage.getInstance().physics.add.collider(this, Stage.getInstance().children.list);
  }
}