import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

import { Button, message } from 'antd';

let handleClick = async ()=>{

  console.log(1);
  let resp = await fetch('/api/echo');
  let text = await resp.text();
  message.info(text);
}

function IndexPage() {


  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <Button type="primary" onClick={handleClick}>Primary</Button>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
