const React = require("react");

class wordRelay extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      word: "성택",
      value: "",
      result: ""
    }
  };

  wordChange(e) {
    console.log(e);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(11);
  }

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmit}>
          <input onChange={this.wordChange} />
          <button type="summit">제출</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}

module.exports = wordRelay;