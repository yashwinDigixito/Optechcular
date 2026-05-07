'use client';

import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Checkbox, FormControlLabel, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LoginImg from '@/public/login-img/login.jpg'
import { Snackbar, Alert } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';


const users = [
  {
    employeeId: 'EMP001',
    email: 'mohammadazhan0099@gmail.com',
    password: 'Password@123',
  },
  {
    employeeId: 'EMP002',
    email: 'yashwin@example.com',
    password: 'Secure@456',
  },
];

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const router = useRouter();
  const [toast, setToast] = useState<{
          open: boolean;
          message: string;
          severity: 'success' | 'error';
        }>({
          open: false,
          message: '',
          severity: 'success',
        });



const loginSchema = yup.object({
  identifier: yup
    .string()
    .required('Required')
    .test(
      'is-email-or-empid',
      'Enter valid Email or Employee ID',
      (value) => {
        if (!value) return false;

        const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isEmpId = /^EMP\d{3,}$/;

        return isEmail.test(value) || isEmpId.test(value);
      }
    ),

  password: yup
    .string()
    .required('Required')
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
      'Min 8 chars, upper, lower, number & special char'
    ),
});

  const formik = useFormik({
  initialValues: {
    identifier: '',
    password: '',
  },
  validationSchema: loginSchema,
  onSubmit: (values) => {
    const user = users.find(
      (u) =>
        (u.email === values.identifier ||
          u.employeeId === values.identifier) &&
        u.password === values.password
    );

    localStorage.setItem('isLoggedIn', 'true');

    if (user) {
      setToast({
        open: true,
        message: 'Login successful',
        severity: 'success',
      });

      setTimeout(() => {
        router.replace('/dashboard');
      }, 1000);
    } else {
      setToast({
        open: true,
        message: 'Invalid credentials',
        severity: 'error',
      });
    }
  },
});

  return (
          <Box sx={{ display: 'flex', height: '100vh', justifyContent: "center", alignItems: "center" }}>
              <Box sx={{display: "flex", bgcolor: "#f0f0f0", borderRadius: "25px", overflow: "hidden", width: "90vw", height: "90vh"}}>
            {/* LEFT SIDE */}
                  <Box
        sx={{
          flex: 1,
          bgcolor: '#0f172a',
          color: '#fff',
          p: 6,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start', 
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 'bold' }}
        >
          Optechular
        </Typography>
      
        <Typography variant="h6" sx={{ mt: 1 }}>
          ERP Management System
        </Typography>
      
        <Box
          sx={{
            mt: 4,
            width: '75%',
            maxHeight: 300,
            borderRadius: 3,
            overflow: 'hidden',
          }}
        >
          <Image
            src={LoginImg}
            alt="ERP"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>
    
      <Box sx={{ my: 2, borderBottom: '1px solid #e0e0e0' }} />

      {/* RIGHT SIDEedfd */}
      {/**? */}
      <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box sx={{ width: '80%', maxWidth: 400 }}>
          <Typography 
                variant="h4" 
                sx={{ 
                    fontWeight: "bold", 
                    marginBottom: "24px"
                    }}
           >Login
           </Typography>
          <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            label="Employee ID or Email"
            margin="normal"
            name="identifier"
            value={formik.values.identifier}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.identifier && !!formik.errors.identifier}
            helperText={formik.touched.identifier && formik.errors.identifier}
            slotProps={{
              inputLabel: {
                shrink: true,
              },
            }}
          />

          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            margin="normal"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.password && !!formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
            sx={{
              '& input::-ms-reveal': {
                display: 'none',
              },
              '& input::-ms-clear': {
                display: 'none',
              },
            }}
            slotProps={{
             inputLabel: {
               shrink: true,
             },
             input: {
               endAdornment: (
                 <InputAdornment position="end">
                   <IconButton onClick={() => setShowPassword(!showPassword)}>
                     {showPassword ? <VisibilityOff /> : <Visibility />}
                   </IconButton>
                 </InputAdornment>
               ),
              },
             }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
            <FormControlLabel
              control={<Checkbox checked={remember} onChange={(e) => setRemember(e.target.checked)} />}
              label="Remember me"
            />
            <Typography sx={{ cursor: 'pointer', color: 'primary.main' }}>
              Forgot Password?
            </Typography>
          </Box>

          <Button
            type='submit'
            fullWidth
            variant="contained"
            sx={{ mt: 3, py: 1.5 }}
            disabled={!formik.values.identifier || !formik.values.password}
          >
            Login
          </Button>
          </form>
        </Box>
      </Box>
      </Box>
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setToast({ ...toast, open: false })}
          severity={toast.severity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginPage;

