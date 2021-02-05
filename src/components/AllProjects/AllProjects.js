import React from 'react';
import '../AllProjects/_AllProjects.scss'

const AllProjects = () => {
    return (
        <div className="all-projects">
            <div className="all-projects__card">
                <p className="all-projects__card-title">Front-end developer</p>
                <p className="all-projects__card-text">Company Acc</p>
                <p className="all-projects__card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, fugit obcaecati debitis quasi iste sed! Placeat, adipisci modi ea voluptatum suscipit atque accusamus perferendis eveniet, culpa, eos iure quam eum!</p>
                <p className="all-projects__card-text">Price: 1500$</p>
                <div className="all-projects__card-footer">
                    <button className="all-projects__card-footer-btn">Send</button>
                </div>
            </div>
        </div>
    )
}

export default AllProjects;