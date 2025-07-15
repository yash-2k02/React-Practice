import { useEffect, useRef, useState } from "react";
import useFetch from "../../../useFetch";
import {
  Typography,
  CircularProgress,
  Box,
  IconButton,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const artistNames = [
  "Pritam",
  "A.R. Rahman",
  "Arijit Singh",
  "Sachin-Jigar",
  "Vishal-Shekhar",
  "Taylor Swift",
  "Shreya Ghoshal",
  "Ed Sheeran",
  "Adele",
  "KK",
  "Atif Aslam",
  "Beyoncé",
  "The Weeknd",
  "Imagine Dragons",
  "Rihanna",
  "Sonu Nigam",
  "Camila Cabello",
  "Diljit Dosanjh",
  "Justin Bieber",
  "Badshah",
  "Dhvani Bhanushali",
  "Neha Kakkar",
  "Zayn",
  "Sia",
  "Marshmello"
];

type Artist = {
  id: string;
  name: string;
  images: { url: string; width: number; height: number }[];
  external_urls: { spotify: string };
};

const PopularArtist = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const fetchMoreArtists = async () => {
    setIsLoading(true);
    const data = await useFetch({ type: "artists", offset, list: artistNames });
    if (data && data.length > 0) {
      setArtists((prev) => [...prev, ...data]);
      setOffset((prev) => prev + data.length);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMoreArtists();
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current || isLoading) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollLeft + clientWidth >= scrollWidth - 600) {
      fetchMoreArtists();
    }
  };

  const scrollLeftBy = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -amount, behavior: "smooth" });
    }
  };

  const scrollRightBy = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mt-20 ml-2 max-w-[1420px] w-full">
      <Typography className="!ml-10 text-white !text-2xl !font-extrabold mb-4">
        <a
          className="hover:underline"
          href="https://open.spotify.com/section/0JQ5DAnM3wGh0gz1MXnu3C"
        >
          Popular Artists
        </a>
      </Typography>

      {isLoading && artists.length === 0 ? (
        <Box className="flex justify-center items-center h-[200px]">
          <CircularProgress size={40} sx={{ color: "white" }} />
        </Box>
      ) : (
        <div className="relative">
          <IconButton
            onClick={() => scrollLeftBy(300)}
            className="!absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-[#121212] hover:bg-[#1a1a1a] shadow-md"
            sx={{ color: "white" }}
          >
            <ChevronLeft className="!text-4xl" />
          </IconButton>

          <IconButton
            onClick={() => scrollRightBy(300)}
            className="!absolute -right-0 top-1/2 -translate-y-1/2 z-10 bg-[#121212] hover:bg-[#1a1a1a] shadow-md"
            sx={{ color: "white" }}
          >
            <ChevronRight className="!text-4xl" />
          </IconButton>

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto whitespace-nowrap hide-scrollbar scrollbar-hide"
          >
            {artists.map((artist) => (
              <div
                key={artist.id}
                className="relative shrink-0 w-[200px] rounded-lg p-4 hover:bg-[#282828] transition duration-300 group cursor-pointer"
              >
                <img
                  src={artist.images[0]?.url}
                  alt={artist.name}
                  className="w-44 h-44 rounded-full object-cover mx-auto mb-3"
                />
                <Typography className="text-white text-sm font-semibold truncate">
                  {artist.name}
                </Typography>
                <Typography className="text-gray-500 text-xs font-medium  ">
                  Artist
                </Typography>
                <div className="absolute bottom-20 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={artist.external_urls.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button
                      className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-105 transform"
                      aria-label={`Play ${artist.name}`}
                    >
                      <svg fill="black" viewBox="0 0 24 24" className="w-6 h-6">
                        <path d="M5 3v18l15-9L5 3z" />
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="shrink-0 w-[200px] flex justify-center items-center h-[230px] bg-[#181818] rounded-lg">
                <CircularProgress size={30} thickness={4} sx={{ color: "#1ED760" }} />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularArtist;
