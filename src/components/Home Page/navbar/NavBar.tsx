import { Box, Button, IconButton, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SpotifyLogo from "../../spotifyLogo/SpotifyLogo";
import installAppIcon from "../../../assets/installApp.svg";
import homeIcon from "../../../assets/home.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import notificationIcon from "../../../assets/notification.svg";
import friendsIcon from "../../../assets/friends.svg";
import AccountMenu from "../AccountMenu";

interface Props {
  isloggedIn: boolean;
  setIsloggedIn: (value: boolean) => void;
}

const NavBar: React.FC<Props> = ({ isloggedIn, setIsloggedIn }) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("isloggedIn")) {
      setIsloggedIn(true);
    }
  }, []);

  return (
    <Box className="bg-black flex items-center justify-between pl-7 pr-2 py-2 text-white sticky top-0 z-20 h-17">
      <Box className="flex md:justify-between max-w-[60vw] w-full">
        <SpotifyLogo color={"white"} />

        <Box className="flex items-center gap-2 max-w-[30vw] w-full">
          <div className="relative group">
            <IconButton className="h-12 w-12 !bg-[#282828] rounded-full">
              <img src={homeIcon} alt="home icon" />
            </IconButton>
            <div
              className="absolute top-13 left-1/2 -translate-x-1/2 mb-2 
        opacity-0 group-hover:opacity-100 pointer-events-none 
        bg-[#2f2d2d] text-white text-sm rounded px-3 py-1 whitespace-nowrap 
        transition-opacity duration-300 z-50 shadow-md min-w-max"
            >
              Home
            </div>
          </div>
          {/* w-[200px] sm:w-[400px] */}

          <div className="hidden w-full md:flex items-center bg-white/10 rounded-full px-3 py-1 text-white border-2 border-transparent focus-within:border-amber-50 transition-colors duration-300 ease-in-out">
            <SearchIcon />
            <div className="w-full max-w-[400px]">
              <input
                type="text"
                placeholder="What do you want to play?"
                className="bg-transparent outline-none text-sm ml-2 !w-full placeholder-gray-300 h-[38px]"
              />
            </div>
          </div>

          <div className="lg:hidden">
            <IconButton
              onClick={() => setShowMobileSearch((prev) => !prev)}
              className="h-12 w-12 !bg-[#282828] rounded-full"
            >
              <SearchIcon className="text-white" />
            </IconButton>
          </div>
        </Box>
        {showMobileSearch && (
          <div className="w-full mt-3 md:hidden">
            <div className="flex items-center bg-white/10 rounded-full px-3 py-2">
              <SearchIcon className="text-white" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent outline-none text-sm ml-2 placeholder-gray-300 w-full text-white"
              />
            </div>
          </div>
        )}

        {/* ////////////////////////////////////////// */}
      </Box>

      {isloggedIn ? (
        <Box className="flex items-center gap-7">
          <Button
            sx={{
              borderRadius: "999px",
              textTransform: "none",
              transition: "transform 0.2s ease",
              display: {
                xs: "none",
                lg: "inline-flex",
              },
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
            variant="contained"
            className="w-36 !text-sm whitespace-nowrap !bg-white !hover:bg-[#F9FAFB] !text-black !font-black rounded-full"
          >
            Explore Premium
          </Button>
          <Typography className="cursor-pointer flex gap-3 !text-sm !font-extrabold text-[#ACACAC] hover:text-white">
            <img src={installAppIcon} alt="install app icon" />
            Install App
          </Typography>
          <div>
            <img src={notificationIcon} alt="" />
          </div>
          <div>
            <img src={friendsIcon} alt="" />
          </div>
          <AccountMenu setIsloggedIn={setIsloggedIn} />
        </Box>
      ) : (
        <Box className="hidden md:flex items-center gap-4 text-sm">
          <Typography className="cursor-pointer !text-base !font-extrabold text-[#ACACAC] hover:text-white">
            Premium
          </Typography>
          <Typography className="cursor-pointer !text-base !font-extrabold text-[#ACACAC] hover:text-white">
            Support
          </Typography>
          <Typography className="cursor-pointer !text-base !font-extrabold text-[#ACACAC] hover:text-white">
            Download
          </Typography>
          <div className="h-4 border-r border-gray-400" />
          <Typography className="cursor-pointer flex gap-3 !text-sm !font-extrabold text-[#ACACAC] hover:text-white">
            <img src={installAppIcon} alt="install app icon" />
            Install App
          </Typography>
          <Typography className="cursor-pointer !text-sm !font-extrabold text-[#ACACAC] hover:text-white">
            Sign up
          </Typography>
          <Button
            sx={{
              borderRadius: "999px",
              textTransform: "none",
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
            variant="contained"
            className="h-12 w-26 !text-base !bg-white !hover:bg-[#F9FAFB] !text-black !font-black rounded-full"
            onClick={() => navigate("login")}
          >
            Log in
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
