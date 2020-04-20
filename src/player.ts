import DraggableBumper from './DraggableBumper';

export default class Player
{
  private draggedBumber: DraggableBumper;

  constructor() {
    this.instantiateBumbers();
  }

  private instantiateBumbers(): DraggableBumper[] {
    const positions: { x: number, y: number }[] = [
      { x: 300, y: 100 },
      { x: 150, y: 200 },
      { x: 150, y: 300 },
      { x: 300, y: 400 },
    ];

    return positions.map(position => {
      const bumper: DraggableBumper = new DraggableBumper(position, 'player_bumper');

      return bumper;
    })
  }
}