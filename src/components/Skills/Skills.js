import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
// Import React Icons
import { 
  FaHtml5, FaJs, FaReact, FaVuejs, 
  FaNodeJs, FaDatabase, 
  FaFigma, FaPaintBrush
} from 'react-icons/fa';
import { SiExpress, SiMongodb, SiAdobexd, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si';

const SkillsSection = styled.section`
  padding: 100px 0;
`;

const SkillsContainer = styled.div`
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  width: 100%;
  
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled.div`
  background-color: ${props => props.theme.colors.cardBg};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, ${props => props.theme.name === 'dark' ? '0.3' : '0.1'});
  transition: ${props => props.theme.transition};
  width: 100%;
  overflow: hidden;
`;

const SkillTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
  color: ${props => props.theme.colors.dark};
  display: flex;
  align-items: center;
`;

const SkillIcon = styled.div`
  min-width: 24px;
  height: 24px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  font-size: 24px;
  
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    min-width: 20px;
    height: 20px;
    font-size: 20px;
  }
`;

const SkillItem = styled.div`
  margin-bottom: 15px;
`;

const SkillName = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  color: ${props => props.theme.colors.text};
  width: 100%;
  
  span {
    font-weight: 500;
    color: ${props => props.theme.colors.dark};
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const SkillBar = styled.div`
  height: 8px;
  background-color: ${props => props.theme.name === 'dark' ? '#333' : '#e3e3e3'};
  border-radius: 5px;
  overflow: hidden;
`;

const SkillProgress = styled.div`
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 5px;
  width: ${props => props.width}%;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  
  const skillsData = [
    {
      category: 'Frontend Development',
      icon: <FaReact />,
      skills: [
        { name: 'HTML/CSS', level: 90, icon: <FaHtml5 /> },
        { name: 'JavaScript', level: 85, icon: <FaJs /> },
        { name: 'React', level: 80, icon: <FaReact /> },
        { name: 'Vue.js', level: 75, icon: <FaVuejs /> },
      ],
    },
    {
      category: 'Backend Development',
      icon: <FaNodeJs />,
      skills: [
        { name: 'Node.js', level: 75, icon: <FaNodeJs /> },
        { name: 'Express', level: 70, icon: <SiExpress /> },
        { name: 'MongoDB', level: 65, icon: <SiMongodb /> },
        { name: 'SQL', level: 60, icon: <FaDatabase /> },
      ],
    },
    {
      category: 'Design',
      icon: <FaPaintBrush />,
      skills: [
        { name: 'Figma', level: 85, icon: <FaFigma /> },
        { name: 'Adobe XD', level: 75, icon: <SiAdobexd /> },
        { name: 'Photoshop', level: 70, icon: <SiAdobephotoshop /> },
        { name: 'Illustrator', level: 65, icon: <SiAdobeillustrator /> },
      ],
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  
  return (
    <SkillsSection id="skills">
      <SkillsContainer>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </SectionTitle>
        <SkillsGrid
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {skillsData.map((category, index) => (
            <SkillCard key={index} variants={itemVariants}>
              <SkillTitle>
                <SkillIcon>{category.icon}</SkillIcon>
                {category.category}
              </SkillTitle>
              <SkillsList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem key={skillIndex}>
                    <SkillName>
                      <span>
                        <SkillIcon>{skill.icon}</SkillIcon>
                        {skill.name}
                      </span>
                      {skill.level}%
                    </SkillName>
                    <SkillBar>
                      <SkillProgress width={skill.level} />
                    </SkillBar>
                  </SkillItem>
                ))}
              </SkillsList>
            </SkillCard>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills; 