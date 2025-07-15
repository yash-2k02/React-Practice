import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import shuffleIcon from "../../../assets/shuffle.svg";
import loopIcon from "../../../assets/loop.svg";
import { useState } from "react";

const SongPlaying = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className=" flex flex-col gap-4 justify-center items-center p-3 bg-black text-white">
      <div className="flex items-center gap-4">
        <div>
          <img className="w-4 h-4" src={shuffleIcon} alt="" />
        </div>
        <SkipPreviousIcon className="!w-7 !h-7" />
        {isPlaying ? (
          <div
            onClick={() => setIsPlaying(false)}
            className="w-9 h-9 bg-white rounded-full text-black flex justify-center items-center"
          >
            <PauseIcon className="!w-7 !h-7" />
          </div>
        ) : (
          <div
            onClick={() => setIsPlaying(true)}
            className="w-9 h-9 bg-white rounded-full text-black flex justify-center items-center"
          >
            <PlayArrowIcon className="!w-7 !h-7" />
          </div>
        )}
        <SkipNextIcon className="!w-7 !h-7" />
        <div>
          <img className="w-4 h-4" src={loopIcon} alt="" />
        </div>
      </div>
      <div className="w-full max-w-[800px]">
      <div className="h-1 w-full bg-gray-600 rounded" />
      </div>
    </div>
  );
};

export default SongPlaying;
