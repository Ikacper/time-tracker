import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';

import Logo from './../../components/Logo/Index'


const Index = () => {
    return(
        <>
            <Logo/>
            <h1>Reset password</h1>
        </>
    )
}

export default Index;