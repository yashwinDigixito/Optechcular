'use client';

import LoginImg from '@/public/login-img/login.jpg';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Checkbox, FormControlLabel, IconButton, InputAdornment, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { loginSchema, LoginFormValues } from './validations';
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";


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
  const [loading, setLoading] = useState(false);
  const router = useRouter();



  const formik = useFormik<LoginFormValues>({
  initialValues: {
    identifier: '',
    password: '',
  },
  validationSchema: loginSchema,
  onSubmit: async (values) => {
    setLoading(true);

    await Promise.resolve();

    const user = users.find(
      (u) =>
        (u.email === values.identifier ||
          u.employeeId === values.identifier) &&
        u.password === values.password
    );



    if (user) {
      localStorage.setItem('isLoggedIn', 'true');
      toast.success("Login successful");

      setTimeout(() => {
        router.replace('/');
      }, 1000);
    } else {
      toast.error("Invalid credentials");
    }
    setLoading(false);
  },
});

  return (
          <Box 
            sx={{ 
              display: 'flex', 
              height: '100vh', 
              justifyContent: "center", 
              alignItems: "center",
              }}
          >
              <Box 
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" }, 
                  bgcolor: "#f0f0f0", 
                  borderRadius: { xs: 0, md: "25px" }, 
                  overflow: "hidden", 
                  width: { xs: "100%", md: "90vw" },
                  height: { xs: "100vh", md: "90vh" },
                  }}
              >
            {/* LEFT SIDE */}
                  <Box
        sx={{
          flex: 1,
          bgcolor: '#0f172a',
          color: '#fff',
          p: 6,
          display: "flex",
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start', 
        }}
      >
        <Typography
          sx={{ 
            fontWeight: 'bold',
            fontSize: { xs: "1.5rem", md: "2.5rem" },
          }}
        >
          Optechcular
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
            display: { xs: "none", md: "block" },
          }}
        >
          <Image
            src={LoginImg}
            alt="ERP"
            priority
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>
    
      <Box sx={{ my: 2, borderBottom: '1px solid #e0e0e0' }} />

      {/* RIGHT SIDE */}
      <Box 
        sx={{ 
          flex: 1, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          px: { xs: 2, sm: 4 },
          }}
      >
        <Box 
          sx={{ 
            width: '100%', 
            maxWidth: 400 
            }}
        >
          <Typography 
                variant="h4"
                sx={{ 
                    fontWeight: "bold", 
                    marginBottom: "24px",
                    fontSize: { xs: "1.8rem", md: "2.2rem" }, 
                    color: "black",
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
            helperText={
              formik.touched.identifier ? formik.errors.identifier : undefined
            }
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
            helperText={
              formik.touched.password ? formik.errors.password : undefined
            }
            sx={{
              '& input::-ms-reveal': {
                display: 'none',
              },
              '& input::-ms-clear': {
                display: 'none',
              },
            }}
            slotProps={{
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
            disabled={!formik.values.identifier || !formik.values.password || loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Login"}
          </Button>
          </form>
        </Box>
      </Box>
      </Box>
    </Box>
  );
};

export default LoginPage;

