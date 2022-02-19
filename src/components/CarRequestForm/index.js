import { Grid, MenuItem, Paper } from '@mui/material';
import { Form, Formik } from 'formik';
import React from 'react';
import DatePicker from '../DatePicker';
import TextInput from '../TextInput';
import PhoneInput from '../PhoneInput';
import SelectInput from '../SelectInput';

import { bodyTypeList, fuelTypeList, yearList } from '../../Utils/Constants';
console.log('-yearList-----------------------------------------');
console.dir({ yearList }, { depth: null });
console.log('------------------------------------------');

const initialFields = {
  fname: '', // text
  lname: '', // text
  DOB: null, // date
  phone: '', // tel
  bodyType: '', // select
  minYear: '', // text
  maxYear: '2022', // text
  fuelType: '', // radio
  photoID: '', // img
  agreement: false, // checkbox
};

const CarRequestForm = () => {
  const handleSubmit = async (values, actions) => {
    console.log('-values-----------------------------------------');
    console.dir({ values }, { depth: null });
    console.log('------------------------------------------');

    // actions.resetForm();
  };

  return (
    <Paper sx={{ p: 2, mt: 3 }}>
      <Formik
        initialValues={initialFields}
        // validationSchema={validation}
        onSubmit={handleSubmit}
      >
        {context => {
          return (
            <Form>
              <Grid container spacing={3}>
                {/* Fname && Lname */}
                <Grid item xs={12} lg={6}>
                  <TextInput name='fname' label='First Name' required />
                </Grid>

                <Grid item xs={12} lg={6}>
                  <TextInput name='lname' label='Last Name' required />
                </Grid>

                {/* Phone &&  DOB */}
                <Grid item xs={12} lg={6}>
                  <PhoneInput name='phone' label='Contact Phone Number' required />
                </Grid>

                <Grid item xs={12} lg={6}>
                  <DatePicker name='DOB' label='Date of Birth' required />
                </Grid>
                {/*BODY TYPE*/}
                <Grid item xs={12}>
                  <SelectInput name='bodyType' label='Body type' required>
                    {bodyTypeList.map(el => (
                      <MenuItem key={el} value={el}>
                        {el}
                      </MenuItem>
                    ))}
                  </SelectInput>
                </Grid>
                {/* FUEL TYPE  */}
                <Grid item xs={12}>
                  <SelectInput name='fuelType' label='Fuel type'>
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    {fuelTypeList.map(el => (
                      <MenuItem key={el} value={el}>
                        {el}
                      </MenuItem>
                    ))}
                  </SelectInput>
                </Grid>
                {/* Years */}
                <Grid item xs={12} lg={6}>
                  <SelectInput name='minYear' label='Min Year'>
                    <MenuItem value=''>
                      <em>None</em>
                    </MenuItem>
                    {yearList.map(el => (
                      <MenuItem key={el} value={el}>
                        {el}
                      </MenuItem>
                    ))}
                  </SelectInput>
                </Grid>

                <Grid item xs={12} lg={6}>
                  <SelectInput name='maxYear' label='Max Year'>
                    {yearList.map(el => (
                      <MenuItem key={el} value={el}>
                        {el}
                      </MenuItem>
                    ))}
                  </SelectInput>
                </Grid>
              </Grid>
            </Form>
          );
        }}
      </Formik>
    </Paper>
  );
};

export default CarRequestForm;
