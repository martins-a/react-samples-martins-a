import { Form, Formik } from "formik";
import MaterialTextField from "./material-inputs/MaterialTextField";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import "./FormikWithMaterial.css";
import { useState } from "react";
import MaterialSelectField from "./material-inputs/MaterialSelectField";
import MaterialCheckboxGroup from "./material-inputs/MaterialCheckboxGroup";

export default function FormikWithMaterial() {
  const [submitedValues, setSubmitedValues] = useState({});

  // this could be so better with TS
  const jobOptions = [
    {
      value: 0,
      label: 'Select',
    },
    {
      value: 1,
      label: 'QA tester',
    },
    {
      value: 2,
      label: 'Developer',
    }
  ]

  const formProps = {
    initialValues: {
      name: "",
      surname: "",
      job: jobOptions[0].value,
      job_alt: []
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required."),
      job: Yup.number().min(1, 'Please, select a valid option'),
      job_alt: Yup.array().min(1, 'Must have 1 item').required('Required.')
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
            <MaterialCheckboxGroup name="job_alt" label="Job_alt" options={jobOptions} />
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
