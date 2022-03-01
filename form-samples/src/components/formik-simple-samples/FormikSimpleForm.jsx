
import { Form, Formik, Field } from 'formik';
import React from 'react';

export default function FormikSimpleForm() {

    const onSubmit = async (values) => {
        alert(JSON.stringify(values, null, 2));
    }

    return (
        <Formik
            initialValues={{
                name: '',
                surname: '',
            }}
            onSubmit={onSubmit}
        >
            <Form>
                <div>
                    <label>Name</label>
                    <Field id="name" name="name" />
                </div>
                <div>
                    <label>Surname</label>
                    <Field id="surname" name="surname" />
                </div>
                <button type="submit">Send</button>
            </Form>
        </Formik>
    )
}