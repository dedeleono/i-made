import React, { Component } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import styles from './layout.module.css';

class Layout extends Component {
    render()
    {
        return(
            <div>
                <Toolbar />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;