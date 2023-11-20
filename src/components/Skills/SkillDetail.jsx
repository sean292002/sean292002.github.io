import React from "react";

import "./SkillDetail.css";
import Stacks from "./Stacks";

const SkillDetail = (props) => {
	const { title, description, stacks } = props;

	return (
		<React.Fragment>
			<div className="skill">
				<div className="skill-container">
					<div className="skill-title">{title}</div>
					<div className="skill-description">{description}</div>
					<div className="skill-stack-container">
						{stacks.map((stack, index) => (
							<div className="skill-stack-box" key={index}>
								<Stacks
									logo={stack.logo}
									title={stack.title}
									proficiency={stack.proficiency}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default SkillDetail;
