import { Divider ,styled} from '@mui/material'
import React, { useState } from 'react'
import Conversations from './Conversations'

// Components 
import Header from './Header'
import Search from './Search'

//Style
const StyledDivider=styled(Divider)`
color:#e9edef;
opacity:0.6;
`
const Menu = () => {
  const [text,setText]=useState('');
  return (
    <>
        <Header/>
        <Search setText={setText}/>
        <StyledDivider/>
        <Conversations text={text}/>
    </>
  )
}

export default Menu