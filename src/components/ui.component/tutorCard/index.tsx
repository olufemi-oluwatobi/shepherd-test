import React from "react";
import styled from "styled-components";
import { FaBookmark } from "react-icons/fa";

interface Tutor {
  name: string;
  qualification: string;
  description: string;
  rating: number;
  imageUrl: string;
}

interface TutorCardProps {
  tutor: Tutor;
}

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
  height: 100%;
  width: 35%;
  min-height: 250px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

const TutorInfo = styled.div`
  flex: 1;
  padding: 10px;
`;

const TutorName = styled.h3`
  margin: 0;
  font-size: 16px;
`;

const TutorQualification = styled.p`
  margin: 5px 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey[500]};
`;

const TutorDescription = styled.p`
  margin: 0;
  font-size: 14px;
`;

const TutorRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.grey[100]};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey[500]};
`;

const BookmarkIcon = styled(FaBookmark)`
  font-size: 18px;
  margin-right: 5px;
`;

const TutorCard: React.FC<TutorCardProps> = ({ tutor }) => {
  const { name, qualification, description, rating, imageUrl } = tutor;

  return (
    <TutorCardWrapper>
      <TutorImage src={imageUrl} alt="Tutor" />
      <TutorInfo>
        <TutorName>{name}</TutorName>
        <TutorQualification>{qualification}</TutorQualification>
        <TutorDescription>{description}</TutorDescription>
      </TutorInfo>
      <TutorRating>
        <BookmarkIcon />
        {rating}
      </TutorRating>
    </TutorCardWrapper>
  );
};

export default TutorCard;
