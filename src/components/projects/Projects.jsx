import React, { useEffect, useState } from 'react'
import '../../pages/home.css';
import Styled from './projects.module.css';
import PresentationBox from '../presentationBox/PresentationBox';
import data from './db'

function Projects() {


    return (
        <>
            <div className={Styled.title}>
                <div className="titleXL">Projects</div>
                <div className={`${Styled.right} ${"contactLink"}`}>
                    <a href="http://"><p>CONTACT ME</p></a>
                </div>
            </div>
            {/* {data.projects.map((project, index) => {
                <PresentationBox
                    key={index}
                    id={project.id}
                    name={project.name}
                    image={project.image}
                    gitLink={project.gitLink}
                    link={project.link}
                />
            })} */}
            <PresentationBox />
        </>
    )
}

export default Projects