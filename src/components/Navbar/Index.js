import React from "react";
import styles from "./Index.module.css";
import { Link } from "react-router-dom";

const Index = () => {

    const handleLogout = () => {
        localStorage.clear();
        window.location.href = '/login';
    }

    return(
        <div className={styles.container}>
            {/* <HamburgerIcon /> */}
            <Link to='/' exact className={styles.logo}>
                Time Tracker
            </Link>
            <ul className={styles.listContainer}>
                <li className={styles.listItem}>
                    <div>Avatar</div>
                    {/* <Link to={user.id}>
                        <Avatar />
                    </Link> */}
                </li>
                <li className={styles.listItem}>
                    <Link to='#' onClick={handleLogout}>Logout</Link>
                </li>
            </ul>
        </div>
    )
}

export default Index;