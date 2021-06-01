import React from 'react';
import Draggable from "react-draggable";
import ReactDOM from "react-dom";
import * as ReactGA from "react-ga";
import { Projectdata } from "../other/projectdata";
import resumepdf from "../img/extra/Resume.pdf"


class Kshitij extends React.Component {

    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => {
            },
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        }
    }

    componentDidMount() {
        this.screens = {
            "about": <About1/>,
            "education": <Education/>,
            "experience": <Experience/>,
            "projects": <Projects/>,
            "skills": <Skills/>,
            "resume": <Resume/>,
        }

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen
        });
    }

    showNavBar = () => {
        this.setState({navbar: !this.state.navbar});
    }

    renderNavLinks = () => {
        return (
            <>
                <button id="about" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " about-menu-text active" : " about-menu-text")}>About</button>
                <button id="projects" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " about-menu-text active" : " about-menu-text")}>Projects</button>
                <button id="experience" onFocus={this.changeScreen} className={(this.state.active_screen === "experience" ? " about-menu-text active" : " about-menu-text")}>Experience</button>
                <button id="education" onFocus={this.changeScreen} className={(this.state.active_screen === "education" ? " about-menu-text active" : " about-menu-text")}>Education</button>
                <button id="skills" onFocus={this.changeScreen} className={(this.state.active_screen === "skills" ? " about-menu-text active" : " about-menu-text")}>Skills</button>
                <button id="resume" onFocus={this.changeScreen}/>
            </>
        );
    }


    render() {
        //Close Button
        function close() {
            const aboutcon = document.querySelector('.about-container');
            aboutcon.style.display = "none";
        }

        return (
            <Draggable
                handle=".taskbar-container"
                defaultPosition={{x: 100, y: 50}}
                position={null}
                grid={[25, 25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div onClick={zindex} className="about-container">
                    <div className="taskbar-container">
                        <div className="close-bar">
                            <button onClick={close} className="close-button closebar-button">
                                <div className="close-svg"/>
                            </button>
                            <button className="minimize-button closebar-button">
                                <div className="minimize-svg"/>
                            </button>
                            <button className="maxmize-button closebar-button" disabled>
                                <div className="maximize-svg"/>
                            </button>
                        </div>
                        <div onClick={this.showNavBar} id="active" className="about-menu-container">
                            {this.renderNavLinks()}
                        </div>
                    </div>
                    <div id="aboutmain" className="about-main-container">
                        {this.state.screen}
                    </div>
                    <div className="copyright-container">
                        <p className="copyright">
                            © 2020 HorizonLight. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </Draggable>
        )
    }

}
ReactDOM.render(<Kshitij/>, document.getElementById('root'));
export default Kshitij
function zindex() {
    document.querySelector(".safari-container").style.zIndex = "10";
    document.querySelector(".kmail-container").style.zIndex = "10";
    document.querySelector(".about-container").style.zIndex = "11";
}
function About1() {
    function resumebutton() {
        document.getElementById('resume').focus();
    }
    return (
        <>
            <div id="about" className="h-100">
                <div className="row h-100">
                    <div className="col-lg-6 center">
                        <div className="about-image-container center">
                            <div className="about-image"/>
                        </div>
                    </div>
                    <div className="col-lg-6 center justify-content-end">
                        <div className="about-txt-con">
                            <p className="kshitij-name">Kshitij Nariya</p>
                            <p className="kshitij-position">Frond-end Developer</p>
                            <p className="kshitij-summary">Self-motivated and hardworking student seeking an opportunity to
                                work in a challenging environment to prove my coding skills and utilize my knowledge of
                                various databases for the growth of the organization. </p>
                            <div className="d-flex button-con">
                                <button onClick={resumebutton} className="about-buttons center">Resume</button>
                                <a href="mailto:knariya7422@gmail.com" className="about-buttons center">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
function Education() {
    return (
        <>
            <div id="education" className="h-100">
                <div className="education-divider"/>
                <div className="education-card-container pu d-flex">
                    <div className="education-card-image pu"/>
                    <div className="education-card-txt-con">
                        <p className="card-title">Parul University</p>
                        <p className="card-position">B.Tech - Information Technology</p>
                        <p className="card-extra">CGPA : 7.16 / 10.00</p>
                        <p className="card-extra">2018 - 2022</p>
                    </div>
                </div>
                <div className="container-after pu"/>
                <div className="container-after jb1"/>
                <div className="education-card-container xii d-flex">
                    <div className="education-card-image jb"/>
                    <div className="education-card-txt-con">
                        <p className="card-title">J.B. & KARP Vidya Sankul</p>
                        <p className="card-position">XII | GHSEB</p>
                        <p className="card-extra">Percentage : 68.92 / 100</p>
                        <p className="card-extra">2018</p>
                    </div>
                </div>
                <div className="education-card-container x d-flex">
                    <div className="education-card-image jb"/>
                    <div className="education-card-txt-con">
                        <p className="card-title">J.B. & KARP Vidya Sankul</p>
                        <p className="card-position">X | GSEB</p>
                        <p className="card-extra">Percentage : 69 / 100</p>
                        <p className="card-extra">2016</p>
                    </div>
                </div>
                <div className="container-after jb2"/>
            </div>
        </>
    )
}
function Experience() {
    return (
        <>
            <div id="experience" className="h-100">
                <div className="education-divider"/>
                <div className="education-card-container pu d-flex">
                    <div className="education-card-image mekvahan"/>
                    <div className="education-card-txt-con">
                        <p className="card-title">Front-end Developer</p>
                        <p className="card-position">MekVahan | Intern</p>
                        <p className="card-extra">April 2021 - May 2021</p>
                        <ul className="card-extra ullist">
                            <li style={{lineHeight: '1'}}>Provided Front-end Developmen</li>
                            <li style={{lineHeight: '1'}}>Made Responsive Web & Provided Better Web experiance</li>
                        </ul>
                    </div>
                </div>
                <div className="container-after pu"/>
                <div className="container-after jb1"/>
                <div className="education-card-container xii d-flex">
                    <div className="education-card-image techfest"/>
                    <div className="education-card-txt-con">
                        <p className="card-title">Social Media Marketing</p>
                        <p className="card-position">Techfest, IIT Bombay | Intern</p>
                        <p className="card-extra">July 2020 - February 2021</p>
                        <ul className="card-extra ullist">
                            <li style={{lineHeight: '1'}}>Active Leader in my campus community</li>
                            <li style={{lineHeight: '1'}}>Silver Certificate Received in this internship</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
function Projects() {
    return (
        <>
            <div id="projects" className="h-100">
                <div className="project-container">
                    <Projectdata />
                </div>
            </div>
        </>
    )
}
function Skills() {
    return (
        <>
            <div id="skills" className="h-100">
                <ul className="text-align-center skill mt-lg-3">
                    <li>My areas of expertise are <strong className="apple-blue">Front-end development, UI Designing & React.js!</strong></li>
                    <li>I actively learn new things based on my projects.</li>
                </ul>
                <div className="w-80 m-auto mt-lg-3 d-flex">
                    <div className="col-lg-6 text-align-center">
                        <ul className="skill"><li><b>Language & Libraries</b></li></ul>
                        <div className="d-flex flex-wrap justify-content-center items-start m-auto w-70">
                            <img className="m-1" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript" />
                            <img className="m-1" src="https://img.shields.io/badge/Python-20232A?style=for-the-badge&logo=python&logoColor=white" alt="python" />
                            <img className="m-1" src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="c++" />
                            <img className="m-1" src="https://img.shields.io/badge/Kotlin-0095D5?&style=for-the-badge&logo=kotlin&logoColor=white" alt="kotlin" />
                            <img className="m-1" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
                            <img className="m-1" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Css" />
                            <img className="m-1" src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
                            <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="java" className="m-1" />
                            <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="jquery" className="m-1" />
                        </div>
                    </div>
                    <div className="col-lg-6 text-align-center">
                        <ul className="skill"><li><b>Framework & Tools</b></li></ul>
                        <div className="d-flex flex-wrap justify-content-center items-start m-auto w-70">
                            <img className=" m-1" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=white" alt="react" />
                            <img className="m-1" src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" alt="Django" />
                            <img className="m-1" src="https://img.shields.io/badge/React_Native-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="react native" />
                            <img src="https://img.shields.io/badge/Google_Cloud-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white" alt="Google Cloud" className="m-1" />
                            <img src="https://img.shields.io/badge/Git-E84E31?style=for-the-badge&logo=git&logoColor=white" alt="git" className="m-1" />
                            <img className="m-1" src="https://img.shields.io/badge/Figma-1E1829?style=for-the-badge&logo=figma&logoColor=9D56F7" alt="Figma" />
                            <img className="m-1" src="https://img.shields.io/badge/Adobe_XD-450135?style=for-the-badge&logo=adobe-xd&logoColor=F75EEE" alt="XD" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
function Resume() {
    return (
      <iframe className="w-100 h-100" src={resumepdf} frameBorder="0" />
    )
}
