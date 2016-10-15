const {
  TodoHeader,
  InputField,
  TodoList
} = window.App;

class TodoApp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      todos: [
        {
          id: 0,
          title: 'Item 1',
          completed: true
        },
        {
          id: 1,
          title: 'Item 2',
          completed: false
        },
        {
          id: 2,
          title: 'Item 3',
          completed: false
        }
      ]
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
        />
        <TodoList
          todos={todos}
          onDeleteTodo={
            (id) => this.setState({
              todos: _deleteTodo(todos, id)
            })
          }
        />
      </div>
    );
  }
}

const _deleteTodo = (todos, id) => {
  const idx = todos.findIndex((todo) => todo.id === id);
  if (idx !== -1) todos.splice(idx, 1);
  return todos;
};

window.App.TodoApp = TodoApp;
