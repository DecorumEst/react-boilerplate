'use strict';
import { hot } from 'react-hot-loader';
import React from 'react';
import styles from 'src/css/style.css';

function Title () {
  return <h1 className={styles.title}>App React</h1>;
};

export default hot(module)(Title);
