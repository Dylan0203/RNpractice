const {
  TodoHeader,
  InputField,
  TodoList
} = window.App;

const _deleteTodo = (todos, id) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  if (idx !== -1) todos.splice(idx, 1);
  return todos;
};

const _toggleTodo = (todos, id, completed) => {
  const target = todos.find((todo) => todo.id === id);
  if (target) target.completed = completed;
  return todos;
};

const _createTodo = (todos, title) => {
  const setIdForNewItem = (todos) => {
    var newId
    if (todos.length == 0) {
      newId = 0
    }
    else {
      newId = todos[todos.length - 1].id + 1
    }
    return newId
  };

  todos.push({
    id: setIdForNewItem(todos),
    title,
    completed: false
  });
  return todos;
};

const _updateTodo = (todos, id, title) => {
  const target = todos.find((todo) => todo.id === id);
  if (target) target.title = title;
  return todos;
};

class TodoApp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    fetch('./todo.json')
      .then((response) => response.json())
      .then((todos) => this.setState({ todos }));
  }

  updateTodoBy(updateFn) {
    return (...args) => {
      this.setState({
        todos: updateFn(this.state.todos, ...args)
      });
    };
  }

  render() {
    const { todos } = this.state;
    return (
      <div>
        <TodoHeader
          title="React ToDo Demo"
          username="Dylan"
          todoCount={todos.filter((todo) => !todo.completed).length}
        />
        <InputField
          placeholder="whatever..."
          onSubmitEditing={this.updateTodoBy(_createTodo)}
        />
        <TodoList
          todos={todos}
          onDeleteTodo={this.updateTodoBy(_deleteTodo)}
          onToggleTodo={this.updateTodoBy(_toggleTodo)}
          onUpdateTodo={this.updateTodoBy(_updateTodo)}
        />
      </div>
    );
  }
}

window.App.TodoApp = TodoApp;
