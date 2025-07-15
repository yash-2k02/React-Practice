import { useEffect } from "react";
import Banner from "./banner/Banner";
import HeroSection from "./main section/HeroSection";
import NavBar from "./navbar/NavBar";
import Sidebar from "./sidebar/Sidebar";
import SongPlaying from "./song playing/SongPlaying";

interface Props {
  isloggedIn: boolean;
  setIsloggedIn: (value: boolean) => void;
}

const HomePage: React.FC<Props> = ({ isloggedIn, setIsloggedIn }) => {
  useEffect(() => {
    if (isloggedIn) {
      const el = document.getElementById("favicon");
      if (el instanceof HTMLLinkElement) {
        el.href = "/spotifygreen.svg";
      }
    }
  }, [isloggedIn]);
  return (
    <div className="flex flex-col h-screen bg-black">
      <NavBar isloggedIn={isloggedIn} setIsloggedIn={setIsloggedIn} />

      <div className="flex flex-grow px-2 gap-2">
        <Sidebar isloggedIn={isloggedIn} />
        <HeroSection isloggedIn={isloggedIn} />
      </div>

      {isloggedIn ? <SongPlaying /> : <Banner />}
    </div>
  );
};

export default HomePage;
