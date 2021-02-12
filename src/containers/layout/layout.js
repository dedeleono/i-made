import React, { Component } from 'react';
import styles from './Layout.module.css';

class Layout extends Component {
    render()
    {
        return(
            <>
                <header>
                </header>
                <main className={styles.Content}>
                    {this.props.children}
                </main>
                <footer></footer>
            </>
        )
    }
}

export default Layout;