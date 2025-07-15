import { Button, Typography } from "@mui/material";


const Banner = () => {
  return (
    <div className="flex justify-between items-center p-3 m-2 h-[60px] bg-gradient-to-r from-pink-600 via-purple-600 to-blue-500">
        <div>
            <Typography className="text-white !text-sm !font-extrabold">Preview of Spotify</Typography>
            <Typography className="text-white">Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed</Typography>
        </div>
        <Button className="!normal-case !rounded-full w-37 h-12 !bg-white !text-black !text-[16px] !font-bold">
            Sign up free
        </Button>
    </div>
  )
}

export default Banner;