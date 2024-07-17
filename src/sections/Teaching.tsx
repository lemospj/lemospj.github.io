import React, { Component } from "react";

class Teaching extends Component {
    render() {
        return (
            <div>
                <h1>Teaching</h1>
                <h3>Temple University</h3>
                <p>
                    <ul>
                        <li>Fall 2023: Calculus I</li>
                    </ul>
                </p>
                <h3>University College London</h3>
                <p>
                    <ul>
                        <li>Spring 2021: Galois Representations of Elliptic Curves (LTCC course)</li>
                    </ul>
                </p>
                <h3>University of Warwick</h3>
                <p>
                    <ul>
                        <li>TA for Algebraic Number Theory</li>
                        <li>TA for Topics in Number Theory</li>
                        <li>Supervisor for 2nd year undergraduate students</li>
                    </ul>
                </p>
            </div>
        );
    }
}

export default Teaching;