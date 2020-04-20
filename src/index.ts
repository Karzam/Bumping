import { Game, AUTO } from 'phaser'
import Stage from "./Stage";

const config = {
  type: AUTO,
  backgroundColor: "#FFFFFF",
  width: 900,
  height: 500,
  scene: [Stage],
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      gravity: { x: 0, y: 0 },
    }
  }
};

const game: Game = new Game(config);