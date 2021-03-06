const {
  TodoItem
} = window.App;

class TodoList extends React.Component {
  render() {
    const { todos, onDeleteTodo, onToggleTodo, onUpdateTodo } = this.props;

    const todoElements = todos.map((todo) => (
      <li key={todo.id}>
        <TodoItem
          title={todo.title}
          completed={todo.completed}
          onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)}
          onToggle={(completed) => onToggleTodo && onToggleTodo(todo.id, completed)}
          onUpdate={(content) => onUpdateTodo && onUpdateTodo(todo.id, content)}
        />
      </li>
    ));
    return <ul>{todoElements}</ul>;
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onDeleteTodo: React.PropTypes.func,
  onToggleTodo: React.PropTypes.func,
  onUpdateTodo: React.PropTypes.func
};

window.App.TodoList = TodoList;
