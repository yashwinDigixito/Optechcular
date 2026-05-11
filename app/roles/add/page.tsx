"use client"
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box, Typography, Paper, TextField, Button, Grid, 
  Switch, MenuItem, Select, InputAdornment, FormControl, FormHelperText, InputLabel
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

// Define the Validation Schema using Yup
const UserSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phoneNumber: Yup.string().required('Phone number is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State/Region is required'),
  city: Yup.string().required('City is required'),
  address: Yup.string().required('Address is required'),
  zipCode: Yup.string().required('Zip code is required'),
  company: Yup.string().required('Company is required'),
  role: Yup.string().required('Role is required'),
});

const CreateUser = () => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      country: '',
      state: '',
      city: '',
      address: '',
      zipCode: '',
      company: '',
      role: '',
      emailVerified: true,
    },
    validationSchema: UserSchema,
    onSubmit: (values) => {
      console.log('Form Data:', values);
      alert('User created successfully!');
    },
  });

  return (
    <Box sx={{ p: 4, bgcolor: '#F9FAFB', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>Create a new user</Typography>
      <Typography variant="body2" sx={{ color: '#637381', mb: 4 }}>Dashboard • User • Create</Typography>

      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={3}>
          {/* Left Side */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Paper sx={{ p: 5, borderRadius: '16px', textAlign: 'center', boxShadow: '0 12px 24px -4px rgba(145, 158, 171, 0.12)' }}>
              <Box sx={{ width: 140, height: 140, borderRadius: '50%', border: '1px dashed rgba(145, 158, 171, 0.32)', mx: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', bgcolor: '#F4F6F8', mb: 3 }}>
                <CloudUploadIcon sx={{ color: '#637381', fontSize: 32, mb: 1 }} />
                <Typography variant="caption" sx={{ color: '#637381' }}>Upload photo</Typography>
              </Box>
              <Typography variant="caption" sx={{ color: '#637381', display: 'block', mb: 5 }}>Allowed *.jpeg, *.jpg, *.png, *.gif <br /> max size of 3 Mb</Typography>
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', textAlign: 'left' }}>
                <Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>Email verified</Typography>
                  <Typography variant="caption" sx={{ color: '#637381' }}>Disabling this sends a verification email</Typography>
                </Box>
                <Switch 
                  name="emailVerified"
                  checked={formik.values.emailVerified}
                  onChange={formik.handleChange}
                  color="success"
                />
              </Box>
            </Paper>
          </Grid>

          {/* Right Side */}
          <Grid size={{ xs: 12, md: 8 }}>
            <Paper sx={{ p: 3, borderRadius: '16px', boxShadow: '0 12px 24px -4px rgba(145, 158, 171, 0.12)' }}>
              <Grid container spacing={2}>
                {[
                  { id: 'fullName', label: 'Full name' },
                  { id: 'email', label: 'Email address' },
                  { id: 'phoneNumber', label: 'Phone number', startAdornment: '🇺🇸' },
                  { id: 'state', label: 'State/region' },
                  { id: 'city', label: 'City' },
                  { id: 'address', label: 'Address' },
                  { id: 'zipCode', label: 'Zip/code' },
                  { id: 'company', label: 'Company' },
                  { id: 'role', label: 'Role' },
                ].map((field) => (
                  <Grid size={{ xs: 12, md: 6 }} key={field.id}>
                    <TextField
                      fullWidth
                      name={field.id}
                      label={field.label}
                      value={formik.values[field.id as keyof typeof formik.values]}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched[field.id as keyof typeof formik.touched] && Boolean(formik.errors[field.id as keyof typeof formik.errors])}
                      helperText={formik.touched[field.id as keyof typeof formik.touched] && (formik.errors[field.id as keyof typeof formik.errors] as string)}
                      InputProps={field.startAdornment ? {
                        startAdornment: <InputAdornment position="start">{field.startAdornment}</InputAdornment>
                      } : {}}
                    />
                  </Grid>
                ))}

                <Grid size={{ xs: 12, md: 6 }}>
                  <FormControl fullWidth error={formik.touched.country && Boolean(formik.errors.country)}>
                    <InputLabel>Country</InputLabel>
                    <Select
                      name="country"
                      label="Country"
                      value={formik.values.country}
                      onChange={formik.handleChange}
                    >
                      <MenuItem value="United States">United States</MenuItem>
                      <MenuItem value="India">India</MenuItem>
                      <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                    </Select>
                    {formik.touched.country && <FormHelperText>{formik.errors.country}</FormHelperText>}
                  </FormControl>
                </Grid>
              </Grid>

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
                <Button type="submit" variant="contained" sx={{ bgcolor: '#212B36', borderRadius: '8px', px: 3, fontWeight: 700, textTransform: 'none' }}>
                  Create user
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default CreateUser;