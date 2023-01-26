import { Box, Divider,styled } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider'

//Components
import { getUsers } from '../../../services/Api'
import Conversation from './Conversation'


//Style
const StyledDivider=styled(Divider)`
margin-left:70px;
color:#e9edef;
opacity:0.6;
`
const Component = styled(Box)`
    overflow: overlay;
    height: 81vh;
`;
const Conversations = ({text}) => {
    const [users,setUsers]=useState([])
    const {account/*, socket, setActiveUsers*/}=useContext(AccountContext)
    useEffect(()=>{
        const fetchData=async ()=>{
            let response=await getUsers();
            let filteredData=response.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()))
            setUsers(filteredData);
        }
        fetchData();
    },[text])
  //   useEffect(() => {
  //     socket.current.emit('addUser', account);
  //     socket.current.on("getUsers", users => {
  //         setActiveUsers(users);
  //     })
  // }, [account])
  return (
    <Component>
        {
          users && users.map((user,index)=>
          user.sub!==account.sub &&
          <>
            <Conversation user={user}/>
            {
                users.length !== (index + 1)  && <StyledDivider />
            }
          </>
          )
        }
    </Component>
  )
}

export default Conversations