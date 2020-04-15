import Bumper from './bumper';
import Stage from './stage';

export default class Player
{
  private bumpers: Bumper[];

  constructor() {
    this.bumpers = this.instantiateBumbers();
  }

  private instantiateBumbers(): Bumper[] {
    const positions: { x: number, y: number }[] = [
      { x: 300, y: 50 },
      { x: 150, y: 150 },
      { x: 150, y: 250 },
      { x: 300, y: 350 },
    ];

    return positions.map(position => {
      const bumper: Bumper = new Bumper();
      bumper.transform.position.set(position.x, position.y);

      Stage.getInstance().addChild(bumper);

      return bumper;
    })
  }
}