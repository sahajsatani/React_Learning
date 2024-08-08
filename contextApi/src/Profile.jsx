import { useContext } from "react";
import UserContext from "./context/userContext";

export default function Profile(){
    const {user} = useContext(UserContext);
    if(!user) return <h3>Please Login bro</h3>
    return <h3>UserName is {user.userName}</h3>
}