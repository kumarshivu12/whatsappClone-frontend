import React from 'react'
import {Box, InputBase, styled} from '@mui/material'
import {Search as SearchIcon} from '@mui/icons-material'


//Style
const Component=styled(Box)`
background:white;
height:45px;
display:flex;
align-items:center;
padding:5px;
`
const Wrapper=styled(Box)`
display:flex;
align-items:center;
background:#f0f2f5;
border-radius:10px;
margin:0 13px;
width:100%;
`
const Search = ({setText}) => {
  return (
    <Component>
        <Wrapper>
            <SearchIcon size='small' sx={{padding:'10px'}}/>
            <InputBase
            placeholder='Search or start new chat'
            fullWidth
            onChange={(e)=>setText(e.target.value)}
            />
        </Wrapper>
    </Component>
  )
}

export default Search