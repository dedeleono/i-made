import styles from './NavItem.module.css';
import { NavLink } from 'react-router-dom';

const navitem = (props) => {
    return(
        <li className={styles.NavItem}>
            <NavLink to={props.link} exact activeClassName={styles.active} className={styles.NavItem}>{props.children}</NavLink>
        </li>
    )
}

export default navitem;