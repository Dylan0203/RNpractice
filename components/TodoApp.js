const {
  TodoActions,
  TodoStore,
  TodoHeader,
  InputField,
  TodoList
} = window.App;

class TodoApp extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: TodoStore.getAll()
    };
  }

  componentDidMount() {
    TodoActions.loadTodos();
    this._removeChangeListener = TodoStore.addChangeListener(
      () => this.setState({ todos: TodoStore.getAll() })
    );
  }

  componentWillUnmount() {
    this._removeChangeListener();
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
          onSubmitEditing={TodoActions.createTodo}
        />
        <TodoList
          todos={todos}
          onDeleteTodo={TodoActions.deleteTodo}
          onToggleTodo={TodoActions.toggleTodo}
          onUpdateTodo={TodoActions.updateTodo}
        />
      </div>
    );
  }
}

window.App.TodoApp = TodoApp;
