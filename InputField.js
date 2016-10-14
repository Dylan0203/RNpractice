class InputField extends React.Component {
  render() {
    return (
      <div className="inputfield">
        <h1>InputField</h1>
        <input type="text" {...this.props}/>
      </div>
    );
  }
}

window.App.InputField = InputField;
