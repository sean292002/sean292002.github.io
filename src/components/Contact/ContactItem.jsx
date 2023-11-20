import React from "react";
import "./ContactItem.css";

import { Link } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import { Button } from "@mui/material";

const ContactItem = (props) => {
	const { type, icon, description, url } = props;

	return (
		<React.Fragment>
				<Link to={url} target="_blank">
					<div className="contact-item-container">
						<div className="contact-item-left">
							<div className="contact-item-logo">
								<img src={icon} alt="logo" />
							</div>
						</div>
						<div className="contact-item-middle">
							<div className="contact-item-title">{type}</div>
							<div className="contact-item-description">{description}</div>
						</div>
						<div className="contact-item-right">
							<div className="contact-item-link">
								contact me
							</div>
						</div>
					</div>
				</Link>
		</React.Fragment>
	);
};

export default ContactItem;
