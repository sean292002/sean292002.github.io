import React from "react";

import SkillDetail from "./SkillDetail";

import INFO from "../../constants/user";

import "./Skills.css";

const Skills = () => {
	return (
		<section id="skills" className="container">
			<div className="section-title">
				<h4 className="header-sub-title">Skills</h4>
				<h5 className="header-description-title">- Lorem Ipsum -</h5>
			</div>
			<div className="all-skills-container">
				{INFO.skills.map((skill, index) => (
					<div className="all-skills-project" key={index}>
						<SkillDetail
							title={skill.title}
							stacks={skill.stacks}
						/>
					</div>
				))}
			</div>
			
		</section>
	);
};

export default Skills;
