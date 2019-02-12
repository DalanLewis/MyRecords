import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'


class SiteNav extends Component {
    render = () => {
        return (
            <Fragment>
                <div>
                    <h1>
                        My-Records.com
                    </h1>
                    <article className='navbox'>
                        <div className='topnav'>
                            <Link to="live">My</Link>
                            <Link to=" ">Yours (coming soon)</Link>
                        </div>
                        <div className='botnav'>
                            <Link to=" ">Record</Link>
                            <Link to=" ">Info</Link>
                        </div>
                    </article>
                </div>
            </Fragment>
        )
    }
}
export default SiteNav