import React from 'react';
import styled from 'styled-components';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  variant?: 'light-blue' | 'white';
}

const ButtonWrapper = styled.button<{ variant: 'light-blue' | 'white' }>`
  border:  ${(props) => (props.variant === 'light-blue' ? '2px solid #3b82f6' : 'none')};
  background-color: ${(props) => (props.variant === 'light-blue' ? '#3b82f6' : '#fff')};
  color: ${(props) => (props.variant === 'light-blue' ? '#fff' : '#3b82f6')};
  padding: 6px 18px;
  font-size: 14px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({ text, prefixIcon, suffixIcon, variant = 'light-blue', ...rest }) => {
  return (
    <ButtonWrapper {...rest} variant={variant}>
      {prefixIcon}
      <span>{text}</span>
      {suffixIcon}
    </ButtonWrapper>
  );
};

export default Button;
