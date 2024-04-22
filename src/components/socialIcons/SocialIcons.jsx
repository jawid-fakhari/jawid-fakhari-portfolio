import React from 'react'
import Styled from './socialIcons.module.css'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

function SocialIcons() {
    return (
        <>
            <div className={`${Styled.top} ${"titleM"}`}>
                <div className={Styled.fullName}>
                    <p><span className={Styled.name}>Jawid</span>Fakhari</p>
                </div>
                <div className={Styled.socialIcons}>
                    <FaGithubSquare />
                    <FaLinkedin />
                </div>
            </div>
        </>
    )
}

export default SocialIcons