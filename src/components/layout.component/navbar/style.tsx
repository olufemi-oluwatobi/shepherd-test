import styled, { keyframes, DefaultTheme } from "styled-components";

export const NavbarWrapper = styled.nav<{ height?: string }>`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${(props) => props.height || "60px"};
  padding: 5px 20px;
  border-bottom: 1px solid lightgrey;
  background-color: #fff;
  z-index: 999;

  &.no-border {
    border-bottom: none;
  }

  .right_section {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      margin-right: 20px;
      height: 45px;
    }

    .notification {
      margin: 0px 15px;
    }
  }

  .divider {
    margin: 0px 10px;
  }
`;

export const AvatarBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin-right: 10px;
`;

export const UserName = styled.span`
  font-weight: bold;
  font-size: 14px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserLabelWrapper = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  padding: 7px 8px;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme?.colors?.grey[100]};
`;

export const UserLabel = styled.div<{ theme: DefaultTheme }>`
  ${({ theme }) =>
    theme &&
    `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    padding: 7px 8px;
    border: none;
    cursor: pointer;
    background: ${theme?.colors?.grey[100]};
  `}
`;

const expandAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const collapseAnimation = keyframes`
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
`;

export const SearchWrapper = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  padding: 0px 10px;
  overflow: hidden;
  transition: width 0.3s ease-in-out;
  animation: ${({ isOpen }) => (isOpen ? expandAnimation : collapseAnimation)}
    0.3s ease-in-out;
  button {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    padding: 8px;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export const MobileNavWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
  border-bottom: 1px solid lightgrey;

  .left_section {
    display: flex;
    align-items: center;
    flex-grow: 1;

    .logo {
      width: 40px;
      height: 40px;
      margin-right: 10px;
    }
  }

  .right_section {
    display: flex;
    align-items: center;
    width: fit-content;
    flex-grow: 1;
    justify-content: flex-end;
  }

  .search-input {
    flex-grow: 1;
  }
`;
