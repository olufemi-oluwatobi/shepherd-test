// FilterSection.style.tsx

import styled from "styled-components";

export const FilterSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
  .dropdown-button {
    background: white;
    color: ${({ theme }) => theme.colors.grey[300]};
    font-weight: bold;
    padding: 5px 15px;
    margin-right: 10px;
    border: 2px solid ${({ theme }) => theme.colors.grey[100]};
    border-radius: 20px;
  }
`;

export const DropdownActive = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.grey[300]};
  padding: 5px 15px;
  margin-right: 10px;
  border: 2px solid ${({ theme }) => theme.colors.grey[100]};
  border-radius: 20px;

  .arrow_forward {
    margin: 0px 10px;
  }

  .selected_items {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

export const FilterLeftSection = styled.div`
  min-width: 60%;
  display: flex;
  align-items: center;
`;

export const FilterRightSection = styled.div`
  display: flex;
  align-items: center;

  .clear_button {
    font-weight: bold;
  }
  button {
    margin-left: 10px;
  }
`;

export const StarItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .selected_items {
    margin-left: 5px;
  }
`;

export const FilterText = styled.div`
  color: ${({ theme }) => theme.colors.grey[300]};
  display: flex;
  margin-right: 20px;
  .filter_label {
    margin-left: 5px;
  }
`;

export const ForwardText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
