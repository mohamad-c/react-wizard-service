import { Button } from "@mantine/core";
import React, { useContext } from "react";
import { ReqContext } from "../../context/ReqContext";
import InputText from "../InputText";



const UserForm = () => {
  const model = { firstName: "", lastName: "", phoneNumber:"" , email: "" };
  const { addUserMutation } = useContext(ReqContext);
  return (
    <>
      <form>
        <InputText id="firstName" model={model} title="First name" type="text" />
        <InputText id="lastName" model={model} title="Last name" type="text" />
        <InputText id="phoneNumber" model={model} title="Phone number" type="number" />
        <InputText id="email" model={model} title="Email address" type="email" />
        <Button mt={10} variant="outline" style={{width:"100%"}} onClick={()=>addUserMutation.mutate(model)}>Submit 💎</Button>
      </form>
    </>
  );
};

export default UserForm;
