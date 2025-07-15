import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
  Stack,
} from "@mui/material";
import SpotifyLogo from "../../spotifyLogo/SpotifyLogo";
import googleIcon from "../../../assets/google.svg";
import facebookIcon from "../../../assets/facebook.svg";
import appleIcon from "../../../assets/apple.svg";
import { useNavigate } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("yashdp1602@gmail.com");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // console.log(email);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log("ho");
    if (email === "yashdp1602@gmail.com") {
      // console.log("logged in");
      localStorage.setItem("isloggedIn", "true");
      navigate("/");
      return;
    }
    // console.log("invalid email");
    setError(true)
    setErrorMessage("Please enter valid email");
  };

  return (
    <Container maxWidth={false} className="max-w-[770px] w-full">
      <Box
        className="bg-gradient-to-b from-[#121212] to-[#1e1e1ed4]
 text-white p-8 rounded-lg shadow-lg"
      >
        <div className="flex justify-center mb-3">
          <SpotifyLogo color={"white"} />
        </div>
        <h1 className="text-3xl text-center font-bold mb-6">
          Log in to Spotify
        </h1>

        <Stack spacing={1} className="mt-7 mb-6 flex flex-col items-center">
          <Button
            variant="outlined"
            sx={{
              borderRadius: "9999px",
              textTransform: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "15px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              "&:hover": {
                border: "1px solid white",
              },
            }}
            className="h-12 w-full max-w-[330px] text-white normal-case hover:border-white hover:border-2"
          >
            <div className="flex w-full items-center justify-between px-4">
              <img src={googleIcon} alt="Google" className="h-6 w-6" />
              <span className="mx-auto">Continue with Google</span>
            </div>
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "9999px",
              textTransform: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "15px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              "&:hover": {
                border: "1px solid white",
              },
            }}
            className="h-12 w-full max-w-[330px] text-white normal-case hover:border-white hover:border-2"
          >
            <div className="flex w-full items-center justify-between px-4">
              <img src={facebookIcon} alt="Google" className="h-6 w-6" />
              <span className="mx-auto">Continue with Facebook</span>
            </div>
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "9999px",
              textTransform: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "15px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              "&:hover": {
                border: "1px solid white",
              },
            }}
            className="h-12 w-full max-w-[330px] text-white normal-case hover:border-white hover:border-2"
          >
            <div className="flex w-full items-center justify-between px-4">
              <img src={appleIcon} alt="Google" className="h-6 w-6" />
              <span className="mx-auto">Continue with Apple</span>
            </div>
          </Button>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "9999px",
              textTransform: "none",
              color: "white",
              fontWeight: "bold",
              fontSize: "15px",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              "&:hover": {
                border: "1px solid white",
              },
            }}
            className="h-12 w-full max-w-[330px] text-white normal-case hover:border-white hover:border-2"
          >
            Continue with phone number
          </Button>
        </Stack>

        <div className="flex flex-col items-center">
          <div className="mt-5 mb-6 w-full max-w-[550px]">
            <Divider className="bg-[#6b6b6b77]" />
          </div>
          <div className="mb-4 w-full max-w-[330px]">
            <form onSubmit={handleSubmit}>
              <label
                htmlFor="email"
                className="text-md text-gray-300 block mb-1 font-bold"
              >
                Email or username
              </label>
              <TextField
                id="email"
                name={email}
                value={email}
                placeholder="Email or username"
                variant="outlined"
                fullWidth
                onChange={(e) => setEmail(e.target.value)}
                error={error}
                helperText={errorMessage}
                InputProps={{
                  sx: {
                    color: "white",
                    backgroundColor: "transparent",
                    height: "45px",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255, 255, 255, 0.6)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ffffff",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ffffff",
                      borderWidth: "2px",
                    },
                  },
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                FormHelperTextProps={{
                  sx: {
                    color: "red",
                    fontWeight: 500,
                    marginTop:"10px"
                  },
                }}
              />
              <div className="flex justify-center w-full mt-6">
                <Button
                  type="submit"
                  variant="outlined"
                  className="w-full max-w-[330px] h-12 text-black font-semibold py-3 rounded-full text-center"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #1abc54, #1ed760, #3be477)",
                  }}
                  sx={{
                    bgcolor: "green",
                    textTransform: "none",
                    color: "black",
                    fontWeight: "bold",
                    borderRadius: "9999px",
                    fontSize: "16px",
                  }}
                >
                  Continue
                </Button>
              </div>
            </form>
          </div>
        </div>

        <Typography
          sx={{ marginTop: "40px", paddingBottom: "35px" }}
          className="text-center text-sm text-gray-400"
        >
          Don’t have an account?{" "}
          <a
            href="#"
            className="ml-1 text-white underline hover:text-green-400"
          >
            Sign up for Spotify
          </a>
        </Typography>
      </Box>
    </Container>
  );
};

export default LoginForm;
