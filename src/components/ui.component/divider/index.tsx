import React from 'react';
import styled from 'styled-components';

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  position?: 'horizontal' | 'vertical';
  length?: string;
}

const DividerWrapper = styled.div<DividerProps>`
  ${(props) => (props.position === 'vertical' ? 'width' : 'height')}: ${(props) => props.length || '1px'};
  background-color: ${(props) => props.color || '#000'};
`;

const Divider: React.FC<DividerProps> = ({ color, position, length, ...rest }) => {
  return <DividerWrapper color={color} position={position} length={length} {...rest} />;
};

export default Divider;
