import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';

import Calendar from './../../components/Calendar/Index';

import styles from './Index.module.css';


const Index = () => {
    return(
        <>
        <div className={styles.wrapper}>
            <Calendar />
            </div>
        </>
    )
}

export default Index;