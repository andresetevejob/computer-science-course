import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
type children = {
    children:ReactNode
}
export const SecureRoute = (props:children)=>{
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (!userToken || userToken === 'undefined') {
            setIsLoggedIn(false);
            return navigate('/login');
        }
        setIsLoggedIn(true);
    }
    useEffect(() => {
            checkUserToken();
        }, [isLoggedIn]);
    return (
        <>
            {
                isLoggedIn ? props.children : null
            }
       </>
    );
}