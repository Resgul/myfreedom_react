import React from 'react'

class Counter extends React.Component {
  state = {
    count: 1,
    isShown: true
  };
  
  handleClick = () => {
    const { isShown, count } = this.state;

    this.setState(prevState => ({
      ...prevState,
      isShown: !isShown,
    }), () => {
      console.log(count)
    });

    
  }

  handleCountClick = () => {
    const { count } = this.state;

    this.setState(prevState => ({
      ...prevState,
      count: count + 1,
    }), () => {
      const { count: newCount } = this.state;
    
      console.log(newCount, count)
    });

  }

  render() {
    const { headerLabel } = this.props;
    const { count, isShown } = this.state;
    
    return (
      <div>
        {isShown && <h1>{headerLabel}</h1>}
        <ul>
          <li>point 1</li>
          <li>point 2</li>
          <li>point 3</li>
          <li>point 4</li>
        </ul>
        <button onClick={this.handleClick}>Show / hide header</button>
        <button onClick={this.handleCountClick}>{count}</button>
      </div>
    );
  }
}

export default Counter;
