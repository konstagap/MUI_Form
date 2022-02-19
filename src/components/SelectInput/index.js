import React from 'react';
import { useField } from 'formik';
import TextField from '@mui/material/TextField';

const SelectWrapper = ({ name, options, children, ...otherProps }) => {
  const [field, meta] = useField(name);

  const selectProps = {
    ...field,
    ...otherProps,
    size: 'small',
    fullWidth: true,
    SelectProps: {
      MenuProps: {
        PaperProps: {
          style: {
            maxHeight: 150,
          },
        },
      },
    },
  };

  if (meta && meta.touched && meta.error) {
    selectProps.error = true;
    selectProps.helperText = meta.error;
  }

  return (
    <TextField select {...selectProps}>
      {children}
    </TextField>
  );
};

export default SelectWrapper;
