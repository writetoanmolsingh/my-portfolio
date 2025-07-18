import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.colors.footerBg};
  color: ${(props) => props.theme.colors.footerText};
  padding: 50px 0 20px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const FooterSection = styled.div`
  margin-bottom: 30px;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 3px;
    background-color: ${(props) => props.theme.colors.primary};
    bottom: -8px;
    left: 0;
  }
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 15px;
  display: flex;
  align-items: center;

  a {
    color: ${(props) => props.theme.colors.footerText};
    text-decoration: none;
    transition: ${(props) => props.theme.transition};

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  svg {
    margin-right: 10px;
    font-size: 16px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${(props) => props.theme.colors.footerText};
  font-size: 18px;
  transition: ${(props) => props.theme.transition};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: #fff;
    transform: translateY(-3px);
  }
`;

const FooterBottom = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
  margin-top: 30px;
  font-size: 14px;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Function to handle scroll to top when clicking links
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterTitle>About Me</FooterTitle>
          <p>
            I'm a passionate web developer focused on creating beautiful and
            functional websites.
          </p>
          <SocialLinks>
            <SocialIcon
              href="https://github.com/writetoanmolsingh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/anmoljustwent/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </SocialIcon>
            <SocialIcon
              href="https://www.instagram.com/barbecuedwing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <Link to="/" onClick={handleLinkClick}>
                Home
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="/projects" onClick={handleLinkClick}>
                Projects
              </Link>
            </FooterLink>
            <FooterLink>
              <Link to="/contact" onClick={handleLinkClick}>
                Contact
              </Link>
            </FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact Info</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <FaEnvelope />
              <a href="mailto:writetoanmolsingh@gmail.com">
                writetoanmolsingh@gmail.com
              </a>
            </FooterLink>
            <FooterLink>
              <FaPhone />
              <a href="tel:+1234567890">+91-8400208243</a>
            </FooterLink>
            <FooterLink>
              <FaMapMarkerAlt />
              <span>Lucknow, Uttar Pradesh, India</span>
            </FooterLink>
          </FooterLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; {currentYear} Your Portfolio. All Rights Reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
