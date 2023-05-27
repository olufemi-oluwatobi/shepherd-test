import React from "react";
import { useTheme } from "styled-components";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";

enum Duration {
  Hour = "hr",
  Month = "month",
  Year = "year",
}

export interface Tutor {
  name: string;
  qualification: string;
  description: string;
  isBookMarked: boolean;
  rating: {
    rating: number;
    count: number;
  };
  fee: {price: string, duration: "hr" | "month" |"year"};
  imageUrl: string;
}

interface TutorCardProps {
  tutor: Tutor;
}

const TutorSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const StarIcon = styled(FaStar)`
  color: gold;
  margin-right: 5px;
`;

const Rating = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grey[300]};
  margin-right: 10px;
`;

const TutorCharge = styled.span`
  display: flex;
  font-weight: bold;
  font-size: 24px;
  align-items: center;
`;

const TutorCardWrapper = styled.div`
  display: flex;
  min-height: 250px;
  align-items: flex-start;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  transition: box-shadow 0.3s ease-in-out;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const TutorImage = styled.img`
  height: auto;
  width: 35%;
  min-height: 280px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const TutorInfo = styled.div`
  flex: 1;
`;

const TutorName = styled.h3`
  margin: 0;
  margin-top: 5px;
  font-size: 24px;
  font-weight: bold;
`;

const TutorQualification = styled.p`
  margin: 5px 0;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: medium;
  color: ${({ theme }) => theme.colors.grey[900]};
`;

const TutorDescription = styled.p`
  margin: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.grey[300]};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Number of lines to show */
  -webkit-box-orient: vertical;
`;

const TutorRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey[500]};
`;

const BookmarkIcon = styled(FaBookmark)`
  display: flex;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 10px;
  justify-self: flex-end;
  margin-right: 5px;
`;

const Section = styled.div`
  display: flex;
  height: 100%;
  padding: 10px;
  flex-direction: column;
  justify: space-between;
`;

const TopSec = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {
  const {
    name,
    qualification,
    description,
    rating: { rating, count },
    imageUrl,
    isBookMarked,
    fee: {price, duration},
  } = tutor;

  const theme = useTheme();
  return (
    <TutorCardWrapper>
      <TutorImage src={imageUrl} alt="Tutor" />
      <Section>
        <TopSec>
          <BookmarkIcon size={30}  color={isBookMarked ? theme?.colors?.primary : theme?.colors?.grey[200]} />
        </TopSec>
        <TutorInfo>
          <TutorName>{name}</TutorName>
          <TutorQualification>{qualification}</TutorQualification>
          <TutorDescription theme={theme}>{description}</TutorDescription>
        </TutorInfo>
        <TutorSectionWrapper>
          <TutorCharge>{price}/{duration}</TutorCharge>
          <Rating theme={theme}>
            <StarIcon />
            {rating} ({count})
          </Rating>
        </TutorSectionWrapper>
      </Section>
    </TutorCardWrapper>
  );
};

export default TutorCard;
