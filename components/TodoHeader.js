class TodoHeader extends React.Component {
  render() {
    const { title, username, todoCount} = this.props;

    return (
      <div>
        <h1>This is {title}</h1>
        <h3>Hi, {username}</h3>
        <h5>You have still {todoCount} things do to!</h5>
      </div>
    );
  }
}

TodoHeader.propTypes = {
  title: React.PropTypes.string,
  username: React.PropTypes.string,
  todoCount: React.PropTypes.number
};

TodoHeader.defaultProps = {
  title: '我的待辦清單',
  username: '訪客',
  todoCount: 0
};

window.App.TodoHeader = TodoHeader;
