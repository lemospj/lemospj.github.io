import React, { Component } from "react";

class Projects extends Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <h2>Data science and machine learning</h2>
                <h3>New York City collision rates</h3>
                <p>As part of the Spring 2024 Erd&ouml;s Institute Data Science bootcamp, I completed a joint data science project on traffic management in New York City.
                    The goal was to understand which road features contribute the most to traffic collisions. My team produced a predictive model that estimates the collision
                    rate of a road segment in New York City based on several road features like the road width, length, number of trees along the road, existence of speed humps, etc.
                    This project's GitHub repo is <a href="https://github.com/jacobvhook/road-speed" target="_blank" rel="noopener noreferrer">here</a>.
                </p>
            </div>
        );
    }
}

export default Projects;