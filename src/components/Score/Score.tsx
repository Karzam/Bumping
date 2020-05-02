import React, { FC } from 'react';
import './style.scss';

type ScoreProps = {
  name: string,
  value: number,
}

const Score: FC<ScoreProps> = ({ name, value }) => {
  const MAX: number = 3;

  const circles: JSX.Element[] = [...Array(MAX)].map((circle, index) =>
    <div key={ index } className={ `circle ${value >= index + 1 ? 'filled' : 'empty'}` } />
  );

  return (
    <div className="score">
      <span className="name">{ name }</span>

      { circles }
    </div>
  );
}

export default Score;