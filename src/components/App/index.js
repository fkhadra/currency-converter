import React, { Component } from 'react';
import { css, media, presets } from 'glamor';
import { toast, ToastContainer } from 'react-toastify';

import Calculator from 'src/components/Calculator';

const styles = {
  container: css({
    display: 'flex'
  })
};

class App extends Component {
  componentDidMount() {
    if (!navigator.onLine) {
      toast.info('The application is running offline');
    }
  }

  render() {
    return (
      <main {...styles.container}>
        <Calculator />
        <ToastContainer
          autoClose={8000}
          closeButton={false}
          position={toast.POSITION.BOTTOM_CENTER}
        />
      </main>
    );
  }
}

export default App;
