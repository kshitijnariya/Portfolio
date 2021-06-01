import React from 'react';
import Clock from "../other/clock";


function Main() {

    function aboutkshitij() {
        document.querySelector('.about-container').style.display = "block";
        document.querySelector(".about-container").style.zIndex = "11";
        document.querySelector(".safari-container").style.zIndex = "10";
        document.querySelector(".kmail-container").style.zIndex = "10";
    }
    function safari() {
        document.querySelector('.safari-container').style.display = "block";
        document.querySelector(".safari-container").style.zIndex = "11";
        document.querySelector(".about-container").style.zIndex = "10";
        document.querySelector(".kmail-container").style.zIndex = "10";
    }
    function kmail() {
        document.querySelector('.kmail-container').style.display = "block";
        document.querySelector(".safari-container").style.zIndex = "10";
        document.querySelector(".about-container").style.zIndex = "10";
        document.querySelector(".kmail-container").style.zIndex = "11";
    }



    return (
        <>
            <div id='nav' className="nav-panel"/>
            <div className="nav-container">
                <div className="apple">
                    <button className="applebtn" />
                    <div className="apple-content">
                        <p>About This Mac</p>
                        <div className="section-border1" />
                        <p>System Preferences...</p>
                        <p>App Store...</p>
                        <div className="section-border1" />
                        <p>Recent Items</p>
                        <div className="section-border1" />
                        <p>Force Quit Finder</p>
                        <div className="section-border1" />
                        <p>Sleep</p>
                        <p>Restart...</p>
                        <p>Shut Down...</p>
                        <div className="section-border1" />
                        <p>Lock Screen</p>
                        <p>Log Out Kshitij Nar...</p>
                    </div>

                    <p className="apple-text">Finder</p>
                    <p className="apple-text">File</p>
                    <p className="apple-text">Edit</p>
                    <p className="apple-text">View</p>
                    <p className="apple-text">Go</p>
                    <p className="apple-text">Window</p>
                    <p className="apple-text">Help</p>
                </div>
                <div className="wi-fi-con">
                    <div className="battery-svg"/>
                    <div className="wifi-svg"/>
                    <div className="search-svg"/>
                    <button className="switch">
                        <button className="switch-svg"/>
                        <div className="switch-content">
                            <div className="switch-container1">
                                    <div className="inner-con inner-con1">
                                        <div className="invisible-con1">
                                            <div className="blue-circle">
                                                <div className="wifi-svg"/>
                                            </div>
                                            <div className="circle-text-con">
                                                <p className="head-tex">Wi-Fi</p>
                                                <p className="tex-bottom">Home</p>
                                            </div>
                                        </div>
                                        <div className="invisible-con1">
                                            <div className="blue-circle">
                                                <div className="bluetooth-svg"/>
                                            </div>
                                            <div className="circle-text-con">
                                                    <p className="head-tex">Bluetooth</p>
                                            </div>
                                        </div>
                                        <div className="invisible-con1">
                                            <div className="blue-circle">
                                                <div className="hotspot-svg"/>
                                            </div>
                                            <div className="circle-text-con">
                                                <p className="head-tex">AirDrop</p>
                                                <p className="tex-bottom">Contacts Only</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="second-inner">
                                        <div className="inner-con inner-con2">
                                            <div className="blue-circle">
                                                <div className="disturb-svg"/>
                                            </div>
                                            <div className="circle-text-con">
                                                <p className="head-tex">Do Not</p>
                                                <p className="head-tex">Disturb</p>
                                            </div>
                                        </div>
                                        <div className="third-inner">
                                            <div className="inner-con inner-con3">
                                                <div className="britness-img"/>
                                                <div className="circle-text-con">
                                                    <p className="head-tex kbtex">Keyboard</p>
                                                    <p className="head-tex kbtex">Brightness</p>
                                                </div>
                                            </div>
                                            <div className="inner-con inner-con3">
                                                <div className="airplay-svg"/>
                                                <div className="circle-text-con">
                                                    <p className="head-tex kbtex">AirPlay</p>
                                                    <p className="head-tex kbtex">Display</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="inner-con switch-container2">
                                <p className="head-tex">Display</p>
                                <div className="br-slider">
                                        <div className="bright-svg"/>
                                    <input className="range" type="range"  min="0" max="100"/>
                                </div>
                            </div>
                            <div className="inner-con switch-container2">
                                <p className="head-tex">Sound</p>
                                <div className="br-slider">
                                    <div className="volume-svg"/>
                                    <input className="range vol-wid" type="range" min="0" max="100"/>
                                    <div className="blue-circle airs-circle">
                                        <div className="airvolume-svg"/>
                                    </div>
                                </div>
                            </div>
                            <div className="inner-con switch-container2"/>
                        </div>
                    </button>
                    <p className="time"><Clock /></p>
                </div>
            </div>
            <div className="screen-container">
                <div className="app-column">
                    <button onDoubleClick={aboutkshitij} className="app-img-txt-con">
                        <div className="app-img user-img center-img" />
                        <p className="app-txt">About Kshitij</p>
                    </button>
                    <button onDoubleClick={safari} className="app-img-txt-con">
                        <div className="app-img safari-img center-img" />
                        <p className="app-txt">Safari</p>
                    </button>
                    <button className="app-img-txt-con">
                        <div className="app-img message-img center-img" />
                        <p className="app-txt">Send Message</p>
                    </button>
                    <button onDoubleClick={kmail} className="app-img-txt-con">
                        <div className="app-img mail-img center-img" />
                        <p className="app-txt">Send Mail</p>
                    </button>
                </div>
            </div>
            <div className="bt-con">
                <div className="bottom-container">
                    <div className="bt-inner-con">
                        <button className="app-img finder-img"/>
                        <div onClick={safari} className="app-img safari-img"/>
                        <div className="section-border"/>
                        <button onClick={aboutkshitij} className="app-img user-img"/>
                        <div className="app-img linkedin-img"/>
                        <div className="app-img message-img"/>
                        <div onClick={kmail} id='kmail' className="app-img mail-img"/>
                        <div className="app-img map-img"/>
                        <div className="section-border"/>
                        <div className="app-img appstore-img"/>
                        <div className="app-img settings-img"/>
                        <div className="section-border"/>
                        <div className="app-img recyclebin-img"/>
                    </div>
                </div>
            </div>
            <div id="extra"/>
        </>
    )
}

export default Main
