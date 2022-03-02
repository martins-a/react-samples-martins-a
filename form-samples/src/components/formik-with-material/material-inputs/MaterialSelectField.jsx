import { FormLabel, MenuItem, Select } from "@mui/material";
import { useField } from "formik";

export default function MaterialSelectField({ label, options, ...props }) {
  const [field, meta] = useField(props);

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Select
        fullWidth
        {...props}
        {...field}
        error={meta.touched && Boolean(meta.error)}
        helperText={meta.touched && meta.error}
      >
        {options &&
          Object.keys(options).map((key) => (
            <MenuItem value={options[key]}>{key}</MenuItem>
          ))}
      </Select>
    </>
  );
}
