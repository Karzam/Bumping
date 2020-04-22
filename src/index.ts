import { Game, AUTO } from 'phaser'
import Stage from "./Stage";

const config = {
  type: AUTO,
  backgroundColor: "#FFFFFF",
  width: 900,
  height: 500,
  scene: [Stage],
  physics: {
    default: 'matter',
    matter: { debug: true },
  }
};

const game: Game = new Game(config);