import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import projectImage from '../../assets/project.png';

const ProjectsSection = styled.section`
  background-color: ${props => props.theme.colors.sectionBg};
  padding: 100px 0;
`;

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
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

const ProjectGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.cardBg};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, ${props => props.theme.name === 'dark' ? '0.3' : '0.1'});
  transition: ${props => props.theme.transition};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, ${props => props.theme.name === 'dark' ? '0.4' : '0.15'});
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectInfo = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${props => props.theme.colors.dark};
`;

const ProjectCategory = styled.p`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  margin-bottom: 15px;
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.text};
  margin-bottom: 20px;
  font-size: 14px;
`;

const ProjectLink = styled.a`
  display: inline-block;
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.colors.primary};
    bottom: -2px;
    left: 0;
    transition: ${props => props.theme.transition};
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Projects = () => {
  // Project data
  const projects = [
    {
      id: 1,
      title: 'My Portfolio',
      category: 'Frontend Web Development',
      description: 'Developed a sleek personal portfolio using JavaScript and React, showcasing projects and skills. Added light/dark mode toggle and optimized for responsiveness and smooth navigation across devices.',
      showLink: true,
      link: 'https://anmol-me.netlify.app/'
    },
    {
      id: 2,
      title: 'My AI Chatbot',
      category: 'Full-Stack AI Application',
      description: 'Developed a fully responsive AI chatbot integrated with GPT-4o, featuring a React frontend and Python Flask backend. The system allows users to upload PDF files and delivers contextual insights by analyzing document content.',
      showLink: true,
      link: 'https://my-ai-chatbot-mauve.vercel.app/'
    },
    {
      id: 3,
      title: 'Lactalisca Shipment Tracker',
      category: 'Full Stack Web Application',
      description: 'Built a full-stack delivery management system for Lactalis with real-time shipment tracking and an admin portal for uploading Excel-based shipment data, streamlining logistics and improving supply chain transparency.',
      showLink: false,
      link: 'https://lactalis-tracker-app-lactalisca.vercel.app/'
    }
  ];

  return (
    <ProjectsSection id="projects">
      <ProjectsContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </SectionTitle>
        
        <ProjectGrid
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ProjectImage>
                <img src={projectImage} alt={project.title} />
              </ProjectImage>
              <ProjectInfo>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectCategory>{project.category}</ProjectCategory>
                <ProjectDescription>{project.description}</ProjectDescription>
                {project.showLink && <ProjectLink href={project.link}>View Project</ProjectLink>}
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects; 