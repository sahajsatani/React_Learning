import { useContext, useState } from "react"
import UserContext from "./context/userContext";

export default function Login(){
    const [userName,setUserName] = useState(null);
    const [password,setPassword] = useState(null);
    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({userName,password});
    }
    return(
        <>
            <div className="flex flex-col m-4">
                <form className="flex flex-col gap-3 p-3">
                    <input
                    type="text" 
                    onChange={(e) => {setUserName(e.target.value)}}
                    placeholder="Enter Name Of User"/>

                    <input
                    type="password"
                    onChange={(e) => {setPassword(e.target.value)}}
                    placeholder="****"/>

                    <input
                    type="submit"
                    onClick={handleSubmit}
                    value={"Submit"}/>
                </form>
            </div>
        </>
    )
}