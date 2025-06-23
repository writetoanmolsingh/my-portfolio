import styled from 'styled-components';
import { motion } from 'framer-motion';
import AboutImg from '../../assets/about.png';

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
              src={AboutImg}
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
              I’m Anmol Singh Chhabra, a Full Stack Developer with a strong foundation in building scalable, high-performance web applications. Proficient in modern technologies like React.js, Node.js, Next.js, and MongoDB, I specialize in creating responsive interfaces and efficient backend systems. I’ve also worked extensively with Google Cloud's Apigee X for API management and security.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              I’ve contributed to teams at Tech Mahindra, Jamsfy Technologies, and Physiz AgTech, leading projects on microservices migration, UI revamps, and serverless architecture. My freelance work includes building a shipment tracking system for Lactalis Canada, a responsive personal portfolio, and a GPT-4o-powered AI chatbot that processes PDFs to deliver insights.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I’m passionate about merging creativity with technology to solve real-world problems. I enjoy working with AI tools, prompt engineering, and crafting interactive applications that elevate user experience. Eager to learn and grow, I strive to stay at the forefront of web development and innovation.
            </motion.p>
          </AboutText>
        </AboutContent>
      </AboutContainer>
    </AboutSection>
  );
};

export default About; 