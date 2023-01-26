import React from 'react'
import { Dialog,Box,Typography,styled, List, ListItem, Grid } from '@mui/material'
import {GoogleLogin} from '@react-oauth/google'
import jwt_decode from 'jwt-decode'
import { useContext } from 'react'

//Components
import { qrCodeImage } from '../../constants/data'
import { AccountContext } from '../../context/AccountProvider'
import { addUser } from '../../services/Api'

//Style
const dialogStyle={
    width:'60%',
    height:'96%',
    maxWidth:'100%',
    maxHeight:'100%',
    boxShadow:'none',
    overflow:'hidden',
    marginTop:'12%'
}
const Image=styled('img')({
    width:264,
    height:264,
})
const Title=styled(Typography)`
font-family:inherit;
color:#41525d;
font-weight:550px;
margin-bottom:25px;
`
const StyledList=styled(List)`
&>li{
    padding:0;
    margin-top:15px;
    font-size:18px;
    line-height:28px;
    color:#484848;
}
`
const LoginDialogue = () => {
    const {setAccount}=useContext(AccountContext)
    const onLoginSuccess=async (res)=>{
        const decode=jwt_decode(res.credential)
        setAccount(decode)
        await addUser(decode)
    }
    const onLoginError=(res)=>{
        console.log(res)
    }
  return (
    <Dialog
    open={true}
    PaperProps={{sx:dialogStyle}}
    hideBackdrop={true}
    >
        <Grid container p={7}>
            <Grid item lg={8} md={8} sm={6} xs={6}>
                <Title variant='h5'>To use WhatsApp on your computer :</Title>
                <StyledList>
                    <ListItem>1. Open Whatsapp on your phone</ListItem>
                    <ListItem>2. Tap Menu Settings and select Linked Devices</ListItem>
                    <ListItem>3. Tap on Link a Device</ListItem>
                    <ListItem>3. Point your phone to this screen to capture this code</ListItem>
                </StyledList>
                <Typography mt={3} color='teal'>Need help to get started?</Typography>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={6} >
                <Box style={{position:'relative'}}>
                    <Image src={qrCodeImage} alt='qr'/>
                    <Box style={{position:'absolute',top:'50%',transform:'100%'}}> 
                        <GoogleLogin
                        onSuccess={onLoginSuccess}
                        onError={onLoginError}
                        />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Dialog>
    
  )
}

export default LoginDialogue