import React from "react";
import { memo } from "react";
function Nav({adjective,tryFun}){
    console.log("Rerender Nav Function");
    return(
        <>
        <h1 className="text-white">This is Navbar {adjective}</h1>
        <button className="text-white bg-slate-600 p-3 rounded-md" onClick={tryFun}>{tryFun()}</button>
        </>
    );
}
export default memo(Nav);