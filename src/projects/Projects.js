import React from 'react'
import Project from '../project/Project'
import './projects.css'

const Projects = () => {
    return (
        <div className='projects'>
            <p className='grey calibre'>Fun projects - 👇</p>
            <h1 className='white calibre'>Stuff I’ve worked on 📁</h1>
            <div className='projectsRow'>
            <Project title={'project1'}/>
           
            </div>
        </div>
    )
}

export default Projects
