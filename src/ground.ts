import { GameObjects, Game } from "phaser";
import Stage from "./Stage";

export default class Ground
{
  private readonly GROUND_WIDTH: number = 1800;
  private readonly GROUND_HEIGHT: number = 500;

  private readonly WALL_THICKNESS: number = 50;
  private readonly HALF_WALL_HEIGHT: number = 400;

  constructor() {
    this.drawWalls();
  }

  private drawWalls(): void {
    const { GROUND_WIDTH, GROUND_HEIGHT, WALL_THICKNESS, HALF_WALL_HEIGHT } = this;

    const positions: { x: number, y: number, w: number, h: number }[] = [
      { x: 0, y: 0, w: GROUND_WIDTH, h: WALL_THICKNESS },
      { x: 0, y: GROUND_HEIGHT, w: GROUND_WIDTH, h: WALL_THICKNESS },
      { x: 0, y: 0, w: WALL_THICKNESS, h: HALF_WALL_HEIGHT },
      { x: 0, y: GROUND_HEIGHT, w: WALL_THICKNESS, h: -HALF_WALL_HEIGHT },
      { x: GROUND_WIDTH / 2, y: 0, w: WALL_THICKNESS, h: HALF_WALL_HEIGHT },
      { x: GROUND_WIDTH / 2, y: GROUND_HEIGHT, w: WALL_THICKNESS, h: -HALF_WALL_HEIGHT },
    ];

    positions.map(position => {
      Stage.getInstance().add.rectangle(
        position.x,
        position.y,
        position.w,
        position.h,
        0x5758bb,
      );
    });
  }
}