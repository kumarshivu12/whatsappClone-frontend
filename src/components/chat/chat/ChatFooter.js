import { AttachFile, EmojiEmotionsOutlined, Mic} from '@mui/icons-material'
import { InputBase,Box,styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { uploadFile } from '../../../services/Api'


//Style
const Component=styled(Box)`
display:flex;
align-items:center;
height:44px;
padding:11px 16px;
background:#f0f2f5;
`
const IconWrapper=styled(Box)`
&>*{
    padding:10px;
    font-size:25px;
}
`
const Wrapper=styled(Box)`
background:white;
border-radius:5px;
padding:10px 13px;
height:40px;
width:calc(100%-135px);
`

const ChatFooter = ({sendText,setValue,value,file,setFile,setImage}) => {
    useEffect(()=>{
        const getImage=async ()=>{
            if(file){
                // let data=new FormData();
                // data.append('name',file.name)
                // data.append('file',file)
                // console.warn(data)
                let response=await uploadFile(file);
                console.warn(response)/*----------------------------------->*/
                setImage(response.data)
            }
        }
        getImage();
    },[file])
    const fileChange=(e)=>{
        setFile(e.target.files[0])
        setValue(e.target.files[0].name)
    }
    
  return (
    <Component>
        <IconWrapper>
            <EmojiEmotionsOutlined/>
            <label htmlFor='file-input'>
                <AttachFile/>
            </label>
            <input 
            type='file'
            id='file-input'
            style={{display:'none'}}
            onChange={fileChange}
            />
        </IconWrapper>
        <Wrapper >
            <InputBase
            placeholder='Type a message'
            onChange={(e)=>setValue(e.target.value)}
            onKeyPress={(e)=> sendText(e)}
            value={value}
            />
        </Wrapper>
        <IconWrapper >
            <Mic />
        </IconWrapper>
    </Component>
  )
}

export default ChatFooter