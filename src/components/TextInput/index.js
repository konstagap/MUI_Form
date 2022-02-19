import { TextField } from '@mui/material';
import { useField } from 'formik';

const TextInput = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const textFieldProp = {
    ...field,
    ...otherProps,
    size: 'small',
    fullWidth: true,
    variant: 'outlined',
  };

  if (meta && meta.touched && meta.error) {
    textFieldProp.error = true;
    textFieldProp.helperText = meta.error;
  }

  return <TextField {...textFieldProp} />;
};

export default TextInput;
