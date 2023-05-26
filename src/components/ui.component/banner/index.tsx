import React, { use } from 'react';
import { useTheme } from 'styled-components';
import styled from 'styled-components';

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
    mainText: string;
    supportingText: string;
    backgroundImage: string;
  }

interface BannerWrapperProps {
  backgroundImage: string;
}

const BannerWrapper = styled.div<BannerWrapperProps>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  display: flex;
  flex-direction: column;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.white};
  padding: 60px 30px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const HeroText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const SupportingText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: 0;
  max-width: 100%;
  margin-top: 10px;
  line-height: 25px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
    max-width: 30%;

  }
`;

const Banner: React.FC<BannerProps> = ({ mainText, supportingText, backgroundImage, ...rest }) => {
  const theme = useTheme()
  return (
    <BannerWrapper theme={theme} backgroundImage={backgroundImage} {...rest}>
      <HeroText>{mainText}</HeroText>
      <SupportingText>{supportingText}</SupportingText>
    </BannerWrapper>
  );
};

export default Banner;
