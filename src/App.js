import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  state = {
    counter: 5,
    error: false
  };

  //부모 컴포넌트에서 구현해줘야함
  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
    // API 를 통해서 서버로 오류 내용 날리기
  }
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };

  reset = () => {
    this.setState({
      counter: 0
    });
  };

  render() {
    if (this.state.error) {
      return <div>에러가 났어요</div>;
    }
    return (
      <div ref={ref => (this.myDiv = ref)}>
        {this.state.counter < 10 && <MyComponent value={this.state.counter} />}
        <button onClick={this.handleClick}>click me </button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;
