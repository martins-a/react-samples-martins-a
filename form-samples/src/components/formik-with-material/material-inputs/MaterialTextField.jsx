import { FormLabel, TextField } from "@mui/material";
import { useField } from "formik";

export default function MaterialTextField({ label, ...props }) {

    const [field, meta] = useField(props);

    return (
        <>
            <FormLabel>{ label }</FormLabel>
            <TextField
                fullWidth
                { ...props }
                { ...field }
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error}
            ></TextField>
        </>
    )

}