import React from 'react';
import { css } from 'glamor';

const styles = {
  card: css({
    flex: '0 1 100%',
    margin: 'auto 15px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    backgroundColor: '#1f1a1f',
    transition: '0.3s',
    '& ul': {
      listStyle: 'none'
    },
    '& li>span': {
      fontWeight: 'bold'
    },
    ':hover': {
      boxShadow: '0 8px 16px 0 rgba(0,0,0,0.2)'
    }
  }),
  title: css({
    color: '#fff',
    textTransform: 'capitalize',
    backgroundColor: '#9b4dca',
    '& h2': {
      padding: '2px 16px'
    }
  }),
  content: css({
    padding: '2px 16px'
  })
};

export default ({ title, children }) => (
  <div className="fadeIn" {...styles.card}>
    <div {...styles.title}>
      <h2>{title}</h2>
    </div>
    <div {...styles.content}>{children}</div>
  </div>
);
