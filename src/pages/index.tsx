import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FilterSection from "@/components/layout.component/filters";
import Banner from "@/components/ui.component/banner";
import TutorCard, { Tutor } from "@/components/ui.component/tutorCard";
import Image from "next/image";
import Navbar from "@/components/layout.component/navbar";



// Sample tutor data
const tutors: Tutor[] = [
  {
    name: "John Doe",
    qualification: "Math Tutor",
    isBookMarked: false,
    description:
      "Experienced math tutor with a passion for teaching. With over 10 years of teaching experience, I have helped numerous students improve their math skills and achieve their academic goals. I believe in creating a supportive and engaging learning environment where students feel comfortable asking questions and exploring challenging concepts. My teaching approach focuses on breaking down complex mathematical problems into simple, understandable steps, ensuring that students grasp the fundamentals before moving on to more advanced topics.",
    rating: {
      rating: 4.8,
      count: 175,
    },
    fee: {
      price: "$20.00",
      duration: "hr",
    },
    imageUrl: "https://picsum.photos/200",
  },
  {
    name: "Jane Smith",
    isBookMarked: false,
    qualification: "English Tutor",
    rating: {
      rating: 4.8,
      count: 175,
    },
    fee: {
      price: "$20.00",
      duration: "hr",
    },
    description:
      "Experienced math tutor with a passion for teaching. With over 10 years of teaching experience, I have helped numerous students improve their math skills and achieve their academic goals. I believe in creating a supportive and engaging learning environment where students feel comfortable asking questions and exploring challenging concepts. My teaching approach focuses on breaking down complex mathematical problems into simple, understandable steps, ensuring that students grasp the fundamentals before moving on to more advanced topics.",
    imageUrl: "https://picsum.photos/200",
  },
  {
    name: "Jane Smith",
    isBookMarked: false,
    qualification: "English Tutor",
    description:
      "Experienced math tutor with a passion for teaching. With over 10 years of teaching experience, I have helped numerous students improve their math skills and achieve their academic goals. I believe in creating a supportive and engaging learning environment where students feel comfortable asking questions and exploring challenging concepts. My teaching approach focuses on breaking down complex mathematical problems into simple, understandable steps, ensuring that students grasp the fundamentals before moving on to more advanced topics.",
    rating: {
      rating: 4.8,
      count: 175,
    },
    fee: {
      price: "$20.00",
      duration: "hr",
    },
    imageUrl: "https://picsum.photos/200",
  },
  {
    name: "Jane Smith",
    isBookMarked: true,
    qualification: "English Tutor",
    description:
      "Experienced math tutor with a passion for teaching. With over 10 years of teaching experience, I have helped numerous students improve their math skills and achieve their academic goals. I believe in creating a supportive and engaging learning environment where students feel comfortable asking questions and exploring challenging concepts. My teaching approach focuses on breaking down complex mathematical problems into simple, understandable steps, ensuring that students grasp the fundamentals before moving on to more advanced topics.",
    rating: {
      rating: 4.8,
      count: 175,
    },
    fee: {
      price: "$20.00",
      duration: "hr",
    },
    imageUrl: "https://picsum.photos/200",
  },
  {
    name: "Jane Smith",
    isBookMarked: true,
    qualification: "English Tutor",
    description:
      "Experienced math tutor with a passion for teaching. With over 10 years of teaching experience, I have helped numerous students improve their math skills and achieve their academic goals. I believe in creating a supportive and engaging learning environment where students feel comfortable asking questions and exploring challenging concepts. My teaching approach focuses on breaking down complex mathematical problems into simple, understandable steps, ensuring that students grasp the fundamentals before moving on to more advanced topics.",
    rating: {
      rating: 4.8,
      count: 175,
    },
    fee: {
      price: "$20.00",
      duration: "hr",
    },
    imageUrl: "https://picsum.photos/200",
  },
];

const TutorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem;
  margin-block: 2rem;
  justify-items: center;
  align-items: center;
`;

const TutorName = styled.h3`
  margin: 0;
  margin-top: 5px;
  font-size: 24px;
  font-weight: bold;
`;

const MainSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 2rem;
`;

export const MainWrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;


  .banner_wrapper {
    margin: 50px 20px;
  }
`;

const PopupOverlay = styled.div<{ isMobile: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: ${({ isMobile }) => (isMobile ? "center" : "flex-start")};
`;

const PopupContainer = styled.div<{ isMobile: boolean }>`
  background-color: #fff;
  width: ${({ isMobile }) => (isMobile ? "100vw" : "300px")};
  min-height: 100px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const PopupHeader = styled.div`
  background-color: blue;
  height: 30%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const PopupMain = styled.div`
  margin-top: 20px;
`;

const PopupSupportingText = styled.p`
  margin: 0;
`;

const PopupButton = styled.button`
  width: 100%;
  padding: 10px;
`;


export default function Home() {
  const availabilityOptions = ["Option 1", "Option 2", "Option 3"];
  const subjectOptions = ["Option A", "Option B", "Option C"];
  const levelOptions = ["Beginner", "Intermediate", "Advanced"];
  const priceOptions = ["Free", "10", "20", "100"];
  const ratingOptions = ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"];

  const handleApplyFilter = () => {};

  return (
    <MainWrapper>
      <Navbar height="50px" />
      <Banner
        className="banner_wrapper"
        backgroundImage="https://images.unsplash.com/flagged/photo-1564445477052-8a3787406bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80"
        mainText="Discover Top Tutors"
        supportingText="Find expert instructors to meet your learning goals with as much flexibility as you need"
      />

      <MainSection>
        <FilterSection
          onApplyFilter={handleApplyFilter}
          availabilityOptions={availabilityOptions}
          subjectOptions={subjectOptions}
          levelOptions={levelOptions}
          priceOptions={priceOptions}
          ratingOptions={ratingOptions}
        />
        <TutorName>{tutors.length} Tutor's Available</TutorName>
        <TutorGrid>
          {tutors.map((tutor, index) => (
            <TutorCard key={index} tutor={tutor} />
          ))}
        </TutorGrid>
      </MainSection>
    </MainWrapper>
  );
}
