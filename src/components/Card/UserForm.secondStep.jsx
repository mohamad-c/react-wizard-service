import { Button } from "@mantine/core";
import React from "react";
import InputText from "../InputText";



const UserForm = () => {
  const model = { firstName: "", lastName: "", phoneNumber:0 , email: "" };
 
  return (
    <>
      <form>
        <InputText id="firstName" model={model} title="First name" type="text" />
        <InputText id="lastName" model={model} title="Last name" type="text" />
        <InputText id="phoneNumber" model={model} title="Phone number" type="number" />
        <InputText id="email" model={model} title="Email address" type="email" />
        <Button mt={10} variant="outline" style={{width:"100%"}}>Submit 💎</Button>
      </form>
    </>
  );
};

export default UserForm;
