import * as React from "react";
import { Avatar, Menu, MenuItem, IconButton, Divider } from "@mui/material";
import gotoIcon from "../../assets/goto.svg";
import { useNavigate } from "react-router-dom";

interface props{
    setIsloggedIn:(value:boolean)=> void
}
const AccountMenu:React.FC<props> = ({setIsloggedIn}) =>{
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("isloggedIn");
    setIsloggedIn(false)
    // setTimeout(() => navigate("/"), 50);
    navigate("/");
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{
          width: 48,
          height: 48,
          backgroundColor: "#1F1F1F",
          "&:hover": {
            backgroundColor: "#2A2A2A",
          },
        }}
      >
        <Avatar
          sx={{
            bgcolor: "#AE96C1",
            width: 32,
            height: 32,
            fontWeight: "bold",
            color: "#000",
          }}
        >
          Y
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              mt: 1.5,
              width: "200px",
              bgcolor: "#282828",
              color: "#fff",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.5)",
              "& .MuiMenuItem-root": {
                fontSize: "14px",
                "&:hover": {
                  backgroundColor: "#2f2d2d",
                },
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          className="!flex !justify-between !items-center"
          onClick={handleClose}
        >
          Account
          <img src={gotoIcon} alt="" />
        </MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem
          className="!flex !justify-between !items-center"
          onClick={handleClose}
        >
          Upgrade to Premium
          <img src={gotoIcon} alt="" />
        </MenuItem>
        <MenuItem
          className="!flex !justify-between !items-center"
          onClick={handleClose}
        >
          Support
          <img src={gotoIcon} alt="" />
        </MenuItem>
        <MenuItem
          className="!flex !justify-between !items-center"
          onClick={handleClose}
        >
          Download
          <img src={gotoIcon} alt="" />
        </MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <Divider sx={{ bgcolor: "#333" }} />
        <MenuItem
          onClick={() => {
            handleClose()
            handleLogout();
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}


export default AccountMenu;