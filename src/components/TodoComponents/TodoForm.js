import React from "react";
import { render } from "react-dom";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoText: ""
    };
  }

  handleChanges = e => {
    // e.preventDefault();
    this.setState({ todoText: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoText);

    // this sets state to an empty string to clear the form!!
    this.setState({ todoText: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="todo"
          value={this.state.todoText}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}
export default TodoForm;
