import { Checkbox, FormLabel } from "@mui/material";
import { useField } from "formik";


export function MaterialCheckbox({ label, value, ...props}) {

    const [field, ] = useField(props);

    return (
        <>
             <FormLabel>{label}</FormLabel>
             <Checkbox  type="checkbox" {...field} { ...props } value={value.toString()} />
        </>

    )
}

export default function MaterialCheckboxGroup({ label, options, ...props }) {

  const [, meta] = useField(props);

  return (
    <>
      <FormLabel>{label}</FormLabel>
      {options.map((option) => {
        return (
            <MaterialCheckbox 
                { ...props }
                key={option.label}
                label={option.label}
                value={option.value}
            />
        );
      })}
      { meta.touched && Boolean(meta.error) ? <label style={{color: 'red'}}>{ meta.error }</label> : null}
    </>
  );
}
