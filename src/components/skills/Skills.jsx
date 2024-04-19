import React from 'react'
import '../../pages/home.css';
import styled from './skills.module.css'

function Skills() {
    return (
        <>
            <hr />
            <div className={styled.skillsWrapper}>
                <div className={styled.html}>
                    <p className="titleL">HTML</p>
                    <p className={`${styled.skillLevel} ${"prgMedium"}`}>2 year experienced</p>
                </div>
                <div className={styled.css}>
                    <p className="titleL">CSS</p>
                    <p className={`${styled.skillLevel} ${"prgMedium"}`}>2 year experienced</p>
                </div>
                <div className={styled.javascript}>
                    <p className="titleL">JavaScript</p>
                    <p className={`${styled.skillLevel} ${"prgMedium"}`}>2 year experienced</p>
                </div>
                <div className={styled.bootstrap}>
                    <p className="titleL">Bootstrap</p>
                    <p className={`${styled.skillLevel} ${"prgMedium"}`}>2 year experienced</p>
                </div>
                <div className={styled.react}>
                    <p className="titleL">ReactJs</p>
                    <p className={`${styled.skillLevel} ${"prgMedium"}`}>2 year experienced</p>
                </div>
            </div>
        </>
    )
}

export default Skills