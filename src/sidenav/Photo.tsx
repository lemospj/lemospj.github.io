import React, { Component } from "react";
import myimg from "../assets/mypic.jpg";

class Photo extends Component {
    render() {
        return (
            <div className="photo">
                <img src={myimg} className="mypicture" alt="My picture" title="This is me" />
                <div className="name">Pedro Lemos</div>
            </div>
        );
    }
}

export default Photo;