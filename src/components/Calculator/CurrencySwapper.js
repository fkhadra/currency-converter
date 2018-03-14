import React from 'react';
import { css } from 'glamor';

import swap from 'src/assets/swap.svg';

const styles = {
  container: css({
    display: 'flex',
    justifyContent: 'center',
  }),
  img: css({
    cursor: 'pointer',
    transition: 'transform 0.4s',
    transform: 'rotate(90deg) scale(1)',
    ':hover': {
      transform: 'rotate(90deg) scale(1.4)',
    }
  })
};

const CurrencySwapper = ({ onSwapCurrencies }) => (
  <div {...styles.container} onClick={onSwapCurrencies}>
    <img {...styles.img} src={swap} alt="swap currencies" />
  </div>
);

export default CurrencySwapper;
