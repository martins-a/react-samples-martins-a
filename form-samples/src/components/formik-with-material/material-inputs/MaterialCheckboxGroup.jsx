import { Checkbox, FormLabel } from "@mui/material";
import { useField } from "formik";


export function MaterialCheckbox({ label, value, ...props}) {

    const [field, ] = useField(props);

    return (
        <>
             <Checkbox  type="checkbox" {...field} { ...props } value={value.toString()} />
             <FormLabel>{label}</FormLabel>
        </>

    )
}

export default function MaterialCheckboxGroup({ label, options, ...props }) {

  const [, meta] = useField(props);

  return (
    <>
        <div>
          <FormLabel>{label}</FormLabel>
        </div>
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
      { meta.touched && Boolean(meta.error) ? <div style={{color: 'red'}}>{ meta.error }</div> : null}
    </>
  );
}
