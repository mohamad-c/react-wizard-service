import React, { useState, useEffect } from "react";
import { TextInput } from "@mantine/core";

const InputText = ({ title, model, id, type, name, err, func, formValue }) => {
  // useEffect(() => {
  //   setValue(model[id]);
  // }, [model, id]);
  console.log(model);
  return (
    <TextInput
      py={10}
      variant="filled"
      label={title}
      onChange={func}
      model={model}
      id={id}
      type={type}
      value={formValue}
      name={name}
      error={err}
    />
  );
};

export default InputText;
