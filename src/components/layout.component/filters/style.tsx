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
0
  .selected_items {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

export const FilterLeftSection = styled.div`
  min-width: 60%;
  display: flex;
  align-items: center;
  overflow-x: auto;
  white-space: nowrap;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FilterRightSection = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 10px;
  align-items: center;

  @media (min-width: 768px) {
    margin-top: 0px;
    flex-direction: row;

    .button {
        margin-left: 10px;
        margin-right: 0px
      }
}

  .clear_button {
    font-weight: bold;
  }
  button {
    margin-left: 0px;
    margin-right: 10px
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
