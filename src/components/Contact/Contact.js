import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const ContactSection = styled.section`
  padding: 100px 0;
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 36px;
  margin-bottom: 50px;
  text-align: center;
  color: ${(props) => props.theme.colors.dark};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 80px;
    height: 4px;
    background-color: ${(props) => props.theme.colors.primary};
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 28px;
  }
`;

const ContactContent = styled.div`
  display: flex;
  gap: 50px;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

const ContactInfo = styled(motion.div)`
  flex: 1;
`;

const ContactForm = styled(motion.div)`
  flex: 1;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;

  svg {
    font-size: 24px;
    color: ${(props) => props.theme.colors.primary};
    margin-right: 20px;
    margin-top: 5px;
  }
`;

const ContactItemContent = styled.div`
  h3 {
    margin-bottom: 5px;
    color: ${(props) => props.theme.colors.dark};
  }

  p {
    color: ${(props) => props.theme.colors.text};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  transition: ${(props) => props.theme.transition};

  &:hover {
    transform: translateY(-5px);
    background-color: #4c30c0;
  }

  svg {
    font-size: 18px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 12px 15px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 16px;
  transition: ${(props) => props.theme.transition};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(94, 59, 238, 0.2);
  }
`;

const TextArea = styled.textarea`
  padding: 12px 15px;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  font-family: ${(props) => props.theme.fonts.main};
  font-size: 16px;
  transition: ${(props) => props.theme.transition};
  height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(94, 59, 238, 0.2);
  }
`;

const SubmitButton = styled.button`
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 500;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  cursor: pointer;
  transition: ${(props) => props.theme.transition};

  &:hover {
    background-color: #4c30c0;
    transform: translateY(-3px);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to a server

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // Show success message (you can replace this with a better UI notification)
    alert("Thank you for your message! I will get back to you soon.");
  };

  return (
    <ContactSection id="contact">
      <ContactContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </SectionTitle>

        <ContactContent>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactItem>
              <FaEnvelope />
              <ContactItemContent>
                <h3>Email</h3>
                <p>writetoanmolsingh@gmail.com</p>
              </ContactItemContent>
            </ContactItem>

            <ContactItem>
              <FaPhone />
              <ContactItemContent>
                <h3>Phone</h3>
                <p>+91-8400208243</p>
              </ContactItemContent>
            </ContactItem>

            <ContactItem>
              <FaMapMarkerAlt />
              <ContactItemContent>
                <h3>Location</h3>
                <p>Lucknow, Uttar Pradesh, India</p>
              </ContactItemContent>
            </ContactItem>

            <SocialLinks>
              <SocialLink
                href="https://www.linkedin.com/in/anmoljustwent/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </SocialLink>
              <SocialLink
                href="https://github.com/writetoanmolsingh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/barbecuedwing"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>

          <ContactForm
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <TextArea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <SubmitButton type="submit">Send Message</SubmitButton>
            </Form>
          </ContactForm>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
