
import {
    Box,
    Button,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";

export default function LoginPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "#f4f7fe",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          maxWidth: "420px",
          p: 4,
          borderRadius: "16px",
        }}
      >
        <Stack spacing={3}>
          <Box textAlign="center">
            <Typography
              variant="h4"
              fontWeight={700}
              color="primary"
            >
              OPTECHULAR
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
              mt={1}
            >
              ERP Management System
            </Typography>
          </Box>

          <TextField
            fullWidth
            label="Email Address"
            type="email"
            placeholder="Enter your email"
          />

          <TextField
            fullWidth
            label="Password"
            type="password"
            placeholder="Enter your password"
          />

          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              height: "50px",
              borderRadius: "10px",
              textTransform: "none",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Login
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}