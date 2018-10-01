# React Practice(props and state, LifeCycle API, error handling)
- Simple example of 'how to use props and state with eventHandler'
- Sequence of component LifeCycle API with console.log
- Child component error catch via componentDidCatch API

## Characteristic of props and state
- props<br>
1. Variable that parent component send to child component<br>
2. (Static data)Child component cannot modify props directly but just take it<br>
3. Contact to variables via 'this.props'<br>

- state<br>
1. Define it inside of component, locally<br>
2. (Dynamic data)Can change it inside the component<br>
3. classfiels: state can changed inside this.setState<br>
4. Component is rerendered when this.setState is called<br>
5. Only can update state with 'this.setState' only when a variable is an ojbect type.

## LifeCycle API
- Generation sequence of component LifeCycle API<br>
<p align="center">
  <img width="70%" src="./src/image/reactComponentLifeCycleAPI.png">
</p>

- console log of initial generation and plus button action<br>
<p align="center">
  <img width="60%" src="./src/image/LifeCycleAPIconsoleLog.png">
</p>

## error handling
 - Component cannot catch an error of itself, but can only when error is generated from child component.
 - API: componentDidCatch(err, info)<br>
 <p align="center">
  <img width="60%" src="./src/image/errorCatch.png">
</p>

## (ref)Class type Component vs Functional Component
- Class type Component: normal case when a component needs to use state, props, eventHandler, or LifeCylceAPI
<p align="center">
  <img width="50%" src="./src/image/classTypeComponentImg.png">
</p>

- Functional Component: use when component is made only for shows props
<p align="center">
  <img width="40%" src="./src/image/functionalComponentImg.png">
</p>

## Reference
React tutorial - Velopert Blog [누구든지 하는 리액트 4편: props와 state](https://velopert.com/3629)
