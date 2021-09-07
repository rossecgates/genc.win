import React from 'react';
import { ReactSVG } from 'react-svg';
import PrizeList from './PrizeList';
import background from '../../assets/images/prize-background.svg';

const Prize = () => (
  <div className="prize">
    <ReactSVG className="prize__background" src={background} />

    <div>
      <header>
        <h2 className="prize__title">You can win</h2>
      </header>
      <PrizeList className="prize__list" />
    </div>
  </div>
);

export default Prize;