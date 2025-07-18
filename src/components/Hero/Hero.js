import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeroSection = styled.section`
  padding: 0;
  padding-top: 80px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100vw; /* Full viewport width */
  max-width: 100%; /* Prevent horizontal overflow */
`;

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  padding-right: 50px;

  @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
    padding-right: 0;
    margin-bottom: 50px;
  }
`;

// const HeroImage = styled.div`
//   flex: 1;
//   text-align: center;

//   img {
//     max-width: 80%;
//     border-radius: 20px;
//     box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
//   }
// `;

const HeroTitle = styled(motion.h1)`
  font-size: 48px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.dark};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 36px;
  }
`;

const HeroSubtitle = styled(motion.h2)`
  font-size: 28px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.dark};

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    font-size: 24px;
  }
`;

const Highlight = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

const HeroText = styled(motion.p)`
  font-size: 18px;
  margin-bottom: 30px;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 15px;

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

const Button = styled(Link)`
  display: inline-block;
  padding: 12px 28px;
  border-radius: 8px;
  font-weight: 500;
  transition: ${(props) => props.theme.transition};
  border: ${(props) =>
    props.primary ? "none" : `1px solid ${props.theme.colors.primary}`};
  background-color: ${(props) =>
    props.primary ? props.theme.colors.primary : "transparent"};
  color: ${(props) => (props.primary ? "white" : props.theme.colors.primary)};

  &:hover {
    background-color: ${(props) =>
      props.primary ? "#4c30c0" : props.theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
    text-align: center;
  }
`;

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const tick = useCallback(() => {
    const textArray = ["Software Engineer"];
    const period = 2000;

    let i = loopNum % textArray.length;
    let fullText = textArray[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed((prevSpeed) => prevSpeed / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  }, [text, isDeleting, loopNum]);

  useEffect(() => {
    const ticker = setTimeout(() => {
      tick();
    }, typingSpeed);

    return () => clearTimeout(ticker);
  }, [text, isDeleting, typingSpeed, tick]);

  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I'm <Highlight>Anmol Singh Chhabra</Highlight>
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I'm a <Highlight>{text}</Highlight>
            <span className="cursor">|</span>
          </HeroSubtitle>
          <HeroText
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Welcome to my portfolio website. I create amazing digital
            experiences.
          </HeroText>
          <ButtonContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button to="/projects" primary>
              View My Work
            </Button>
            <Button to="/contact">Contact Me</Button>
          </ButtonContainer>
        </HeroContent>
        {/* <HeroImage>
          <motion.img 
            src="/profile.png" 
            alt="Profile" 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </HeroImage> */}
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero;
