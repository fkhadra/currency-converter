import React from 'react';

const CurrencySelector = ({ name, onChange, selected, currencies }) => (
  <label 
  htmlFor={name}>
  {`${name[0].toUpperCase()}${name.slice(1)}:`}
  <select name={name} id={name} onChange={onChange} value={selected}>
    {currencies.map(({ isoA3Code, currency, value }) => (
      <option
        key={isoA3Code}
        value={isoA3Code}
      >{`${isoA3Code} (${currency})`}</option>
    ))}
  </select>
  </label>
);

export default CurrencySelector;
