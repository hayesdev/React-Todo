import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todos = [
  {
    name: "Learn React",
    id: 1,
    completed: false
  },
  {
    name: "Clean room",
    id: 2,
    completed: false
  },
  {
    name: "Go to store",
    id: 3,
    completed: false
  },
  {
    name: "Cook dinner",
    id: 4,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoList: todos
    };
  }

  toggleTodo = id => {
    const newTodoList = this.state.todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        };
      } else {
        return todo;
      }
    });
    this.setState({
      todoList: newTodoList
    });
  };

  addTodo = todoName => {
    const newTodo = {
      name: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  };

  clearCompleted = todo => {
    this.setState({
      todoList: this.state.todoList.filter(todo => !todo.completed)
    });
  };

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h2>Todo App </h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          todos={this.state.todoList}
          toggleTodo={this.toggleTodo}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
