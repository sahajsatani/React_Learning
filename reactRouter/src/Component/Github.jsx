import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
export default function Github(){
    // const [follower,setFollower] = useState(1);
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/hiteshchoudhary").then((res) => res.json()).then((res) => setFollower(res.followers));
    // },[]);

    const data = useLoaderData();
    return(
        <>
            <div className="text-center p-5">
                <h1 className="text-black p-2 bg-gray-100 rounded-lg">Followers : {data?.followers}</h1>
            </div>
        </>
    )
}
export const getFollower = async () => {
    const res = await fetch("https://api.github.com/users/hiteshchoudhary")
    return res.json();
}