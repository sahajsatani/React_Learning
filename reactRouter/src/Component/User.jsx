import { useParams } from "react-router-dom"
export default function User(){
    const {userid} = useParams();
    return(
        <>
            <div className="text-center p-5">
                <h1 className="text-black p-2 bg-gray-100 rounded-lg">User : {userid}</h1>
            </div>
        </>
    )
}