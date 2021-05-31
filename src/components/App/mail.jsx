import React, { Component } from 'react';
import Draggable from "react-draggable";
import $ from 'jquery';
import send from '../img/extra/send.svg';
import ReactGA from 'react-ga';
import emailjs from 'emailjs-com';

export class Kmail extends Component {

    sendMessage = async () => {
        let name = $("#sender-name").val();
        let subject = $("#sender-subject").val();
        let message = $("#sender-message").val();

        name = name.trim();
        subject = subject.trim();
        message = message.trim();

        let error = false;

        if (name.length === 0) {
            $("#sender-name").val('');
            $("#sender-name").attr("placeholder", "Name must not be Empty!");
            error = true;
        }

        if (message.length === 0) {
            $("#sender-message").val('');
            $("#sender-message").attr("placeholder", "Message must not be Empty!");
            error = true;
        }
        if (error) return;

        this.setState({ sending: true });

        const serviceID = "default_service";
        const templateID = "template_n7qe36x";
        const templateParams = {
            'name': name,
            'subject': subject,
            'message': message,
        }

        emailjs.send(serviceID, templateID, templateParams, 'user_NcpQ9wLb9uAc1m13MoI2X')
            .then((response) => {
               console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
               console.log('FAILED...', err);
            });


        ReactGA.event({
            category: "Send Message",
            action: `${name}, ${subject}, ${message}`
        });

    }
    render() {
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
                <div className="kmail-container">
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
                            <div onClick={this.sendMessage} className="sendbutton center">
                                <img src={send}/>
                                <p>Send</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-main-container">
                        <div className="to-container">
                            <p>To : <span>contact@kshitijnariya.com</span></p>
                            <p className="bnone">Subject : <input id="sender-subject" type="text" placeholder="Write subject..."/></p>
                        </div>
                        <div className="to-container">
                            <p className={"bnone"}>From : <input id="sender-name" type="email" placeholder="abc@gmail.com"/></p>
                        </div>
                        <div className="to-container">
                            <p className="bnone"><textarea id="sender-message" placeholder="Type Message Here..."/></p>
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
function close() {
    const safaricon = document.querySelector('.safari-container');
    safaricon.style.display = "none";
}

 export default Kmail;

export const displayKmail = () => {
    return <Kmail> </Kmail>;
}