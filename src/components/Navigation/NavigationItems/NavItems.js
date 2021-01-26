import styles from './NavItems.module.css'

const navItems = (props) => {
    return(
        <ul className={styles.NavItems}>
            <li>
                <a>Link 1</a>
            </li>
            <li>
                <a>Link 2</a>
            </li>
            <li>
                <a>Link 2</a>
            </li>
        </ul>
    )
}

export default navItems;