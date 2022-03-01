import { Formik, Field, ErrorMessage, Form } from "formik";
import React from "react";
import * as Yup from "yup";

export default function FormikWithHooks2() {
  const formikProps = {
    initialValues: {
      name: "",
      surname: "",
      job: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("This field is mandatory!!"),
      surname: Yup.string().required("This field is mandatory!!"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  };

  // "Formik" uses "useFormik" internally
  // Also, it uses a context that send all proprieties provided by formik hook to be consumedd
  // it also returns a function (render prop) with this properties
  // this is wrapped and abstracted by "Field" and "ErrorMessage" components

  return (
    <Formik {...formikProps}>
      <Form>
        <div>
          <label>Name</label>
          <Field name="name" />
          <ErrorMessage name="name" />
        </div>
        <div>
          <label>Surname</label>
          <Field name="surname" />
          <ErrorMessage name="surname" />
        </div>

        <div>
          <label htmlFor="Job">Job</label>
          <Field name="job" as="select">
            <option value={0}>Select</option>
            <option value={1}>Developer</option>
            <option value={2}>UX Designer</option>
            <option value={3}>QA tester</option>
            <option value={4}>Project Manager</option>
          </Field>
        </div>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
}
