import React from "react";

import "./Stacks.css";

const Stacks = (props) => {
	const { logo, title, proficiency } = props;

	return (
		<React.Fragment>
			<div className="stack">
                <div className="stack-container">
                    <div className="stack-logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="stack-description-container">
                        <div className="stack-title">{title}</div>
                        <div className="stack-description">{proficiency}</div>
                    </div>
                </div>
			</div>
		</React.Fragment>
	);
};

export default Stacks;
