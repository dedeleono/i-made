import styles from './Toolbar.module.css';
import NavItems from '../NavigationItems/NavItems';

const Toolbar = (props) => {
    return(
        <header className={styles.Toolbar}>
           <NavItems /> 
        </header>
    )
}

export default Toolbar;