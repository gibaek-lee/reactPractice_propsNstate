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
    number: 0,
    error: false
  }

  //LifeCycle API

  //컴포넌트 초기생성: 컴포넌트가 브라우저에 나타나기 전, 후로 호출되는 API
  constructor(props){
    /*
    - 호출시점: 컴포넌트가 새로 만들어질 때 1회 호출됨
    */
    super(props);
    console.log('constructor');
  }
  componentDidMount(){
    /*
    - 호출시점: 컴포넌트가 처음 화면에 나타나게 됐을 때 1회 호출됨
    - 사용목적:
    DOM 사용해야 하는 외부 라이브러리 연동: D3
    컴포넌트에 필요한 데이터 외부에 요청: axios, fetch 등을 통해 Ajax 요청(GraphQL, etc)
    DOM 속성을 읽거나 직접 변경하는 작업: 스크롤 설정, 크기 읽어오기 등
    */
    console.log('componentDidMount');
  }

  //컴포넌트 업데이트(render()함수 호출): props, state의 변화로 결정됨. 업데이트 전, 후로 호출되는 API
  static getDerivedStateFromProps(nextProps, prevState){
    /*
    - 호출시점: 컴포넌트가 새로운 props를 받게 됐을 때 호출됨
    - 사용목적:
    props로 받아온 값을 state로 동기화 하는 작업을 해줘야 하는 경우 사용
    주의! 여기에서 setState를 하는 것이 아니라 특정 props가 바뀔 때 설정하고 싶은 state 값을 return하는데 사용(이하 예시 참조)

    예시)
    if(nextProps.value !== prevState.value){
      return { value: nextProps.value };
    }
    return null; //따로 업데이트 할 것은 없다
    */
    console.log('getDerivedStateFromProps');
    return null;
  }
  shouldComponentUpdate(nextProps, nextState){
    /*
    - 호출시점: 업데이트 전
    - 사용목적:
    컴포넌트 최적화.
    react는 props와 state의 변화를 감지하기 위해 VirtualDOM에 한번 그리고 이전 DOM과 비교하여 변화가 있는 곳만 업데이트 한다.
    하지만 자식컴포넌트의 props와 state 변화가 없어도 부모컴포넌트가 리렌더링 되면 자식컴포넌트도 렌더링, 즉 render()함수 호출이 된다.
    이런 상황에서 자식컴포넌트에는 업데이트할 곳이 없으므로 VirtualDOM을 그려서 이전 DOM과 비교할 필요가 없다.
    이렇게 props와 state의 변화가 없는 상황에서 불필요하게 VirtualDOM을 렌더링하는 자원낭비를 없앨 수 있는 부분이 이 API이다.
    - 사용방법:
    return true이면 업데이트, false이면 업데이트 하지 않는다. props나 state의 이전, 이후 값의 변화를 if문, 혹은 3항 연산자를 통해 작성

    예시)
    return this.props.checked !== nextProps.checked //props가 변했으면 true를 return하여 업데이트를 수행한다.
    */
    console.log('shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevSate){
    /*
    - 호출시점: render() -> getSnapshotBeforeUpdate() -> 실제DOM변화 -> componentDidUpdate()
    - 사용목적:
    DOM변화가 일어나기 직전의 DOM상태를 가져오고, return값을 componentDidUpdate의 3번쨰 parameter인 snapshot으로 보냄
    */
    console.log('getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot){
    /*
    - 호출시점: render() 호출 이후
    - 사용목적:
    render() 호출 이후이므로 this.props와 this.state가 바뀌어 있으므로 이전의 props와 state 값을 prameter를 통해 조회한다.
    */
    console.log('componentDidUpdate');
  }

  //컴포넌트 제거
  componentWillUnmount(){
    /*
    - 호출시점: 컴포넌트가 더 이상 필요하지 않게 될 시
    - 사용목적:
    등록된 이벤트 제거(ex. clearTimeout), 외부라이브러리 인스턴스 제거(해당 라이브러리의 dispose 기능 호출)
    */
    console.log('componentWillUnmount');
  }

  //메소드(이벤트핸들러)
  handlePlusButton = () => {
    //컴포넌트의 state를 정의할 때 다음과 같은 classfiels문법을 사용한다.
    this.setState({
      number: this.state.number + 1
    })
    //만약 classfiels문법을 사용하지 않는다면 constructor를 만들어야 한다.
    console.log('*event-handlePlusButton');
  }
  handleMinusButton = () => {
    this.setState({
      number: this.state.number - 1
    })
    console.log('*event-handleMinusButton');
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

  //자식컴포넌트 에러 캐치
  componentDidCatch(err, info){
    this.setState({
      error: true
    });
    /*
    주요 에러발생 원인
    1. props로 올 줄 알았던 함수가 존재하지 않을 때
    2. props로 올 줄 알았던 배열이나 객체가 존재하지 않을 때
    해결책
    1. defaultProps에 initialize
    2. 1번으로도 놓친 버그는 componentDidCatch로 잡는다.
    3. 필요시 에러 로그를 서버에 남긴다.
    */
  }

  //렌더
  /* 주의
  1.이벤트 이름은 carmelCase로 작성한다(onClick).
  2.이벤트에 전달해 주는 값은 함수(this.handler)여야 한다. 함수호출(this.handler())이 아니다.
  */
  render(){
    console.log('*render()');

    if(this.state.error) return (<h1>Error!</h1>);

    return (
      <div>
        <h2>카운터</h2>
        <div>number: {this.state.number}</div>
        {this.state.number === 4 && <Problematic />}
        <button name="plus" onClick={this.handlePlusButton}>+</button>
        <button name="minus" onClick={this.handleMinusButton}>-</button>
      </div>
    );
  }
}

const Problematic = () => {
  throw (new Error('bugs are occured!'));
  return (
    <div>

    </div>
  );
};

export default Counter;
