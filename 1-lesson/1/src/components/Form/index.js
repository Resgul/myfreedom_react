import React from 'react'

class Form extends React.Component {
  state = {
    name: '',
    email: '',
    errors: {
      name: null,
      email: null,
    }
  };
  
  handleChange = (e) => {
    const { name, value } = e.target;

    // if() {}

    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }));

    // else 

    
    this.setState(prevState => ({
      ...prevState,
      [name]: value,
      errors: {

      }
    }));
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.state);
  }


  render() {
    const { name, email, errors } = this.state;

    return (
      <form>
        <p>{name}</p>
        <p>{email}</p>
        <input value={name} className={errors.name ? 'error' : ''} name="name" onChange={this.handleChange} />
        <input value={email} name="email" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Send</button>
      </form>
    );
  }
}

export default Form;
