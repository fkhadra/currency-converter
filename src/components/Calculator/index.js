import React, { Component } from 'react';
import { css } from 'glamor';
import { Motion, spring } from 'react-motion';

import CurrencySelector from './CurrencySelector';
import CurrencySwapper from './CurrencySwapper';

import Card from 'src/components/Card';
import currency from 'src/services/currency';

import calc from 'src/assets/calculator.svg';

function getLastState() {
  const lastState = localStorage.getItem('lastState');
  if (lastState !== null) {
    return JSON.parse(lastState);
  }

  return {
    from: {
      code: 'EUR',
      value: 1
    },
    to: {
      code: 'EUR',
      value: 1
    }
  };
}

class Calculator extends Component {
  state = {
    ...getLastState(),
    currencies: [],
    amount: ''
  };

  async componentDidMount() {
    this.setState({
      currencies: await currency.list()
    });
  }

  componentDidUpdate() {
    this.saveLastState();
  }

  saveLastState() {
    localStorage.setItem(
      'lastState',
      JSON.stringify({
        from: this.state.from,
        to: this.state.to
      })
    );
  }

  handleSelect = async ({ target }) => {
    this.setState({
      [target.name]: {
        code: target.value,
        value: (await currency.find(target.value)).value
      }
    });
  };

  onAmountChange = ({ target }) =>
    this.setState({
      amount: target.value
    });

  onSwapCurrencies = () =>
    this.setState({
      from: { ...this.state.to },
      to: { ...this.state.from }
    });

  formatToCurrency(amount, code) {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: code
    }).format(amount);
  }

  render() {
    const { from, to, amount, currencies } = this.state;
    const request = this.formatToCurrency(amount, from.code);
    const response = amount * (to.value / from.value);

    return (
      <div>
        <Card
          title={
            <div>
              <img
                {...css({ width: '25px' })}
                src={calc}
                alt="Currency converter"
              />{' '}
              Currency converter
            </div>
          }
        >
          <div>
            <label
              htmlFor="amount"
              {...css({
                '& input': {
                  borderColor: '#9b4dca'
                }
              })}
            >
              Amount:
              <input
                type="number"
                placeholder="Amount"
                value={amount}
                onChange={this.onAmountChange}
              />
            </label>
          </div>
          <div>
            <CurrencySelector
              name="from"
              onChange={this.handleSelect}
              selected={from.code}
              currencies={currencies}
            />
            <CurrencySwapper onSwapCurrencies={this.onSwapCurrencies} />
            <CurrencySelector
              name="to"
              onChange={this.handleSelect}
              selected={to.code}
              currencies={currencies}
            />
          </div>
          <div
            {...css({
              display: 'flex',
              justifyContent: 'center',
              margin: '8px'
            })}
          >
            {request}
            <i> = </i>
            <Motion defaultStyle={{ x: 0 }} style={{ x: spring(response) }}>
              {value => (
                <React.Fragment>{this.formatToCurrency(value.x.toFixed(2), to.code)}</React.Fragment>
              )}
            </Motion>
          </div>
        </Card>
      </div>
    );
  }
}

export default Calculator;
