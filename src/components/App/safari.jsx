import React, { Component } from 'react';
import Draggable from "react-draggable";

export class Safari extends Component {
    constructor() {
        super();
        this.home_url = 'https://www.google.com/webhp?igu=1';
        this.state = {
            url: 'https://www.google.com/webhp?igu=1',
            display_url: "www.google.com",
        }
    }

    componentDidMount() {
        let lastVisitedUrl = localStorage.getItem("safari-url");
        let lastDisplayedUrl = localStorage.getItem("safari-display-url");
        if (lastVisitedUrl !== null && lastVisitedUrl !== undefined) {
            this.setState({ url: lastVisitedUrl, display_url: lastDisplayedUrl }, this.refreshSafari);
        }
    }

    storeVisitedUrl = (url, display_url) => {
        localStorage.setItem("safari-url", url);
        localStorage.setItem("safari-display-url", display_url);
    }

    refreshSafari = () => {
        document.getElementById("safari-screen").src += '';
    }

    goToHome = () => {
        this.setState({ url: this.home_url, display_url: "https://www.google.com" });
        this.refreshSafari();
    }

    checkKey = (e) => {
        if (e.key === "Enter") {
            let url = e.target.value;
            let display_url = "";

            url = url.trim();
            if (url.length === 0) return;

            if (url.indexOf("http://") !== 0 && url.indexOf("https://") !== 0) {
                url = "https://" + url;
            }

            url = encodeURI(url);
            display_url = url;
            if (url.includes("google.com")) { // 😅
                url = 'https://www.google.com/webhp?igu=1';
                display_url = "https://www.google.com";
            }
            this.setState({ url, display_url: url });
            this.storeVisitedUrl(url, display_url);
            document.getElementById("safari-url-bar").blur();
        }
    }

    handleDisplayUrl = (e) => {
        this.setState({ display_url: e.target.value });
    }


    displayUrlBar = () => {
        return (
            <div className="taskbar-container">
                <div className="close-bar">
                    <button onClick={close} className="close-button closebar-button">
                        <div className="close-svg"/>
                    </button>
                    <button className="minimize-button closebar-button">
                        <div className="minimize-svg"/>
                    </button>
                    <button onClick={maximize} className="maxmize-button closebar-button">
                        <div className="maximize-svg"/>
                    </button>
                </div>
                <div className="about-menu-container d-flex">

                    <input onKeyDown={this.checkKey} onChange={this.handleDisplayUrl} value={this.state.display_url} id="safari-url-bar" className="safari-url-bar" type="url" spellCheck={false} autoComplete="off" />
                </div>
            </div>
        );
    }

    render() {
        return (
            <Draggable
                handle=".taskbar-container"
                defaultPosition={{x: 200, y: 150}}
                position={null}
                grid={[25, 25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div onClick={zindex} className="safari-container">
                    {this.displayUrlBar()}
                    <div id="aboutmain" className="w-100 h-100 mt-lg-3">
                        <iframe src={this.state.url} className="w-100 h-100" id="safari-screen" frameBorder="0" title="Ubuntu Safari Url"/>
                    </div>
                </div>
            </Draggable>
        )
    }
}
function zindex() {
    document.querySelector(".safari-container").style.zIndex = "11";
    document.querySelector(".about-container").style.zIndex = "10";
}
function close() {
    const safaricon = document.querySelector('.safari-container');
    safaricon.style.display = "none";
}
function maximize() {
    const safaricon = document.querySelector('.safari-container');
    safaricon.style.width = '100%'
    safaricon.style.height = '97%'
    safaricon.style.transform = "translate(0, 25px)"
}
export default Safari

export const displaySafari = () => {
    return <Safari> </Safari>;
}