import styled from "styled-components";

// This should be added in GlobalStyles of styled-components
// and use the ThemeProvider
const DEFAULT_THEMES = {
  success: "#43a047",
  error: "#d32f2f",
  info: "#303f9f",
  warning: "#ffa000",
};

export const SnackbarContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  z-index: 1400;
  position: fixed;
  width: 300px;
  max-width: 100%;
  box-sizing: border-box;
  max-height: 100%;
  flex-direction: column;
  bottom: 14px;
  left: 14px;
`;

export const CustomSnackbar = styled.div`
  background-color: ${({ variant }) =>
    DEFAULT_THEMES[variant] || DEFAULT_THEMES.info};
  color: white;
  padding: 14px 26px;
  margin: 5px;
  display: flex;
  justify-content: space-between;
  animation-delay: 0s,
    ${({ autoHideDuration }) => `${autoHideDuration - 300}ms`};
  animation-duration: 500ms, 700ms;
  animation-name: transition-left-right, transition-right-left;

  @keyframes transition-left-right {
    from {
      transform: translateX(-200%);
    }
    to {
      transform: translateX(0%);
    }
  }
  @keyframes middle {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(0%);
    }
  }
  @keyframes transition-right-left {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-200%);
    }
  }
`;

export const IconContainer = styled.div`
  padding: 0px 10px 0px 10px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChildrenContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoContainer = styled.div`
  display: flex;
`;

export const IconButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: ${({ size }) => size || "15px"};
  overflow: hidden;
  position: relative;
  border-radius: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: box-shadow 0.2s;
  :focus {
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2),
      0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
  }

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: white;
    opacity: 0;
    transition: opacity 0.2s;
  }
  :after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    padding: 50%;
    width: 20px;
    height: 20px;
    background-color: white;
    opacity: 0;
    transform: translate(-50%, -50%) scale(1);
    transition: opacity 1s, transform 0.5s;
  }
  :hover::before {
    opacity: 0.05;
  }
  :focus::before {
    opacity: 0.08;
  }
  :hover:focus::before {
    opacity: 0.1;
  }
  :active::after {
    opacity: 0.32;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0s;
  }
`;
