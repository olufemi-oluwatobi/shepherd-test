import React from 'react';
import styled from 'styled-components';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  variant?: 'light-blue' | 'white';
}

const ButtonWrapper = styled.button<{ variant: 'light-blue' | 'white' }>`
  border: 2px solid ${(props) => (props.variant === 'light-blue' ? '#3b82f6' : '#000')};
  background-color: ${(props) => (props.variant === 'light-blue' ? '#3b82f6' : '#fff')};
  color: ${(props) => (props.variant === 'light-blue' ? '#fff' : '#000')};
  padding: 6px 18px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ text, prefixIcon, suffixIcon, variant = 'light-blue' }) => {
  return (
    <ButtonWrapper variant={variant}>
      {prefixIcon}
      <span>{text}</span>
      {suffixIcon}
    </ButtonWrapper>
  );
};

export default Button;
