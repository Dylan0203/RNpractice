class TodoHeader extends React.Component {
  render() {
    const { name, username, todoCount} = this.props;

    return (
      <div>
        <h1>This is {name}</h1>
        <h3>Hi, {username}</h3>
        <h5>You have still {todoCount} things do to!</h5>
      </div>
    );
  }
}

window.App.TodoHeader = TodoHeader;
