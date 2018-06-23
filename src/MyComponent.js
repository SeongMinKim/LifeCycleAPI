import React, { Component } from 'react';

class MyComponent extends Component {
  state = {
    value: 0
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, netState) {
    if (nextProps.value === 10) return false;
    return true;
  }

  //업데이트 하고 난 후
  componentDidUpdate(prevProps, prevState) {
    if (this.props.value !== prevProps.value) {
      console.log('값바꼇다야', this.props.value);
    }
  }

  componentWillUnmount() {
    console.log('ㅂㅂ 마지막 값은 ', this.props.value);
  }

  render() {
    return (
      <div>
        //오류 났을때 try catch 정도?
        {this.props.missing.something}
        <p>props : {this.props.value}</p>
        <p>state : {this.state.value}</p>
      </div>
    );
  }
}

export default MyComponent;
