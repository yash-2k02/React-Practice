import React, { useEffect, useRef, useState } from "react";
import useFetch from "../../../useFetch";
import { Typography, CircularProgress, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

interface Props {
  title: string;
  margin:string;
}

interface Album {
  id: string;
  name: string;
  images: { url: string }[];
  artists: { name: string }[];
  external_urls: { spotify: string };
}

const TrendingAlbums: React.FC<Props> = ({ title, margin }) => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const fetchMoreAlbums = async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    const newAlbums = await useFetch({ type: "albums", offset });

    if (newAlbums && newAlbums.length > 0) {
      setAlbums((prev) => [...prev, ...newAlbums]);
      setOffset((prev) => prev + newAlbums.length);
      if (newAlbums.length < 20) setHasMore(false);
    } else {
      setHasMore(false);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchMoreAlbums();
  }, []);

  const handleScroll = () => {
    if (!scrollRef.current || isLoading || !hasMore) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollLeft + clientWidth >= scrollWidth - 600) {
      fetchMoreAlbums();
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
    <div className={`${margin} relative mt-7 ml-2 max-w-[1420px] w-full`}>
      <Typography className="!ml-6 text-white !text-2xl !font-extrabold mb-4">
        <a
          className="hover:underline"
          href="https://open.spotify.com/section/0JQ5DB5E8N831KzFzsBBQ2"
        >
          {title}
        </a>
      </Typography>

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
          className="flex overflow-x-auto whitespace-nowrap overflow-y-hidden hide-scrollbar scrollbar-hide"
        >
          {albums.map((album) => {
            const { id, name, images, artists, external_urls } = album;
            return (
              <div
                key={id}
                className="relative group shrink-0 w-[200px] rounded-lg p-4 hover:bg-[#282828] transition duration-300 cursor-pointer"
              >
                <div className="relative w-full h-44 rounded-md overflow-hidden">
                  <img
                    src={images[0]?.url}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 right-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <a
                      href={external_urls.spotify}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-green-500 p-3 rounded-full shadow-lg hover:scale-105 transform">
                        <svg
                          fill="black"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path d="M5 3v18l15-9L5 3z" />
                        </svg>
                      </button>
                    </a>
                  </div>
                </div>
                <h3 className="text-white text-sm font-semibold truncate mt-3">
                  {name}
                </h3>
                <p className="text-gray-400 text-xs truncate">
                  {artists.map((a) => a.name).join(", ")}
                </p>
              </div>
            );
          })}

          {isLoading && (
            <div className="shrink-0 w-[200px] flex justify-center items-center h-[230px] bg-[#181818] rounded-lg">
              <CircularProgress
                size={30}
                thickness={4}
                sx={{ color: "#1ED760" }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrendingAlbums;
