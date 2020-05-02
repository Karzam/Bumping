import React, { FC } from 'react';
import { Game, AUTO } from 'phaser';
import Stage from '../../game/Stage';
import Hud from '../Hud/Hud';

const App: FC = () => {
  const config = {
    type: AUTO,
    parent: 'root',
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

  return (
    <Hud />
  );
}

export default App;