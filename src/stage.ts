import { Container, Graphics } from 'pixi.js'
import Player from './player';

export default class Stage extends Container
{
  private static instance: Stage;

  constructor() {
    super();

    if (!Stage.instance) {
      Stage.instance = this;
    }

    this.drawBackground();

    this.transform.position.set((window.innerWidth / 2) - (this.width / 2) - 100, 100);
  }

  public static getInstance(): Stage {
    return Stage.instance || new Stage();
  }

  public instantiatePlayer(): void {
    const player: Player = new Player();
  }

  private drawBackground(): void {
    const background: Graphics = new Graphics();
    background.beginFill(0xFFFFFF);
    background.drawRect(0, 0, 800, 400);
    background.endFill();

    this.addChild(background);
  }
}