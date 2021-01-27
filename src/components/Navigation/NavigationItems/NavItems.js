import styles from './NavItems.module.css';
import NavItem from './NavigationItem/NavItem';

const navItems = (props) => {
    return(
        <ul className={styles.NavItems}>
            <NavItem link="/">Shop</NavItem>
            <NavItem link="/about">About</NavItem>
            <NavItem link="/contact">Contact</NavItem>
        </ul>
    )
}

export default navItems;