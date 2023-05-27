import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { AiOutlineBell } from 'react-icons/ai';

export interface NotificationProps extends React.HTMLAttributes<HTMLDivElement> {
  hasNotification?: boolean;
}

const NotificationWrapper = styled.div<NotificationProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 2px solid ${({ theme }) => theme.colors.grey[100]};
  border-radius: 50%;
  padding: 2px;
  background-color: ${(props) => (props.hasNotification ? '#ff0000' : 'transparent')};
`;

const BellIcon = styled(AiOutlineBell)`
  color: ${({ theme }) => theme.colors.grey[300]};
`;

const Notification: React.FC<NotificationProps> = ({ hasNotification, ...rest }) => {
  const theme = useTheme()
  return (
    <NotificationWrapper theme={theme} {...rest} hasNotification={hasNotification}>
      <BellIcon  size={25} />
    </NotificationWrapper>
  );
};

export default Notification;
