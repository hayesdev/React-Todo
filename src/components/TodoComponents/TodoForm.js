import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      todoText: ""
    };
  }

  handleChanges = e => {
    e.preventDefault();
    this.setState({ todoList: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
  };
}

export default TodoForm;
