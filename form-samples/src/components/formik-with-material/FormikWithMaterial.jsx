import { Form, Formik } from "formik";
import MaterialTextField from "./material-inputs/MaterialTextField";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import "./FormikWithMaterial.css";
import { useState } from "react";
import MaterialSelectField from "./material-inputs/MaterialSelectField";

export default function FormikWithMaterial() {
  const [submitedValues, setSubmitedValues] = useState({});

  // this could be so better with TS
  const jobOptions = {
    "Select": 0,
    "QA tester": 1,
    "Developer": 2,
  };

  const formProps = {
    initialValues: {
      name: "",
      surname: "",
      job: jobOptions.Select,
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required."),
    }),
    onSubmit: (values) => {
      setSubmitedValues(values);
    },
  };

  return (
    <>
      <div className="form-wrapper">
        <Formik {...formProps}>
          <Form>
            <MaterialTextField name="name" label="Name" />
            <MaterialTextField name="surname" label="Surname" />
            <MaterialSelectField name="job" label="Job" options={jobOptions}/>
            <div className="submit-btn">
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Formik>
        <div className="values-debugger">
          <pre>{JSON.stringify(submitedValues, null, 2)}</pre>
        </div>
      </div>
    </>
  );
}
