import "./Contact.css";

import INFO from "../../constants/user";
import ContactItem from "./ContactItem";

export const Contact = () => {
  return (
    <section id="contact" className="container">
      <div className="section-title">
        <h4 className="header-sub-title">Contact Me</h4>
        <h5 className="header-description-title">Let's Connect!</h5>
      </div>
      <div className="container-contact">
        <div className="contact-right">
          <h3 className="emoji-sub-title">
          💬 
          </h3>
          <h3 className="about-sub-title"> 
            I love to chat and connect with people, so please feel free to send me an email and start a conversation!
          </h3>
        </div>
        <div className="contact-left">
          {INFO.contacts.map((contact, index) => (
              <ContactItem
                type={contact.type}
                description={contact.description}
                url={contact.url}
                icon={contact.icon}
              />
          ))}
        </div>
      </div>
    </section>
  );
};
