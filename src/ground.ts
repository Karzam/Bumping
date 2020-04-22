import { Physics, Game } from "phaser";
import Stage from "./Stage";

export default class Ground
{
  private readonly GROUND_WIDTH: number = 900;
  private readonly GROUND_HEIGHT: number = 500;

  private readonly WALL_THICKNESS: number = 25;
  private readonly HALF_WALL_HEIGHT: number = 150;

  constructor() {
    this.drawWalls();
  }

  private drawWalls(): void {
    const { GROUND_WIDTH, GROUND_HEIGHT, WALL_THICKNESS, HALF_WALL_HEIGHT } = this;

    const positions: { x: number, y: number, w: number, h: number }[] = [
      { x: GROUND_WIDTH / 2, y: WALL_THICKNESS / 2, w: GROUND_WIDTH, h: WALL_THICKNESS },
      { x: GROUND_WIDTH / 2, y: GROUND_HEIGHT - WALL_THICKNESS / 2, w: GROUND_WIDTH, h: WALL_THICKNESS },
      { x: WALL_THICKNESS / 2, y: WALL_THICKNESS + HALF_WALL_HEIGHT / 2, w: WALL_THICKNESS, h: HALF_WALL_HEIGHT },
      { x: WALL_THICKNESS / 2, y: GROUND_HEIGHT - WALL_THICKNESS - HALF_WALL_HEIGHT / 2, w: WALL_THICKNESS, h: HALF_WALL_HEIGHT },
      { x: GROUND_WIDTH - WALL_THICKNESS / 2, y: WALL_THICKNESS + HALF_WALL_HEIGHT / 2, w: WALL_THICKNESS, h: HALF_WALL_HEIGHT },
      { x: GROUND_WIDTH - WALL_THICKNESS / 2, y: GROUND_HEIGHT - WALL_THICKNESS - HALF_WALL_HEIGHT / 2, w: WALL_THICKNESS, h: HALF_WALL_HEIGHT },
    ];

    positions.map(position => {
      const rectangle: Phaser.GameObjects.Rectangle = new Phaser.GameObjects.Rectangle(
        Stage.getInstance().children.scene,
        position.x,
        position.y,
        position.w,
        position.h,
        0x5758bb,
      );

      Stage.getInstance().matter.add.gameObject(rectangle, { isStatic: true });
      Stage.getInstance().children.add(rectangle);
    });
  }
}