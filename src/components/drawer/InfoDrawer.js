import { Drawer, styled } from '@mui/material'
import React from 'react'


//Style
const Component=styled(Drawer)`
box-shadow:none;
width:250px;
`
const InfoDrawer = ({open,setOpen}) => {
  const closeHandler=()=>{
    setOpen(false)
  }
  return (
    <>
      <Component
        open={open}
        onClose={closeHandler}
        // fullWidth
        hideBackdrop
      >
        gghdxg
      </Component>
    </>
  )
}

export default InfoDrawer