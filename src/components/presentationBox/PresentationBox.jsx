import React from 'react'
import Styled from './presentationBox.module.css'
import '../../pages/home.css'

function PresentationBox(props) {
    return (
        <>
            <div className={Styled.wrapper}>
                <div className={Styled.imageWrapper}>
                    <div className={Styled.img}>
                        <img src={props.image} alt="" />
                    </div>
                    <div className={Styled.viewLinks}>
                        <div className={`${Styled.projectLink} ${"contactLink"}`}>
                            <a href={props.link}>VIEW PROJECT</a>
                        </div>
                        <div className={`${Styled.gitLink} ${"contactLink"}`}>
                            <a href={props.gitLink}>VIEW CODE</a>
                        </div>
                    </div>
                </div>
                <p className="titleM">{props.name}</p>
                <p className='prgMedium'>SKILLS, SKILLS, SKILLS</p>
            </div>
        </>
    )
}

export default PresentationBox