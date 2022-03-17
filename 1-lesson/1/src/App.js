import React from 'react';
import Counter from './components/Counter';
import Form from './components/Form';

const data = {
  label: 'HEADER'
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <Counter headerLabel={data.label} /> */}
        <Form />
      </div>
    );
  }
}

export default App;
