import { Engine, World, Render, Runner, MouseConstraint, Bodies, Body } from "matter-js";
import Game from "./game";

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
      const border: Body = Bodies.rectangle(position.x, position.y, position.w, position.h, {
        isStatic: true,
        collisionFilter: { group: 1 },
        render: { lineWidth: 2, fillStyle: '#5758BB', strokeStyle: '#5758BB' },
      });

      World.add(Game.getInstance().world, border);
    });
  }
}