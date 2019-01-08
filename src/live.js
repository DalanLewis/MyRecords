import React, { Component, Fragment } from 'react';
import SiteNav from './site-nav'

class Live extends Component {
    render() {
        return (
            <Fragment>
                <section>
                    <div>
                        <SiteNav />
                    </div>
                    <div>
                        <span className='form'> Title <input onChange={this.titleInProgress} size='50' type='text' /></span>
                        <span className='form'> Description <input onChange={this.descriptionInProgress} size="50" type="text" /></span>
                    </div>
                </section>
                <article>
                    <image>
                        <img src='./Audio.png' alt='placeholder' />
                    </image>
                    <footer>
                        <button>Update</button>
                        <button>Remove</button>
                    </footer>
                </article>
            </Fragment>
        )
    }
}

export default Live