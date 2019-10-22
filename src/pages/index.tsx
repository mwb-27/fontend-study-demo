import React from 'react';
import styles from './index.css';
// const TestA = React.lazy(() => import('../components/react/lazy/testA'));
import TestA from '../components/react/lazy/testA';

export default function() {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            Getting Started
          </a>
        </li>
        {false ? (<React.Suspense fallback={<div>Loading...</div>}> <TestA /> </React.Suspense>) : null}
      </ul>
    </div>
  );
}
