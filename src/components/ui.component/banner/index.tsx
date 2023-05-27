import React from 'react';
import { useTheme } from 'styled-components';
import styled, { keyframes } from 'styled-components';

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  mainText: string;
  supportingText: string;
  backgroundImage: string;
}

interface BannerWrapperProps {
  backgroundImage: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeroText = styled.div`
  text-align: center;
  font-size: 48px;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    text-align: left;
    font-size: 54px;
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const SupportingText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: 0;
  max-width: 100%;
  margin-top: 10px;
  line-height: 30px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    max-width: 30%;
  }
`;

const BannerWrapper = styled.div<BannerWrapperProps>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  display: flex;
  flex-direction: column;
  background-size: cover;
  position: relative;
  background-position: center;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  padding: 80px 20px;
  text-align: center;
  animation: ${fadeIn} 1s ease-in-out; /* Apply the fade-in animation */

  /* Dark overlay */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6); /* Adjust the opacity (0.6) to your liking */
    border-radius: 20px;
  }

  ${HeroText}, ${SupportingText} {
    position: relative;
    z-index: 1; /* Higher z-index to keep the texts above the overlay */
  }

  @media (min-width: 768px) {
    text-align: left;
    padding: 80px 60px;
  }
};`

const Banner: React.FC<BannerProps> = ({ mainText, supportingText, backgroundImage, ...rest }) => {
  const theme = useTheme();
  return (
    <BannerWrapper theme={theme} backgroundImage={backgroundImage} {...rest}>
      <HeroText>{mainText}</HeroText>
      <SupportingText>{supportingText}</SupportingText>
    </BannerWrapper>
  );
};

export default Banner;
