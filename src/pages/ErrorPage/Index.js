import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';

import styles from './Index.module.css';


const ErrorPage = () => {
    return(
    <h1 className={styles.error}>ErrorPage</h1>
    )
}

export default ErrorPage;