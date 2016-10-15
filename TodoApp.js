const {
  TodoHeader,
  InputField,
  TodoList
  } = window.App;

const todos = [
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

class TodoApp extends React.Component {
  render() {
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
        <TodoList todos={todos}/>
      </div>
    );
  }
}

window.App.TodoApp = TodoApp;
