import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Banner from "@/components/ui.component/banner";
import TutorCard from "@/components/ui.component/tutorCard";
import Image from "next/image";
import Navbar from "@/components/layout.component/navbar";

export const MainWrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;

  .banner_wrapper {
    margin: 50px 20px;
  }
`;

// Sample tutor data
const tutors = [
  {
    name: "John Doe",
    qualification: "Math Tutor",
    description: "Experienced math tutor with a passion for teaching.",
    rating: 4.8,
    imageUrl: "https://picsum.photos/200",
  },
  {
    name: "Jane Smith",
    qualification: "English Tutor",
    description: "Certified English tutor with a focus on grammar and writing.",
    rating: 4.9,
    imageUrl: "https://picsum.photos/200",
  },
  {
    name: "Jane Smith",
    qualification: "English Tutor",
    description: "Certified English tutor with a focus on grammar and writing.",
    rating: 4.9,
    imageUrl: "https://picsum.photos/200",
  },
  {
    name: "Jane Smith",
    qualification: "English Tutor",
    description: "Certified English tutor with a focus on grammar and writing.",
    rating: 4.9,
    imageUrl: "https://picsum.photos/200",
  },
  {
    name: "Jane Smith",
    qualification: "English Tutor",
    description: "Certified English tutor with a focus on grammar and writing.",
    rating: 4.9,
    imageUrl: "https://picsum.photos/200",
  },
];

const TutorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem;
  margin-block: 2rem;
  padding: 0 1rem;
  justify-items: center;
  align-items: center;
`;

export default function Home() {
  return (
    <MainWrapper>
      <Navbar height="50px" />
      <Banner
        className="banner_wrapper"
        backgroundImage="https://images.unsplash.com/flagged/photo-1564445477052-8a3787406bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80"
        mainText="Discover Top Tutors"
        supportingText="Find expert instructors to meet your learning goals with as much flexibility as you need"
      />
      <TutorGrid>
        {tutors.map((tutor, index) => (
          <TutorCard key={index} tutor={tutor} />
        ))}
      </TutorGrid>
    </MainWrapper>
  );
}
