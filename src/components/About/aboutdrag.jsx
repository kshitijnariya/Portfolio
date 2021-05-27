import React from "react";
import Draggable from "react-draggable";
import ReactDOM from "react-dom";


class Aboutdrag extends React.Component {

    eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
    };

    render() {
        function close() {
            const aboutcon = document.querySelector('.about-container');
            aboutcon.style.display = "none";
        }

        return (
            <Draggable
                handle=".taskbar-container"
                defaultPosition={{x: 350, y: 100}}
                position={null}
                grid={[25, 25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div className="about-container">
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
                        <div className="about-menu-container">
                            <button className="about-menu-text">About</button>
                            <button className="about-menu-text">Projects</button>
                            <button className="about-menu-text">Experience</button>
                            <button className="about-menu-text">Education</button>
                            <button className="about-menu-text">Skills</button>
                        </div>
                    </div>
                    <div className="about-main-container">
                        <div className="h-100">
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
                                        <p className="kshitij-summary">Self-motivated and hardworking student seeking an opportunity to work in a challenging environment to prove my coding skills and utilize my knowledge of various databases for the growth of the organization. </p>
                                        <div className="d-flex button-con">
                                            <button className="about-buttons center">
                                                Resume
                                            </button>
                                            <button className="about-buttons center">
                                                Contact
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
ReactDOM.render(<Aboutdrag/>, document.getElementById('root'));
export default Aboutdrag