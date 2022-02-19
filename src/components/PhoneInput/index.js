import React from 'react';
import { TextField } from '@mui/material';
import { useField } from 'formik';
import { IMaskInput } from 'react-imask';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, definitions, mask, ...other } = props;

  const handleChange = value => onChange({ target: { name: props.name, value } });

  return (
    <IMaskInput
      {...other}
      overwrite
      mask={mask}
      unmask={true}
      inputRef={ref}
      definitions={definitions}
      onAccept={handleChange}
    />
  );
});

const PhoneInput = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const textFieldProps = {
    ...field,
    ...otherProps,
    size: 'small',
    fullWidth: true,
    variant: 'outlined',
  };

  if (meta && meta.touched && meta.error) {
    textFieldProps.error = true;
    textFieldProps.helperText = meta.error;
  }

  return (
    <TextField
      {...textFieldProps}
      InputProps={{
        inputComponent: TextMaskCustom,
        inputProps: {
          mask: '(#00) 000-0000',
          definitions: { '#': /[1-9]/ },
        },
      }}
    />
  );
};

export default PhoneInput;
