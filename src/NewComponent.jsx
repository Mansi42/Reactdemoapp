import { Outlet } from "react-router-dom";
import Navfile from "./Navfile";


function NewComponent(){

    return(
    <>
        <Navfile/>
        <Outlet/>

    </>
    )


}

export default NewComponent;