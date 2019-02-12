import React, { Component, Fragment } from 'react';

class Files extends Component {
    
    // showDescription = () => {
    //     if (this.props.name.descriptionInProgress = true)
    // //         render (this.props.name.descriptionInProgress)
    // //         return
    // }

    render = () => {
        return (
            <Fragment>
                <li onClick>
                    {this.props.name.titleInProgress}
                </li>
            </Fragment>
        )
    }
}

export default Files