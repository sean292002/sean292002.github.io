import "./About.css";
import iconImage from "../../images/logo.png";
import fileResume from "../../constants/Sean_Wiryadi_Resume.pdf";
import fileTranscript from "../../constants/Sean_Wiryadi_Transcript.pdf";
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';
import { RiFile4Fill, RiGithubFill, RiGoogleFill, RiLinkedinFill, RiTreasureMapFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import INFO from "../../constants/user";
import React from "react";

export const About = () => {
  return (
    <section id="about" className="container">
      <div className="section-title">
        <h4 className="header-sub-title">About</h4>
        {/* <h5 className="header-description-title">- Lorem Ipsum -</h5> */}
      </div>
      <div className="container-about">
        <div className="about-logo">
          {INFO.socials.map((link, index) => (
            <Link key={index} to={link.url} target="_blank">
              {React.createElement(link.icon, { className: "social-icon" })}
            </Link>
          ))}
        </div>
        <div className="about-right">
          <img src={iconImage} alt="" />
        </div>
        <div className="about-left">
          <span className="purple-text">
            ✋Sean Wiryadi{" "}
            <span className="purple-smoke-text">- Introduction</span>{" "}
          </span>
          <p className="gray-text">
            Hello! I’m Sean Wiryadi, a Data Science major with a minor in Business Studies at New York University, graduating in May 2024. Originally from Jakarta, Indonesia, I’ve also had the unique opportunity to call Singapore and New York my homes, enriching my perspective on the global business landscape.

            Growing up in these diverse cultures has not only broadened my worldview but also intensified my fascination with business. I find the intersection of my analytical skills in data science and my passion for business intriguing, looking forward to integrating these fields in my future endeavors.

            Apart from academics, I'm an avid soccer enthusiast, a devoted dog lover, and a self-proclaimed food enthusiast. Whether it’s playing a fierce match on the soccer field or watching an exhilarating Champions League game, I believe in living my passions to the fullest. The time spent with my favorite four-legged friends and exploring New York’s diverse culinary scene further adds to the richness of my life.

            As I navigate through my journey at NYU and beyond, into the vibrant world where data, business, and diverse cultures intersect, I am excited to see where my passions and studies take me. {" "}
          </p>
          <div className="about-download">
            <Button className="resume-button" variant="contained" href={fileResume} download="Sean_Wiryadi_Resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </Button>
            <Button className="resume-button" variant="contained" href={fileTranscript} download="Sean_Wiryadi_Transcript.pdf" target="_blank" rel="noreferrer">
              Transcript
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
