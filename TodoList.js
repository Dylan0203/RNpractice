const {
  TodoItem
  } = window.App;

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        <TodoItem
          title="Item 1"
          completed={true}
        />
        <TodoItem
          title="Item 2"
          completed={false}
        />
        <TodoItem
          title="Item 3"
          completed={false}
        />
      </ul>
    );
  }
}

window.App.TodoList = TodoList;
