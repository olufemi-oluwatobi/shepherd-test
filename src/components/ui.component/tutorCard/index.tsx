import React from "react";
import { useTheme } from "styled-components";
import styled, { keyframes } from "styled-components";
import {
  TutorSectionWrapper,
  StarIcon,
  Rating,
  TutorCharge,
  TutorCardWrapper,
  TutorImage,
  TutorInfo,
  TutorName,
  TutorQualification,
  TutorDescription,
  TutorRating,
  BookmarkIcon,
  Section,
  TopSec,
} from "./style";
import { FaStar } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

enum Duration {
  Hour = "hr",
  Month = "month",
  Year = "year",
}

export interface Tutor {
  id: number;
  name: string;
  qualification: string;
  description: string;
  isBookMarked: boolean;
  rating: {
    rating: number;
    count: number;
  };
  fee: { price: string; duration: "hr" | "month" | "year" };
  imageUrl: string;
}

interface TutorCardProps {
  tutor: Tutor;
  toggleBookmark: (id: number) => void;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const AnimatedTutorCardWrapper = styled(TutorCardWrapper)`
  animation: ${fadeIn} 0.5s ease-in-out; /* Apply the fade-in animation */
`;

const TutorCard: React.FC<TutorCardProps> = ({ tutor, toggleBookmark }) => {
  const {
    name,
    id,
    qualification,
    description,
    rating: { rating, count },
    imageUrl,
    isBookMarked,
    fee: { price, duration },
  } = tutor;

  const theme = useTheme();
  return (
    <AnimatedTutorCardWrapper>
      <TutorImage src={imageUrl} alt="Tutor" />
      <Section>
        <TopSec>
          <BookmarkIcon
            onClick={() => toggleBookmark(id)}
            size={30}
            color={
              isBookMarked ? theme?.colors?.primary : theme?.colors?.grey[200]
            }
          />
        </TopSec>
        <TutorInfo>
          <TutorName>{name}</TutorName>
          <TutorQualification>{qualification}</TutorQualification>
          <TutorDescription theme={theme}>{description}</TutorDescription>
        </TutorInfo>
        <TutorSectionWrapper>
          <TutorCharge>
            {price}/{duration}
          </TutorCharge>
          <Rating theme={theme}>
            <StarIcon />
            {rating} ({count})
          </Rating>
        </TutorSectionWrapper>
      </Section>
    </AnimatedTutorCardWrapper>
  );
};

export default TutorCard;
