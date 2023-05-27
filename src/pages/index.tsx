import React, { useState, useEffect, useCallback,useMemo } from "react";
import styled from "styled-components";
import useIsMobile from "@/hooks/isMobile";
import FilterSection from "@/components/layout.component/filters";
import Banner from "@/components/ui.component/banner";
import TutorCard, { Tutor } from "@/components/ui.component/tutorCard";
import PopUp from "@/components/ui.component/popup";
import ContactUs from "@/components/ui.component/send_mail";
import Navbar from "@/components/layout.component/navbar";

// Sample tutor data
const tutorsData: Tutor[] = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
];


const TUTORS_STORAGE_KEY = "TUTORS_STORAGE_KEY"

const TutorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem;
  margin-block: 2rem;
  justify-items: center;
  align-items: center;

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
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
  padding: 0 1rem;
`;

export const MainWrapper = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  position: relative;
  margin-bottom: 20px;
  .banner_wrapper {
    margin: 30px 0px;
  }
`;

export default function Home() {
  const isMobile = useIsMobile();
  const [searchQuery, setSearchQuery] = useState('');
  const [tutors, setTutorsData] = useState<Tutor[]>(tutorsData);
  const [isOpen, setIsOpen] = useState(true);
  const availabilityOptions = ["Option 1", "Option 2", "Option 3"];
  const subjectOptions = ["Option A", "Option B", "Option C"];
  const levelOptions = ["Beginner", "Intermediate", "Advanced"];
  const priceOptions = ["Free", "10", "20", "100"];
  const ratingOptions = ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"];

  const handleApplyFilter = () => {};

  const searchTutors = (query: string): Tutor[] => {
    if (!query) {
      return tutors; // Return all tutors if search query is empty
    }
    const searchTerm = query.toLowerCase().trim();
   
  
    return tutorsData.filter((tutor) => {
      const tutorText = `${tutor.name} ${tutor.qualification} ${tutor.description}`.toLowerCase();
      return tutorText.includes(searchTerm);
    });
  };

  const filteredTutors = useMemo(() => searchTutors(searchQuery), [searchQuery, tutors]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };


  useEffect(() => {
    // Load tutors data from local storage
    const persistedTutorsData = localStorage.getItem(TUTORS_STORAGE_KEY)
    if(persistedTutorsData){
      setTutorsData(JSON.parse(persistedTutorsData))
    }
  }, [])

  const toggleBookmark = (id: number) => {
    setTutorsData(prevTutors => {
      // Find the index of the tutor with the specified id
      const tutorIndex = prevTutors.findIndex(tutor => tutor.id === id);
      console.log(tutorIndex);
  
      // If the tutor is found
      if (tutorIndex > -1) {
        // Toggle the isBookMarked property of the tutor
        prevTutors[tutorIndex].isBookMarked = !prevTutors[tutorIndex].isBookMarked;
      }
  
      // Store the updated tutors data in local storage
      localStorage.setItem(TUTORS_STORAGE_KEY, JSON.stringify(prevTutors));
  
      // Return a new array with the updated tutors data
      return [...prevTutors];
    });
  };
  

  return (
    <MainWrapper>
      <Navbar onSearchChange={handleSearch} height="50px" />

      <MainSection>
        <Banner
          className="banner_wrapper"
          backgroundImage="https://images.unsplash.com/flagged/photo-1564445477052-8a3787406bbf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80"
          mainText="Discover Top Tutors"
          supportingText="Find expert instructors to meet your learning goals with as much flexibility as you need"
        />
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
          {filteredTutors.map((tutor, index) => (
            <TutorCard toggleBookmark={toggleBookmark} key={index} tutor={tutor} />
          ))}
        </TutorGrid>
      </MainSection>
      <PopUp isOpen={isOpen} isMobile={isMobile}>
        <ContactUs onClick={() => setIsOpen(false)} />
      </PopUp>
    </MainWrapper>
  );
}
