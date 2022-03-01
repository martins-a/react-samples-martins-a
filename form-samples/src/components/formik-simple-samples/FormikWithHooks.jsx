import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';

// commented for reference.
/*const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.surname) {
    errors.surname = "Required";
  }

  return errors;
};*/

export default function FormikWithHooks() {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
    },
    validationSchema: Yup.object({
        name: Yup.string().required('This field is mandatory'),
        surname: Yup.string().required('This field is mandatory')
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Name</label>
        <input
          id="name"
          type="text"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </div>
      <div>
        <label>Surname</label>
        <input
          id="surname"
          type="text"
          {...formik.getFieldProps('surname')}
        />
        {formik.touched.surname && formik.errors.surname ? (
          <div>{formik.errors.surname}</div>
        ) : null}
      </div>
      <button type="submit">Send</button>
    </form>
  );
}
