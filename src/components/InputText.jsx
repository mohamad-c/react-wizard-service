import React, { useState } from "react";
import { TextInput } from "@mantine/core";

const InputText = ({ title, model, id, type }) => {
  const [value, setValue] = useState(model[id]);
  const inputHandler = (e) => {
    setValue({ [model[id]]: e.target.value });
    model[id] = e.target.value;
  };
  const numberInputHandler = (e) => {
    setValue({ [model[id]]: Number(e.target.value) });
    model[id] = Number(e.target.value);
  };
  console.log(model);
  return (
    <TextInput
      py={10}
      variant="filled"
      label={title}
      onChange={type === "number" ? numberInputHandler : inputHandler}
      model={model}
      id={id}
      type={type}
    />
  );
};

export default InputText;
