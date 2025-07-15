import { useEffect, useRef, useState, lazy, Suspense } from "react";
import TrendingAlbums from "../trending albums/TrendingAlbums";
import { Divider, Typography } from "@mui/material";

const PopularArtist = lazy(() => import("../popular artists/PopularArtist"));
const CategoriesSection1 = lazy(
  () => import("../categories/CategoriesSection")
);
const HomeFooter = lazy(() => import("../footer/HomeFooter"));
const Copyright = lazy(() => import("../footer/Copyright"));

interface Props {
  isloggedIn: boolean;
}

const HeroSection: React.FC<Props> = ({ isloggedIn }) => {
  const [hasScrolledEnough, setHasScrolledEnough] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    const { scrollTop, clientHeight, scrollHeight } = scrollElement;
    if (scrollTop + clientHeight >= scrollHeight * 0.8 && !hasScrolledEnough) {
      setHasScrolledEnough(true);
    }
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (!currentRef) return;

    currentRef.addEventListener("scroll", handleScroll);
    return () => {
      currentRef.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolledEnough]);

  return (
    <div
      ref={scrollRef}
      className="flex-grow bg-gradient-to-b from-[#212121] to-[#121212] rounded-lg h-[84vh] overflow-y-auto overflow-x-hidden hero-scrollbar"
    >
      {isloggedIn && (
        <div className="ml-13 mt-5 flex gap-3">
          <Typography className="cursor-pointer !text-sm flex justify-center items-center w-11 h-8 rounded-full bg-white text-black">
            All
          </Typography>
          <Typography className="cursor-pointer !text-sm flex justify-center items-center w-15 h-8 rounded-full bg-[#3b3a3a] hover:bg-[#494747] text-white">
            Music
          </Typography>
          <Typography className="cursor-pointer !text-sm flex justify-center items-center w-20 h-8 rounded-full bg-[#3b3a3a] hover:bg-[#494747] text-white">
            Podcasts
          </Typography>
        </div>
      )}

      {isloggedIn && <TrendingAlbums margin={"mt-2"} title="Recently Played" />}
      <TrendingAlbums margin={"mt-5"} title="Trending Songs" />

      <PopularArtist />
      <CategoriesSection1 />

      {hasScrolledEnough && (
        <Suspense
          fallback={
            <div className="text-white p-4">Loading more content...</div>
          }
        >
          <TrendingAlbums margin={"mt-20"} title="Recent Releases" />
          <Divider className="bg-[#6b6b6b77] !mx-8 !my-15" />
          <HomeFooter />
          <Divider className="bg-[#6b6b6b77] !mx-8 !my-10" />
          <Copyright />
        </Suspense>
      )}
    </div>
  );
};

export default HeroSection;
