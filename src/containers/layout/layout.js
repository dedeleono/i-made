import React, { Component } from 'react';

class Layout extends Component {
    render()
    {
        return(
            <div>
                <div>Toolbar</div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Layout;