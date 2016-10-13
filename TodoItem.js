class TodoItem extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" />
        <span>Item 1</span>
        <button>x</button>
      </li>
    );
  }
}

window.App.TodoItem = TodoItem;
