import React from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-awesome-reveal";
import "./Contact.css";
import { greeting,contact } from "../../portfolio";
import AddressImg from "./AddressImg";

const ContactData = contact.contactSection;
// const blogSection = contactPageData.blogSection;
const addressSection = contact.addressSection;

type Theme = {
  text: string;
  secondaryText: string;
  [key: string]: string;
};

interface ContactProps {
  theme: Theme;
  onToggle?: () => void;
}

const Contact: React.FC<ContactProps> = ({ theme }) => {
  return (
    <div className="contact-main" id="contact">
      <div className="basic-contact">
        <Fade direction="right" duration={1000}>
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <div className="contact-img">
                    <img
                    style={{
                        width: "100%",
                        height: "100%",
                        // transform: "scale(0.9)",
                    }}
                    src={`/images/dan/${ContactData.profile_image_path}`}
                    alt={"degree-logo"}
                    />
                </div>
            </div>
            <div className="contact-heading-text-div">
              <h1 className="contact-heading-text" style={{ color: theme.text }}>
                {ContactData.title}
              </h1>
              <p className="contact-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                {ContactData.description}
              </p>
              <SocialMedia theme={theme} />
              <div className="resume-btn-div">
                <Button
                  text="See My Resume"
                  newTab={true}
                  href={greeting.resumeLink}
                  theme={theme}
                />
              </div>
            </div>
          </div>
        </Fade>

        <Fade direction="left" duration={1000} >
          <div className="address-heading-div">
            
            <div className="address-heading-text-div">
              <h1 className="address-heading-text" style={{ color: theme.text }}>
                {addressSection.title}
              </h1>
              <p className="contact-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
                {addressSection.subtitle}
              </p>
              
              <div className="address-btn-div">
                <Button
                  text="Visit on Google Maps"
                  newTab={true}
                  href={addressSection.location_map_link}
                  theme={theme}
                />
              </div>
            </div>
            <div className="contact-heading-img-div">
              <AddressImg theme={theme} />
            </div>
          </div>
        </Fade>
      </div>

      {/* <Footer theme={theme} onToggle={onToggle} /> */}
      {/* <TopButton theme={theme} /> */}
    </div>
  );
};

export default Contact;
