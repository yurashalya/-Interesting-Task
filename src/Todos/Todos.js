import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

class Todos extends React.Component {
  state = {
    inputValue: '',
    isValidForm: false
  };

  componentDidMount () {
    if(localStorage.getItem('state')) {
      let newArray = [];
      newArray = JSON.parse(localStorage.getItem('state'));
      newArray.forEach((item) => {
        this.props.add(item);
      });
    } 
  };

  inputChange = (e) => {
    this.setState({inputValue: e.target.value});
  };

  addTask = () => {
    let stateArray = this.props.todos;

    stateArray.includes(this.state.inputValue)
        ? this.setState({isValidForm: true})
        : this.props.add(this.state.inputValue) && this.setState({isValidForm: false})

    this.setState({inputValue:''});
  };

  removeTast = (t) => {
    this.props.remove(t);
  };

  render() {
    const {isValidForm} = this.state;
    return (
      <div style={{ margin: '0 auto', maxWidth: '400px' }} >
      <h2>Todos:</h2>
      <ul className='list-group list-group-flush'>
        {this.props.todos.length !== 0 ?
          this.props.todos.map((t, idx) => (
            <li key={t} className='list-group-item d-flex justify-content-between align-items-center'>
              {++idx}. {t}
              <button className='close' onClick={() => this.removeTast(t)}>
                <span>&times;</span>
              </button>
            </li>
          )) :
          <div><h4 className='text-success'>Congrats! You did it!</h4></div>
        }
      </ul>
      <br />
      <div className='input-group'>
        <input type='text' 
              className='form-control' 
              placeholder='Add task' 
              value={this.state.inputValue}
              onChange={(e) => this.inputChange(e)} />
        <div className='input-group-append'>
          <button className='btn btn-outline-secondary' onClick={this.addTask}>Add</button>
        </div>
      </div>
      { isValidForm && <Alert variant='danger mt-4'>Todo already exist in the list</Alert> }
    </div>
    )
  }
}



Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
}

export default Todos
