import styled from "styled-components";

const ToggleContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ToggleButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  i {
    transition: transform 0.5s ease;
  }
`;

const ThemeToggle = ({ toggleTheme, currentTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme}>
      <ToggleButton aria-label="Toggle theme">
        {currentTheme === "light" ? (
          <i className="fas fa-moon"></i>
        ) : (
          <i className="fas fa-sun"></i>
        )}
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;
