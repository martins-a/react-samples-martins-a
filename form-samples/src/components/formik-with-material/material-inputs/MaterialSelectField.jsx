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
      >
        {options &&
          options.map((option) => (
            <MenuItem key={option.label}  value={option.value}>{option.label}</MenuItem>
          ))}
      </Select>
      { meta.touched && Boolean(meta.error) && <div style={{color: 'red'}}>{ meta.error }</div> }
    </>
  );
}
