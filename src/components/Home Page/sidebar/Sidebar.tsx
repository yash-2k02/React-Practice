import { Box, Button, Typography } from "@mui/material";
import addIcon from "../../../assets/plus.svg";
import globeIcon from "../../../assets/globe.svg";

interface Props {
  isloggedIn: boolean;
}

const Sidebar = ({ isloggedIn }: Props) => {
  return (
<Box className="relative overflow-visible bg-[#121212] text-white w-[420px] h-[84vh] p-4 flex flex-col justify-between rounded-lg">
      <div>
        <Box className="flex justify-between items-center">
          <Typography variant="h6" className="pl-3 !font-bold mb-4 !text-base">
            Your Library
          </Typography>
          {isloggedIn ? (
            <div className="relative flex justify-center items-center gap-2 group bg-[#242424] w-25 h-9 rounded-full">
              <img
                src={addIcon}
                alt="Create playlist"
                className="cursor-pointer h-4"
              />
              <Typography className="!text-sm !font-bold">Create</Typography>
              <div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                  opacity-0 group-hover:opacity-100 pointer-events-none 
                  bg-[#2f2d2d] text-white text-xs rounded px-3 py-1 whitespace-nowrap 
                  transition-opacity duration-300 z-[9999] shadow-md"
              >
                Create a playlist, folder or Jam
              </div>
            </div>
          ) : (
            <div className="relative group pr-4">
              <img
                src={addIcon}
                alt="Create playlist"
                className="cursor-pointer"
              />

              <div
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 
                  opacity-0 group-hover:opacity-100 
                  bg-[#2f2d2d] text-white text-sm rounded px-3 py-1 whitespace-nowrap 
                  transition-opacity duration-300 z-1000 shadow-md"
              >
                Create playlist
              </div>
            </div>
          )}
        </Box>

        <Box className="bg-[#242424] p-4 rounded-xl mb-4 mt-10">
          <Typography variant="subtitle2" className="!text-[16px] !font-bold">
            Create your first playlist
          </Typography>
          <Typography
            sx={{ marginTop: "8px", fontSize: "14px" }}
            variant="body2"
            className="text-white"
          >
            It’s easy, we’ll help you
          </Typography>
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            className="!bg-white !text-black !rounded-full normal-case text-sm !mt-5 !font-bold"
          >
            Create playlist
          </Button>
        </Box>

        <Box className="bg-[#242424] p-4 mt-5 rounded-xl">
          <Typography variant="subtitle2" className="!text-[16px] !font-bold">
            Let’s find some podcasts to follow
          </Typography>
          <Typography
            sx={{ marginTop: "8px", fontSize: "14px" }}
            variant="body2"
            className="text-white mb-2"
          >
            We’ll keep you updated on new episodes
          </Typography>
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            className="!bg-white !text-black !rounded-full !mt-5 !font-bold"
          >
            Browse podcasts
          </Button>
        </Box>
      </div>

      {!isloggedIn && (
        <Box className="pl-4 text-xs !text-gray-400 space-y-1">
          <Box className="mb-8">
            <div className="mb-3 flex flex-wrap gap-4">
              <a href="https://www.spotify.com/in-en/legal/end-user-agreement/">
                Legal
              </a>
              <a href="https://www.spotify.com/in-en/safetyandprivacy">Safety&Privacy Center</a>
              <a href="https://www.spotify.com/in-en/legal/privacy-policy/">PrivacyPolicy</a>
              <a href="https://www.spotify.com/in-en/legal/cookies-policy/">Cookies</a>
            </div>
            <div className="mb-3 flex gap-4">
              <a href="https://www.spotify.com/in-en/legal/privacy-policy/#s3">About Ads</a>
              <a href="https://www.spotify.com/in-en/accessibility">Accessibility</a>
            </div>
            <div className="text-white">
              <a href="https://www.spotify.com/in-en/legal/cookies-policy/" className="hover:underline">Cookies</a>
            </div>
          </Box>
          <Button
            // size="medium"
            sx={{
              width: "110px",
              height: "34px",
              borderRadius: "9999px",
              textTransform: "none",
              color: "white",
              fontWeight: "bold",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              "&:hover": {
                border: "1px solid white",
              },
            }}
            className="text-white border border-white !mb-4 text-xs normal-case"
          >
            <img src={globeIcon} alt="" />
            <div className="ml-2">English</div>
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Sidebar;
