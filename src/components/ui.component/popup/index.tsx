import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const slideUpAnimation = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const slideDownAnimation = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

const PopUpWrapper = styled.div<{ isMobile: boolean; isOpen: boolean }>`
  position: fixed;
  bottom: 0;
  animation: ${({ isOpen }) => (isOpen ? slideUpAnimation : slideDownAnimation)};
  dispalay: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  ${({ isMobile }) => (isMobile ? 'left: 50%; transform: translateX(-50%);' : 'right: 0.5%;')}
  animation: ${({ isOpen }) => (isOpen ? slideUpAnimation : slideDownAnimation)} 0.3s ease-in-out;
  z-index: 999;
`;

interface PopUpProps {
  isMobile: boolean;
  isOpen: boolean;
  children: React.ReactNode;
}

const PopUp: React.FC<PopUpProps> = ({ isMobile, isOpen, children }) => {
  return isOpen ? <PopUpWrapper isMobile={isMobile} isOpen={isOpen}>{children}</PopUpWrapper>: <></>;
};

export default PopUp;
