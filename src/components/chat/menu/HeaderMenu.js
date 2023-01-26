import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem,styled } from "@mui/material";
import React, { useState } from "react";


//Style
const StyledMenuItem=styled(MenuItem)`
fonst:size:14px;
padding:15px 50px 5px 24px;`
const HeaderMenu = () => {
    const [open,setOpen]=useState(null)
    const handleClose=()=>{
        setOpen(null)
    }
    const clickHandler=(e)=>{
        setOpen(e.currentTarget)
    }
  return (
    <>
        <MoreVert onClick={clickHandler} sx={{cursor:'pointer'}}/>
        <Menu
        anchorEl={open}
        keepMounted
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
            <StyledMenuItem onClick={handleClose}>New Group</StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>New Community</StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>Starred Messages</StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>Settings</StyledMenuItem>
            <StyledMenuItem onClick={handleClose}>Logout</StyledMenuItem>
        </Menu>
    </>
  );
};

export default HeaderMenu;
