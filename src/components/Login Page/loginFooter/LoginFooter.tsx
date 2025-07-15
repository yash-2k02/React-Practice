import { Typography } from "@mui/material";

const LoginFooter = () => {
  return (
    <div className="bg-[#121212] flex justify-center items-center h-20">
      <Typography
        sx={{ fontSize:"12px" }}
        className="text-gray-400"
      >
        This site is protected by reCAPTCHA and the Google{" "}
        <a className="underline" href="">
          Privacy Policy
        </a>{" "}
        and{" "}
        <a className="underline" href="">
          Terms of Service
        </a>{" "}
        apply.
      </Typography>
    </div>
  );
};

export default LoginFooter;