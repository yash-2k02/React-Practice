import CopyrightIcon from "@mui/icons-material/Copyright";
import { Typography } from "@mui/material";

const Copyright = () => {
  return (
    <Typography className=" pl-6 pb-19 flex items-center gap-1 text-gray-400 !text-sm">
      <CopyrightIcon className="!w-5 !h-5" /> 2025 Spotify AB{" "}
    </Typography>
  );
};

export default Copyright;
