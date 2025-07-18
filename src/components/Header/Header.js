import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 15px 0;
  background-color: ${(props) =>
    props.$scrolled ? props.theme.colors.headerBg : "transparent"};
  box-shadow: ${(props) =>
    props.$scrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};
  transition: ${(props) => props.theme.transition};
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.dark};
  text-decoration: none;
`;

const NavLinks = styled.nav`
  display: flex;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.background};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s ease, visibility 0.3s ease;
    opacity: ${(props) => (props.$isOpen ? "1" : "0")};
    visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
    z-index: 999;
  }
`;

const NavItem = styled.li`
  list-style: none;
  margin: 0 15px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin: 20px 0;
    font-size: 24px;
  }
`;

const NavLink = styled(Link)`
  font-weight: 500;
  position: relative;
  color: ${(props) =>
    props.$active ? props.theme.colors.primary : props.theme.colors.dark};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  &::after {
    content: "";
    position: absolute;
    width: ${(props) => (props.$active ? "100%" : "0")};
    height: 2px;
    background-color: ${(props) => props.theme.colors.primary};
    bottom: -5px;
    left: 0;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => props.theme.colors.dark};
  z-index: 1000;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: block;
  }
`;

const ThemeToggleIcon = styled.div`
  cursor: pointer;
  font-size: 20px;
  color: ${(props) => props.theme.colors.dark};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 24px;
    margin-right: 15px;
    z-index: 1000;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const Header = ({ toggleTheme, currentTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <HeaderContainer $scrolled={isScrolled}>
      <NavContainer>
        <Logo to="/">Portfolio</Logo>

        <NavLinks $isOpen={isOpen}>
          <NavItem>
            <NavLink
              to="/"
              $active={location.pathname === "/"}
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/about"
              $active={location.pathname === "/about"}
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/projects"
              $active={location.pathname === "/projects"}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/contact"
              $active={location.pathname === "/contact"}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </NavItem>
        </NavLinks>

        <RightSection>
          <ThemeToggleIcon onClick={toggleTheme}>
            {currentTheme === "light" ? <FaMoon /> : <FaSun />}
          </ThemeToggleIcon>

          <MenuButton onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MenuButton>
        </RightSection>
      </NavContainer>
    </HeaderContainer>
  );
};

export default Header;
