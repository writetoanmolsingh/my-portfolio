import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  background-color: ${props => props.theme.colors.sectionBg};
`;

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const AboutContent = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

const AboutImage = styled.div`
  flex: 1;
  
  img {
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.lg}) {
    margin-bottom: 30px;
  }
`;

const AboutText = styled.div`
  flex: 1;
  
  p {
    margin-bottom: 20px;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 36px;
  margin-bottom: 50px;
  text-align: center;
  color: ${props => props.theme.colors.dark};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 4px;
    background-color: ${props => props.theme.colors.primary};
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    font-size: 28px;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </SectionTitle>
        <AboutContent>
          <AboutImage>
            <motion.img 
              src="/about.png" 
              alt="About Me" 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          </AboutImage>
          <AboutText>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              I'm a passionate web developer and designer with a strong focus on creating beautiful, functional, and user-friendly websites. With several years of experience in the field, I've developed a keen eye for detail and a love for clean, efficient code.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              My journey in web development started when I was in college, and since then, I've been constantly learning and improving my skills. I specialize in front-end development, but I'm also comfortable working with back-end technologies.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              When I'm not coding, you can find me exploring new design trends, learning new technologies, or enjoying outdoor activities. I believe in continuous learning and always strive to stay updated with the latest industry standards and best practices.
            </motion.p>
          </AboutText>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 