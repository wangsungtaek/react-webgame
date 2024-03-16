const React = require("react");

const GuGuDan = () => {
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState("");
  const [result, setResult] = React.useState("");
  const inputRef = React.useRef(null);

  const changeValue = (v) => {
    setValue(v.target.value);
  };

  const submitValue = (e) => {
    e.preventDefault();
    if (value == first * second) {
      setResult("정답입니다 : " + value);
      setValue("");
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
    } else {
      setResult("오답입니다.");
      setValue("");
    }
    inputRef.current.focus();
  };

  return (
    <>
      <div id="title">
        {first} * {second} 는?
      </div>
      <form onSubmit={submitValue}>
        <input
          type="number"
          ref={inputRef}
          value={value}
          onChange={changeValue}
        />
        <button type="submit">입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = GuGuDan;
