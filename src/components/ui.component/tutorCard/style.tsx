import styled from "styled-components";
import { FaStar, FaBookmark } from "react-icons/fa";

export const TutorSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const StarIcon = styled(FaStar)`
  color: gold;
  margin-right: 5px;
`;

export const Rating = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.grey[300]};
  margin-right: 10px;
`;

export const TutorCharge = styled.span`
  display: flex;
  font-weight: bold;
  font-size: 24px;
  align-items: center;
`;

export const TutorCardWrapper = styled.div`
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

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const TutorImage = styled.img`
  height: auto;
  width: 35%;
  min-height: 280px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  @media (max-width: 768px) {
    width: 100%;
    height: 40%;
    max-height: 150px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 0px;
  }
`;

export const TutorInfo = styled.div`
  flex: 1;
`;

export const TutorName = styled.h3`
  margin: 0;
  margin-top: 5px;
  font-size: 24px;
  font-weight: bold;
`;

export const TutorQualification = styled.p`
  margin: 5px 0;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: medium;
  color: ${({ theme }) => theme.colors.grey[900]};
`;

export const TutorDescription = styled.p`
  margin: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.grey[300]};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Number of lines to show */
  -webkit-box-orient: vertical;
`;

export const TutorRating = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px;
  color: ${({ theme }) => theme.colors.grey[300]};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.grey[500]};
`;

export const BookmarkIcon = styled(FaBookmark)`
  display: flex;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 10px;
  justify-self: flex-end;
  margin-right: 5px;
`;

export const Section = styled.div`
  display: flex;
  height: 100%;
  padding: 10px;
  flex-direction: column;
  justify: space-between;
`;

export const TopSec = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;
