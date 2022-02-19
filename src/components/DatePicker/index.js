import React from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker as MUIDatePicker } from '@mui/lab';
import { useField } from 'formik';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const DatePicker = ({ name, required = false, ...otherProps }) => {
  const [field, meta] = useField(name);

  //   console.log('-field-----------------------------------------');
  //   console.dir({ field, meta }, { depth: null });
  //   console.log('------------------------------------------');

  const datePickerProps = {
    ...field,
    ...otherProps,
    minDate: new Date(''),
    disableFuture: true,
    onChange: value => field.onChange({ target: { name, value } }),
  };

  if (meta && meta.touched && meta.error) {
    // this error will come from validation
    datePickerProps.error = true;
    datePickerProps.helperText = meta.error;
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <MUIDatePicker
        {...datePickerProps}
        renderInput={params => {
          //   console.log('params', params);
          return (
            <TextField
              {...params}
              required
              fullWidth
              size='small'
              helperText={params.error ? datePickerProps.helperText || 'Invalid date' : ''}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;
