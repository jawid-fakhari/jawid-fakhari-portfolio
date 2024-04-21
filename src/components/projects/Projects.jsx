import React from 'react'
import '../../pages/home.css';
import Styled from './projects.module.css';

function Projects() {
    return (
        <>
            <div className={Styled.title}>
                <div className="titleXL">Projects</div>
                <div className={`${Styled.right} ${"contactLink"}`}>
                    <a href="http://"><p>CONTACT ME</p></a>
                </div>
            </div>
        </>
    )
}

export default Projects