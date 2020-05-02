import { GameObjects, Math } from 'phaser';
import Bumper from './Bumper';
import Stage from './Stage';

export default class DraggableBumper extends Bumper
{
  private dragged: boolean;

  private initialPosition: { x: number, y: number };

  private line: GameObjects.Line;

  constructor(position: { x: number, y: number }, texture: string) {
    super(position, texture);

    this.line = new GameObjects.Line(Stage.getInstance(), 0, 0, 0, 0, 0, 0, 0x00ff00);
    this.line.strokeColor = 0x00ff00;
    this.line.setOrigin(0, 0);
    this.line.setVisible(false);

    Stage.getInstance().children.add(this.line);

    this.setInteractive();

    this.on('pointerdown', this.onDragStart);
    this.on('pointermove', this.onDragging);
    this.on('pointerup', this.onDragEnd);
  }

  private onDragStart(): void {
    this.dragged = true;
    this.initialPosition = { x: this.x, y: this.y };
    this.line.setVisible(true);
  }

  private onDragging(pointer: PointerEvent): void {
    if (this.dragged) {
      this.setPosition(pointer.x, pointer.y);
      this.line.setTo(pointer.x, pointer.y, this.initialPosition.x, this.initialPosition.y);
    }
  }

  private onDragEnd(): void {
    this.dragged = false;
    this.line.setVisible(false);

    const angle: number = Math.Angle.Between(this.x, this.y, this.initialPosition.x, this.initialPosition.y);
    const distance: number = Math.Distance.Between(this.x, this.y, this.initialPosition.x, this.initialPosition.y);

    Stage.getInstance().matter.applyForceFromAngle(this, distance * 0.001, angle);
  }
}