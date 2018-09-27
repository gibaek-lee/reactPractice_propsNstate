/* 누구든지 하는 리액트 4편: props와 state */
//https://velopert.com/3629

import React, { Component } from 'react';
import MyName from './components/MyName';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div>
        <MyName name="리액트" />
        <Counter />
      </div>
    );
  }
}

export default App;
