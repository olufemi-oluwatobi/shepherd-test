import React, { ReactNode } from "react";
import styled from "styled-components";
import { FaCog } from "react-icons/fa";
import { RiArrowRightSLine, RiStarFill } from "react-icons/ri";
import Button from "../../ui.component/button";
import { Dropdown, Menu } from "antd";
import { RiArrowDropDownLine, RiArrowRightLine } from "react-icons/ri";
import {
  FilterSectionWrapper,
  DropdownActive,
  FilterLeftSection,
  FilterRightSection,
  StarItemWrapper,
  FilterText as FilterTextStyled,
  ForwardText,
} from "./style";

interface FilterSectionProps {
  onApplyFilter: () => void;
  availabilityOptions: string[];
  subjectOptions: string[];
  levelOptions: string[];
  priceOptions: string[];
  ratingOptions: string[];
}

type DropdownItem = {
  options: string[];
  filter: string;
  placeholder: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  renderButton: (dropdown: DropdownItem) => React.ReactNode;
};

const FilterSection: React.FC<FilterSectionProps> = ({
  onApplyFilter,
  availabilityOptions,
  subjectOptions,
  levelOptions,
  priceOptions,
  ratingOptions,
}) => {
  // State for storing the selected filters
  const [availabilityFilter, setAvailabilityFilter] = React.useState("");
  const [subjectFilter, setSubjectFilter] = React.useState("");
  const [levelFilter, setLevelFilter] = React.useState("");
  const [priceFilter, setPriceFilter] = React.useState("");
  const [ratingFilter, setRatingFilter] = React.useState("");

  // Handler for applying the filter
  const handleApplyFilter = () => {
    onApplyFilter();
  };

  // Handler for clearing all filters
  const handleClearFilter = () => {
    setAvailabilityFilter("");
    setSubjectFilter("");
    setLevelFilter("");
    setPriceFilter("");
    setRatingFilter("");
  };

  // Function to render the menu button for a dropdown
  const renderMenuButton = (
    dropdown: DropdownItem,
    selectedNode?: ReactNode
  ) => {
    return dropdown.filter ? (
      <DropdownActive>
        {dropdown.placeholder}
        <ForwardText>
          <RiArrowRightLine className="arrow_forward" size={25} />
        </ForwardText>
        {selectedNode ? (
          selectedNode
        ) : (
          <span className="selected_items">
            {Array.isArray(dropdown.filter)
              ? dropdown.filter.join(",")
              : dropdown.filter}
          </span>
        )}
        <RiArrowDropDownLine size={25} />
      </DropdownActive>
    ) : (
      <Button
        suffixIcon={<RiArrowDropDownLine size={30} />}
        className="dropdown-button"
        text={dropdown.filter || dropdown.placeholder}
      ></Button>
    );
  };

  // Dropdown configurations
  const dropdowns: DropdownItem[] = [
    {
      options: availabilityOptions,
      filter: availabilityFilter,
      placeholder: "Availability",
      setFilter: setAvailabilityFilter,
      renderButton: renderMenuButton,
    },
    {
      options: subjectOptions,
      filter: subjectFilter,
      placeholder: "Subject",
      setFilter: setSubjectFilter,
      renderButton: renderMenuButton,
    },
    {
      options: levelOptions,
      filter: levelFilter,
      placeholder: "Level",
      setFilter: setLevelFilter,
      renderButton: renderMenuButton,
    },
    {
      options: priceOptions,
      filter: priceFilter,
      placeholder: "Price",
      setFilter: setPriceFilter,
      renderButton: renderMenuButton,
    },
    {
      options: ratingOptions,
      filter: ratingFilter,
      placeholder: "Rating",
      setFilter: setRatingFilter,
      renderButton: (dropdownContent) =>
        renderMenuButton(
          dropdownContent,
          <StarItemWrapper>
            <RiStarFill color="gold" size={25} />
            <div className="selected_items">{dropdownContent.filter}</div>
          </StarItemWrapper>
        ),
    },
  ];

  // Styled components
  const FilterText = styled.div`
    color: ${({ theme }) => theme.colors.grey[300]};
    display: flex;
    margin-right: 20px;
    .filter_label {
      margin-left: 5px;
    }
  `;

  const ForwardText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <FilterSectionWrapper>
      <FilterLeftSection>
        {/* Filter text and dropdowns */}
        <FilterText>
          <FaCog size={20} />
          <div className="filter_label">Filter</div>
        </FilterText>
        {dropdowns.map((dropdown, index) => (
          <Dropdown
            key={index}
            menu={{
              items: dropdown.options.map((filter) => ({
                key: filter,
                label: (
                  <div onClick={() => dropdown.setFilter(filter)}>{filter}</div>
                ),
              })),
            }}
            trigger={["click"]}
            placement="bottomLeft"
          >
            {dropdown?.renderButton(dropdown)}
          </Dropdown>
        ))}
      </FilterLeftSection>

      {/* Buttons section */}
      <FilterRightSection>
        <Button
          className="clear_button"
          text="Clear Filter"
          variant="white"
          onClick={handleClearFilter}
        />
        <Button text="Apply Filter" onClick={handleApplyFilter} />
      </FilterRightSection>
    </FilterSectionWrapper>
  );
};

export default FilterSection;
