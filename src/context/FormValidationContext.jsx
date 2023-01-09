import { createContext, useContext } from "react";
import { useFormik } from "formik";
import { ReqContext } from "./ReqContext";

export const FormValidationContext = createContext();

const FormValidationProvider = ({ children }) => {
  const validate = (values) => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Field is required";
    } else if (values.firstName.length < 2) {
      errors.firstName = "Name must be above 2 chars";
    }
    if (!values.lastName) {
      errors.lastName = "Field is required";
    } else if (values.lastName.length < 2) {
      errors.lastName = "Name must be above 2 chars";
    }
    if (!values.email) {
      errors.email = "Field is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.phoneNumber) {
      errors.phoneNumber = "Field is required";
    } else if (
      !/^(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/i.test(
        values.phoneNumber
      )
    ) {
      errors.phoneNumber = "Invalid phone number";
    }
    return errors;
  };
  const model = { firstName: "", lastName: "", phoneNumber: "", email: "" };
  const { addUserMutation } = useContext(ReqContext);
  const formik = useFormik({
    initialValues: model,
    validate,
    onSubmit: (values) => {
      addUserMutation.mutate(values);
      formik.resetForm()
    },
  });
  return (
    <FormValidationContext.Provider value={{ model, formik }}>
      {children}
    </FormValidationContext.Provider>
  );
};

export default FormValidationProvider;
