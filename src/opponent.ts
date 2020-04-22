import Bumper from './Bumper';

export default class Opponent
{
  constructor() {
    this.instantiateBumbers();
  }

  private instantiateBumbers(): Bumper[] {
    const positions: { x: number, y: number }[] = [
      { x: 600, y: 100 },
      { x: 750, y: 200 },
      { x: 750, y: 300 },
      { x: 600, y: 400 },
    ];

    return positions.map(position => {
      return new Bumper(position, 'opponent_bumper');
    })
  }
}