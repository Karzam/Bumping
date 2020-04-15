import { Sprite, Loader } from 'pixi.js';

export default class Bumper extends Sprite
{
  private isDragged: boolean;

  constructor() {
    super();

    this.texture = Loader.shared.resources['assets/bumper.png'].texture;
    this.scale.set(0.4, 0.4);
    this.anchor.set(0.5, 0.5);
    this.interactive = true;
    this.buttonMode = true;

    this.on('pointerdown', this.onDragStart);
    this.on('pointermove', this.onDragging);
    this.on('pointerup', this.onDragEnd);
  }

  private onDragStart(): void {
  }

  private onDragging(): void {
  }

  private onDragEnd(): void {
  }
}