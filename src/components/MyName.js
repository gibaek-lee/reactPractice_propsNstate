/* props example component
props 특징
1.부모컴포넌트가 자식컴포넌트에게 전달해주는 값
2.자식컴포넌트는 props를 받아오기만 하고, 직접 수정할 수는 없다(정적 데이터).
3.this.props로 조회 가능하다.
*/

import React, { Component } from 'react'

/*
클래스형 컴포넌트와 함수형 컴포넌트의 주요 차이점
1.함수형 컴포넌트는 state와 LifeCycle이 빠져있다.
2.함수형 컴포넌트가 초기 마운트가 미세하게 빠르고 메모리를 덜 사용한다.
 - 단순히 값을 보여주는 컴포넌트의 수가 많으면 함수형 사용을 고려해야 한다.
*/

//클래스형 컴포넌트
class MyName extends Component {
  //변수(props)
  static defaultProps = {//props를 빠뜨릴 때, 혹은 일부러 비워야 할 때
    name: '기본이름'
  }
  //화면 렌더링(html)
  render(){
    return (
      <div>
        안녕하세요! 제 이름은 <b>{this.props.name}</b> 입니다.
      </div>
    );
  }
}

/*
//함수형 컴포넌트: 단순히 props 받아와서 보여주는 목적일 때
const MyName = ({ name }) => {
  return (
    <div>
      안녕하세요! 제 이름은 <b>{name}</b> 입니다.
    </div>
  );
}
//함수형 컴포넌트에서는 props를 다음과 같이 초기화 한다.
MyName.defaultProps = {
  name: '기본이름'
}
*/

export default MyName;
