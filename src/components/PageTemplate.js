import React from "react";

import Navbar from './Navbar/Index';
import Sidebar from './Sidebar/Index';

const PageTemplate = (props) => {

    return(
        <>
            <Navbar />
            <Sidebar />
            { props.children }
        </>
    )
}

export default PageTemplate;