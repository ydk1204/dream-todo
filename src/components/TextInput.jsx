import React, { useState } from "react";
const pattern = /\s/g;

const TextInput = ({ setList }) => {
  const [text, setText] = useState("");

  const textChange = (e) => {
    setText(e.target.value);
  };

  const AddEvent = () => {
    const nonSpacing = text.replace(pattern, "");
    if (nonSpacing.length !== 0) setList((prev) => nonSpacing);
    setText("");
  };
  return (
    <>
      <input
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={textChange}
      />
      <button onClick={AddEvent}>Add</button>
    </>
  );
};

export default TextInput;
