import React from "react";

import Project from "./Projects";

import INFO from "../../constants/user";

import "./Pastwork.css";

const Pastwork = () => {
	return (
		<section id="projects" className="container all-projects-container">
			<div className="section-title">
				<h4 className="header-sub-title">Pastworks</h4>
				<h5 className="header-description-title">- Lorem Ipsum -</h5>
			</div>
			<div className="all-projects-container">
				{INFO.projects.map((project, index) => (
					<div className="all-projects-project" key={index}>
						<Project
							logo={project.logo}
							img={project.img}
							title={project.title}
							description={project.description}
							linkText={project.linkText}
							link={project.link}
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Pastwork;
