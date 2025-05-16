import React from 'react';
import styled from 'styled-components';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

const HomeContainer = styled.div`
  padding-top: 0;
  width: 100vw;
  max-width: 100%;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  
  /* Make sure all children are contained */
  & > * {
    max-width: 100%;
    width: 100%;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </HomeContainer>
  );
};

export default Home; 