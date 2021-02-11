import NavItem from './NavigationItem/NavItem';

const navItems = (props) => {
    return(
        <ul className={}>
            <NavItem link="/">Shop</NavItem>
            <NavItem link="/about">About</NavItem>
            <NavItem link="/contact">Contact</NavItem>
        </ul>
    )
}

export default navItems;