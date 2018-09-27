/* state example component
state 특징
1.컴포넌트 내부에서 선언한다.
2.컴포넌트 내부에서 값을 변경(동적 데이터)한다.
3.classfiels 문법으로 this.setState 내부에서 state 값을 변경한다.
4.this.setState가 호출되면 컴포넌트가 리렌더링 된다.
5.setState는 객체로 전달되는 값만 업데이트 해준다.
*/

import React, { Component } from 'react';

class Counter extends Component {
  //변수
  state = {
    number: 0
  }

  //메소드(이벤트핸들러)
  handlePlusButton = (e) => {
    //컴포넌트의 state를 정의할 때 다음과 같은 classfiels문법을 사용한다.
    this.setState({
      number: this.state.number + 1
    })
    //만약 classfiels문법을 사용하지 않는다면 constructor를 만들어야 한다.
  }
  handleMinusButton = (e) => {
    this.setState({
      number: this.state.number - 1
    })
  }
  /* plus minus 기능 하나로
  handlePlusMinusButtons = (e) => {
    if(e.target.name === "plus"){
      this.setState({ number: this.state.number + 1 })
    }else if(e.target.name === "minus"){
      this.setState({ number: this.state.number - 1 })
    }
  }
  */

  //렌더
  /* 주의
  1.이벤트 이름은 carmelCase로 작성한다(onClick).
  2.이벤트에 전달해 주는 값은 함수(this.handler)여야 한다. 함수호출(this.handler())이 아니다.
  */
  render(){
    return (
      <div>
        <h2>카운터</h2>
        <div>number: {this.state.number}</div>
        <button name="plus" onClick={this.handlePlusButton}>+</button>
        <button name="minus" onClick={this.handleMinusButton}>-</button>
      </div>
    );
  }
}

export default Counter;
