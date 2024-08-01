import { Outlet } from "react-router-dom";
import Header from "../../sections/header/header";

const OutletSection = () => {

    return (
        <>
            <Header/>
                <Outlet/>
        </>
    )
}

export default OutletSection