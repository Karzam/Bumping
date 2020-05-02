import { Scene } from "phaser";
import Ground from "./Ground";
import Player from "./Player";
import Opponent from "./Opponent";
import Ball from "./Ball";

export default class Stage extends Scene
{
  private static instance: Stage;

  constructor() {
    super('game');

    if (!Stage.instance) {
      Stage.instance = this;
    }
  }

  private preload(): void {
    this.load.image('player_bumper', 'assets/player_bumper.png');
    this.load.image('opponent_bumper', 'assets/opponent_bumper.png');
    this.load.image('ball', 'assets/ball.png');
  }

  private create(): void {
    this.matter.world.disableGravity();

    const ground: Ground = new Ground();
    const player: Player = new Player();
    const ball: Ball = new Ball();
    const opponent: Opponent = new Opponent();
  }

  public static getInstance(): Stage {
    return Stage.instance || new Stage();
  }
}