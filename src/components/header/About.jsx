import React from 'react'
import '../../pages/home.css';
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import styled from './about.module.css'



function About() {
    return (
        <div>
            <div className={styled.headBox}>
                <div className={styled.imageBox}>
                    <div className={styled.image}></div>
                </div>
                <div className={`${styled.top} ${"titleM"}`}>
                    <div className={styled.fullName}>
                        <p><span className={styled.name}>Jawid</span>Fakhari</p>
                    </div>
                    <div className={styled.socialIcons}>
                        <FaGithubSquare />
                        <FaLinkedin />
                    </div>

                </div>
                <div className={styled.welcome}>
                    <div className={styled.titleBox}>
                        <p className="titleXL">Welcome to my portfolio! <br /> I'm <span>Jawid Fakhari</span></p>
                    </div>
                    <div className={styled.presentationBox}>
                        <p className="prgMedium">With a strong focus on frontend development, I'm dedicated to mastering the latest technologies and design principles to create visually stunning and user-friendly websites.</p>
                    </div>
                    <div className={styled.contactLink}>
                        <a href="http://"><p>CONTACT ME</p></a>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default About