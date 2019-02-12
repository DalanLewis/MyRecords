import React, { Component, Fragment } from 'react';
import SiteNav from './site-nav'
import Files from './files'

class Live extends Component {

    state = {
        songs: {
            titleInProgress: '',
            descriptionInProgress: ''
        },
        projects: []
    }
    
titleInProgress = (e) => {
    this.setState({
        songs: {
            titleInProgress: e.target.value,
            descriptionInProgress: this.state.songs.descriptionInProgress
        }
    })
} 

descriptionInProgress = (e) => {
    this.setState({
        songs: {
            titleInProgress: this.state.songs.titleInProgress,
            descriptionInProgress: e.target.value
        }
    })
}

componentDidMount = async (a) => {
    try {
        const res = await fetch('http://localhost:3333/files')
        const projects = await res.json()
        this.setState({ projects })
    }
    catch (err) {
        console.log(err)
    }
}

saveProject = async () => {
    try{ 
        await fetch('http://localhost:3333/files', {
            method: 'post',
            headers: {
                "Content-Type": "application/json; chaset=UTF-8"
            },
            body: JSON.stringify(this.state.songs)
        })
        console.log(this.state.songs)
        this.componentDidMount()
    }
    catch (err) {
        console.log(err)
    }
    this.setState({
        songs:{
        titleInProgress: '',
        descriptionInProgress:''
        }
    })
}

renderProjects = () => {
    if (this.state.projects){
        return this.state.projects.map(
            (project) => (
                <Files name={project} />
            )
        )
    }
}

    render() {
        return (
            <Fragment>
                <section>
                    <div>
                        <SiteNav />
                    </div>
                    <article className='files'>
                        <h2 className='listHeader'>Files:</h2>
                        <div className='list'>
                        <ul>
                            {this.renderProjects()}
                        </ul>
                        </div>
                    </article>
                    <div className="input">
                        <span className='title'> Title <input onChange={this.titleInProgress} size='50' type='text' value={this.state.songs.titleInProgress} /></span>
                        <span className='title'> Description <input onChange={this.descriptionInProgress} size="80" type="text" value={this.state.songs.descriptionInProgress}/></span>
                    </div>
                </section>
                <article>
                    <div>
                        <img src='./Audio.png' alt='placeholder' />
                    </div>
                    <footer>
                        <button onClick={this.saveProject}>Update</button>
                        <button>Remove</button>
                    </footer>
                </article>
            </Fragment>
        )
    }
}
export default Live