import React from 'react';
import styled, { DefaultTheme } from 'styled-components';
import { useTheme } from 'styled-components';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  width?: string;
}

interface InputWrapperProps {
  width?: string;
  theme: DefaultTheme;
}

const InputWrapper = styled.div<InputWrapperProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: ${(props) => props.width || '100px'};
  min-width: 200px;
  height: 40px;
  background-color: ${(props) => props.theme?.colors?.white};
  border-radius: 10px;
  padding: 0 10px;
  border: 1.5px solid ${(props) => props.theme?.colors?.grey[200]};
  transition: background-color 0.3s ease;

  &:hover {
    border: ${(props) => props.theme?.colors?.grey[200]};
  }

  &:focus-within {
    border: 1.5px solid ${(props) => props.theme?.colors?.primary};
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0;
    font-size: inherit;
    color: ${(props) => props.theme?.colors?.grey[200]};
    transition: color 0.3s ease;

    &::placeholder {
      color: ${(props) => props.theme?.colors?.grey[200]};
      font-weight: bold;
    }
  }
};
`

const Prefix = styled.span`
  margin-right: 8px;
  color: ${(props) => props.theme?.colors?.grey[200]};
  margin-top: 2px;
`;

const Suffix = styled.span`
  margin-left: 8px;
`;

const Input: React.FC<InputProps> = ({
  prefixIcon,
  suffixIcon,
  width,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <InputWrapper width={width} theme={theme}>
      {prefixIcon && <Prefix>{prefixIcon}</Prefix>}
      <input {...rest} />
      {prefixIcon && <Suffix>{suffixIcon}</Suffix>}
    </InputWrapper>
  );
};

export default Input;
