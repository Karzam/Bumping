import React, { FC } from 'react';
import Score from '../Score/Score';
import './style.scss';

const Hud: FC = () => {
  return (
    <div className="hud">
      <Score name="You" value={ 2 } />

      <div className="countdown">
        <span>18</span>
      </div>

      <Score name="Opponent" value={ 1 } />
    </div>
  );
}

export default Hud;