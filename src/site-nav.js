import React, {Component, Fragment} from 'react'
import { Link } from 'react-router-dom'


class SiteNav extends Component {
    render = () => {
        return (
            <Fragment>
                <div>
                    <h1>
                        My-Records.com
                    </h1>
                    <section>
                        <Link to="live">My</Link>
                        <div>Yours (coming soon)</div>
                        <div>Record</div>
                        <div>Info</div>
                    </section>
                </div>
            </Fragment>
        )
    } 
}
export default SiteNav