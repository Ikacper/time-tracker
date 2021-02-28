import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Index.module.css";
import { DashboardIcon, CategoriesIcon, PlanningIcon } from './../../assets/svgs/SidebarIcons';

const list = [
            {name: "dashboard", path:"/", exact: true, icon: <DashboardIcon />},
            {name: "categories", path:"/categories", icon: <CategoriesIcon />},
            {name: "planning", path:"/planning", icon: <PlanningIcon />}
        ]

const Index = () => {
    const menu = list.map( (item,i) =>
        <li key={i} className={styles.item}>
            <NavLink
                activeClassName={styles.selected}
                className={styles.linkItem}
                to={item.path} 
                exact={ item.exact ? item.exact : false}
            >
                <div className={styles.itemIcon}>
                    {item.icon}
                </div>
                {item.name}
            </NavLink>
        </li>
        )
    return(
        <aside className={styles.sidebarWrapper}>
            <ul className={styles.list}>
                {menu}
            </ul>
        </aside>
    )
}

export default Index;