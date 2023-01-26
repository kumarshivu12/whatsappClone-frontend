import { createContext, useState, useEffect, useRef } from 'react';
import { io } from 'socket.io';

export const AccountContext = createContext(null);

const AccountProvider=({children})=>{
    const [account,setAccount]=useState();
    const [person,setPerson]=useState({});
    const [activeUsers, setActiveUsers] = useState([]);
    const [messageFlag,setMessageFlag]=useState(false);
    const [newMessageFlag, setNewMessageFlag] = useState(false);

    const socket = useRef();

    useEffect(() => {
        socket.current = io('ws://localhost:9000');
    }, [])
    return(
        <AccountContext.Provider value={{
            account,
            setAccount,
            person,
            setPerson,
            socket,
            activeUsers,
            setActiveUsers,
            messageFlag,
            setMessageFlag,
            newMessageFlag,
            setNewMessageFlag
        }}>
            {children}
        </AccountContext.Provider>
    )
}

export default AccountProvider