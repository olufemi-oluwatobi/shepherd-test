import React from "react";
import styled from "styled-components";
import { useTheme } from "styled-components";

const DivWrapper = styled.div`
  width: 100%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    /* Adjust styles for mobile screens */
    width: 100vw;
  }

  .lower_section {
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  }
`;

const Image = styled.img`
  width: 100%;
  height: 20%;
  max-height: 200px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  object-fit: cover;
`;

const MainText = styled.h1`
  margin: 0;
  font-size: 24px;
  margin-bottom: 10px;
`;

const SupportingText = styled.p`
  margin-top: 10px;
  font-size: 18px;
  color: ${({theme}) => theme?.colors?.grey[300]};
  width: 80%;
  text-align: center;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 20px;
  margin-top:30px;
  width: 100%;
  border-radius: 20px;
  background-color: #2196f3;
  color: #fff;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;

const ContactUs = ({onClick}: {onClick: () => void}) => {
  const theme = useTheme()
  return (
    <DivWrapper>
      <Image
        src="https://images.unsplash.com/photo-1684868623430-aa353b5da28d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
        alt="Background Image"
      />
      <div className="lower_section">
        <MainText>Cant Find Your Desired Tutor</MainText>
        <SupportingText>Send us a mail we'll find you the perfect match</SupportingText>
        <Button onClick={() => onClick()}>Send Email</Button>
      </div>
    </DivWrapper>
  );
};

export default ContactUs;
