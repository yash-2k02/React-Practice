import { Typography } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';


const HomeFooter = () => {
  return (
    <div className="flex justify-between px-8 flex-wrap gap-4">
      <div className="flex flex-col gap-1">
        <Typography className="text-white text-base !font-bold">Company</Typography>
        <Typography><a href="https://www.spotify.com/in-en/about-us/contact/" className="text-gray-400 text-base font-light hover:underline hover:text-white">About</a></Typography>
        <Typography><a href="https://www.lifeatspotify.com/" className="text-gray-400 text-base font-light hover:underline hover:text-white">Jobs</a></Typography>
        <Typography><a href="https://newsroom.spotify.com/" className="text-gray-400 text-base font-light hover:underline hover:text-white">For the Record</a></Typography>
      </div>
      <div className="flex flex-col gap-1">
        <Typography className="text-white text-base !font-bold">Communities</Typography>
        <Typography><a href="https://artists.spotify.com/home" className="text-gray-400 text-base font-light hover:underline hover:text-white">For Artists</a></Typography>
        <Typography><a href="https://developer.spotify.com/" className="text-gray-400 text-base font-light hover:underline hover:text-white">Developers</a></Typography>
        <Typography><a href="https://ads.spotify.com/en-IN/" className="text-gray-400 text-base font-light hover:underline hover:text-white">Advertising</a></Typography>
        <Typography><a href="https://investors.spotify.com/home/default.aspx" className="text-gray-400 text-base font-light hover:underline hover:text-white">Investors</a></Typography>
        <Typography><a href="https://spotifyforvendors.com/" className="text-gray-400 text-base font-light hover:underline hover:text-white">Vendors</a></Typography>
      </div>
      <div className="flex flex-col gap-1">
        <Typography className="text-white !text-base !font-bold">Useful Links</Typography>
        <Typography><a href="https://support.spotify.com/in-en/" className="text-gray-400 text-base font-light hover:underline hover:text-white">Support</a></Typography>
        <Typography><a href="https://www.spotify.com/in-en/free/" className="text-gray-400 text-base font-light hover:underline hover:text-white">Free Mobile App</a></Typography>
      </div>
      <div className="flex flex-col gap-1">
        <Typography className="text-white !text-base !font-bold">Spotify Plans</Typography>
        <Typography><a href="https://www.spotify.com/in-en/premium/#ref=spotifycom_footer_premium_individual" className="text-gray-400 text-base font-light hover:underline hover:text-white">Premium Individual</a></Typography>
        <Typography><a href="https://www.spotify.com/in-en/duo/#ref=spotifycom_footer_premium_duo" className="text-gray-400 text-base font-light hover:underline hover:text-white">Premium Duo</a></Typography>
        <Typography><a href="https://www.spotify.com/in-en/family/#ref=spotifycom_footer_premium_family" className="text-gray-400 text-base font-light hover:underline hover:text-white">Premium Family</a></Typography>
        <Typography><a href="https://www.spotify.com/in-en/student/#ref=spotifycom_footer_premium_student" className="text-gray-400 text-base font-light hover:underline hover:text-white">Premium Student</a></Typography>
        <Typography><a href="https://www.spotify.com/in-en/free/#ref=spotifycom_footer_free" className="text-gray-400 text-base font-light hover:underline hover:text-white">Spotify Free</a></Typography>
      </div>
      <div className="flex gap-4">
        <div className="bg-[#292929] hover:bg-[#727272] h-10 w-10 rounded-full flex justify-center items-center">
            <InstagramIcon className="text-white !w-5 !h-5"/>
        </div>
        <div className="bg-[#292929] hover:bg-[#727272] h-10 w-10 rounded-full flex justify-center items-center">
            <TwitterIcon className="text-white !w-5 !h-5"/>
        </div>
        <div className="bg-[#292929] hover:bg-[#727272] h-10 w-10 rounded-full flex justify-center items-center">
            <FacebookIcon className="text-white !w-5 !h-5"/>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;