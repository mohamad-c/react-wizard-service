import { Button, Text } from "@mantine/core";
import React, { useContext } from "react";
import { FormValidationContext } from "../../context/FormValidationContext";
import InputText from "../InputText";


const UserForm = () => {
  const { model, formik } = useContext(FormValidationContext)
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <InputText
          id="firstName"
          model={model}
          title="First name"
          type="text"
          name="firstName"
          func={formik.handleChange}
          formValue={formik.values.firstName}
          err={Boolean(formik.errors.firstName)}
        />
        {formik.errors.firstName ? (
          <Text fz="xs" c="red">
            {formik.errors.firstName}
          </Text>
        ) : null}
        <InputText
          id="lastName"
          model={model}
          title="Last name"
          type="text"
          name="lastName"
          func={formik.handleChange}
          formValue={formik.values.lastName}
          err={Boolean(formik.errors.lastName)}
        />
        {formik.errors.lastName ? (
          <Text fz="xs" c="red">
            {formik.errors.lastName}
          </Text>
        ) : null}
        <InputText
          id="phoneNumber"
          model={model}
          title="Phone number"
          type="number"
          name="phoneNumber"
          func={formik.handleChange}
          formValue={formik.values.phoneNumber}
          err={Boolean(formik.errors.phoneNumber)}
        />
        {formik.errors.phoneNumber ? (
          <Text fz="xs" c="red">
            {formik.errors.phoneNumber}
          </Text>
        ) : null}
        <InputText
          id="email"
          model={model}
          title="Email address"
          type="email"
          name="email"
          func={formik.handleChange}
          formValue={formik.values.email}
          err={Boolean(formik.errors.email)}
        />
        {formik.errors.email ? (
          <Text fz="xs" c="red">
            {formik.errors.email}
          </Text>
        ) : null}
        <Button
          mt={10}
          variant="outline"
          style={{ width: "100%" }}
          type="submit"
        >
          Submit 💎
        </Button>
      </form>
    </>
  );
};

export default UserForm;
