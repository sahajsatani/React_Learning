import { Outlet } from "react-router-dom";
import FooterTemp from "./Component/FooterSec";
import Header from "./Component/HeaderTemp";

function Layout(){
    return(
        <>
            <Header />
            <Outlet />
            <FooterTemp />
        </>
    )
}
export default Layout;