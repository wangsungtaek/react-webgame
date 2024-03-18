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

  wordChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    
    if(this.state.value.length <= 0) return;
    const firstWord = this.state.value.charAt(0);
    const answer = this.state.word.slice(-1);

    if(firstWord == answer) {
      this.setState({
        value: "",
        result: "정답입니다.",
        word: this.state.value
      })
    } else {
      this.setState({
        value: "",
        result: "오답입니다."
      })
    }

    this.input.focus();
  }

  inputRef = (c) => {
    this.input = c;
  }

  input;

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmit}>
          <input ref={this.inputRef} value={this.state.value} onChange={this.wordChange} />
          <button type="summit">제출</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}

module.exports = wordRelay;