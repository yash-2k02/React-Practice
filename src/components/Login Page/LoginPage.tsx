import { Box } from "@mui/material";
import LoginForm from "./login form/LoginForm";
import LoginFooter from "./loginFooter/LoginFooter";


const LoginPage = () => {
  return (
    <>
      <Box className="m-0 pt-8 pb-35 max-h-[100vh] w-[100vw] bg-gradient-to-b from-[#121212dd] to-black flex items-start justify-center">
        <LoginForm />
      </Box>
      <Box>
        <LoginFooter />
      </Box>
    </>
  );
};


export default LoginPage;
