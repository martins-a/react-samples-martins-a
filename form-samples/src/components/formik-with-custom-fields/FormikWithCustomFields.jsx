import { Formik, Form, useField } from "formik";
import React from "react";
import * as Yup from "yup";

const AugustoTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

const AugustoSelectInput = ({ label, children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}>
        {children}
      </select>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

export default function FormikWithCustomFields() {
  const formikProps = {
    initialValues: {
      name: "",
      surname: "",
      job: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("This field is required!!"),
      surname: Yup.string().required("This field is required!!"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  };

  return (
    <Formik {...formikProps}>
      <Form>
        <AugustoTextInput name="name" label="Name" />
        <AugustoTextInput name="surname" label="Surname" />
        <AugustoSelectInput name="job" label="Job">
          <option value={0}>Select</option>
          <option value={1}>Developer</option>
          <option value={2}>UX Designer</option>
          <option value={3}>QA tester</option>
          <option value={4}>Project Manager</option>
        </AugustoSelectInput>
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
}
