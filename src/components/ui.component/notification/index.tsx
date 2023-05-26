import React from 'react';
import styled from 'styled-components';
import { AiOutlineBell } from 'react-icons/ai';

export interface NotificationProps {
  hasNotification?: boolean;
}

const NotificationWrapper = styled.div<NotificationProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border: 2px solid #333;
  border-radius: 50%;
  padding: 2px;
  background-color: ${(props) => (props.hasNotification ? '#ff0000' : 'transparent')};
`;

const BellIcon = styled(AiOutlineBell)`
  color: #333;
`;

const Notification: React.FC<NotificationProps> = ({ hasNotification }) => {
  return (
    <NotificationWrapper hasNotification={hasNotification}>
      <BellIcon />
    </NotificationWrapper>
  );
};

export default Notification;
