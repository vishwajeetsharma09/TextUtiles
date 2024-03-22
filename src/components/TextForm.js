import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("upper click is clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convert to Upper case","success")
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("convert to lower case","success")
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has been copies","success")
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed Extra spaces","success")
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert letter to upperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert letter to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
      </div>
      <div
        className="Container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>you text summary</h1>
        <p>
          {text.split(" ").length} word and
          {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} minute read</p>
        <h2>
          {text.length > 0 ? text : "Enter your text something to above preview here"}
        </h2>
      </div>
    </>
  );
}
