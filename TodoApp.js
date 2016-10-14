const {
  TodoHeader,
  InputField,
  TodoList
  } = window.App;

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <TodoHeader
          name="React ToDo Demo"
          username="Dylan"
          todoCount={123}
        />
        <InputField
          placeholder="whatever..."
        />
        <TodoList />
      </div>
    );
  }
}

window.App.TodoApp = TodoApp;
