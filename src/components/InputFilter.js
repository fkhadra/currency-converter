import React from 'react';
import { css } from 'glamor';

import searchIcon from 'src/assets/search.svg';
import searchClear from 'src/assets/search-clear.svg';

const styles = {
  position: 'relative',
  width: '250px',
  margin: 'auto',
  '& input': {
    color: '#ffffff',
    padding: '0 30px',
    borderRadius: '20px',
    borderColor: '#9b4dca'
  }
};

const InputFilter = ({ value, onChange, clear, style = {} }) => (
  <div {...css(styles, style)}>
    <i className="search-icon search-icon__find">
      <img src={searchIcon} alt="search" />
    </i>
    <input type="text" placeholder="Filter" value={value} onChange={onChange} />
    {value.length > 0 && (
      <i className="search-icon search-icon__clear" onClick={clear}>
        <img src={searchClear} alt="search-clear" />
      </i>
    )}
  </div>
);

export default InputFilter;
