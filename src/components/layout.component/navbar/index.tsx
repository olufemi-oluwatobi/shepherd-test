import React, { useState, useEffect } from "react";
import isMobileDevice from "@/hooks/isMobile";
import { useTheme, keyframes } from "styled-components";
import { Dropdown } from "antd";
import styled from "styled-components";
import {
  NavbarWrapper,
  AvatarBadge,
  UserName,
  UserLabelWrapper,
  SearchWrapper,
  MobileNavWrapper,
} from "./style";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import Input from "@/components/ui.component/input";
import Button from "@/components/ui.component/button";
import Divider from "@/components/ui.component/divider";
import Notification from "@/components/ui.component/notification";

// Define the props for the Navbar component
interface NavbarProps {
  height?: string;
  onSearchChange?: (q: string) => void;
}

// UserLabel component for displaying the user's avatar and name
const UserLabel: React.FC = () => {
  const theme = useTheme();
  return (
    <UserLabelWrapper theme={theme}>
      <AvatarBadge>J</AvatarBadge>
      <UserName>Liam Kelly</UserName>
      <RiArrowDropDownLine size={25} />
      {/* <span>
                {Array.isArray(dropdown.filter)
                  ? dropdown.filter.join(",")
                  : dropdown.filter}
              </span> */}
    </UserLabelWrapper>
  );
};

// MobileNav component for rendering the mobile version of the navbar
const MobileNav = ({
  onSearchChange,
}: {
   onSearchChange?: (q: string) => void;
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const theme = useTheme();

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <MobileNavWrapper>
      {!isSearchOpen && (
        <div className="left_section">
          <Button
            variant="light-blue"
            prefixIcon={<AiOutlinePlus width={50} size={20} />}
            text="Create New"
          />
        </div>
      )}

      {isSearchOpen ? (
        <SearchWrapper isOpen={isSearchOpen}>
          <Input
            width={"80%"}
            onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
            prefixIcon={
              <AiOutlineSearch color={theme?.colors?.grey[100]} size={20} />
            }
            placeholder="Search"
          />{" "}
          <Button
            text=""
            variant="white"
            suffixIcon={<AiOutlineSearch size={25} />}
            onClick={toggleSearch}
          />
        </SearchWrapper>
      ) : (
        <div className="right_section">
          <Button
            text=""
            variant="white"
            suffixIcon={<AiOutlineSearch size={20} />}
            onClick={toggleSearch}
          />
          <Dropdown
            key={"logout"}
            trigger={["click"]}
            placement="bottomLeft"
            menu={{
              items: [
                {
                  key: "logout",
                  label: <div onClick={() => {}}>{"Logout"}</div>,
                },
              ],
            }}
          >
            <AvatarBadge>J</AvatarBadge>
          </Dropdown>
        </div>
      )}
    </MobileNavWrapper>
  );
};

// Navbar component for rendering the desktop version of the navbar
const Navbar: React.FC<NavbarProps> = ({ height, onSearchChange }) => {
  const theme = useTheme();
  const [hasScrolled, setHasScrolled] = useState(false);
  const isMobile = isMobileDevice();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isMobile ? (
    <MobileNav onSearchChange={onSearchChange && onSearchChange} />
  ) : (
    <NavbarWrapper height={height}>
      <Input
        width={"300px"}
        onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
        prefixIcon={
          <AiOutlineSearch color={theme?.colors?.grey[100]} size={25} />
        }
        placeholder="Search"
      />
      <div className="right_section">
        <Button
          variant="light-blue"
          text="Create New"
          prefixIcon={<AiOutlinePlus width={50} size={20} />}
        />
        <Divider
          className="divider"
          position="vertical"
          color="lightgrey"
          length="1px"
        />
        <Notification className="notification" />
        <Dropdown
          key={"logout"}
          trigger={["click"]}
          placement="bottomLeft"
          menu={{
            items: [
              {
                key: "logout",
                label: <div onClick={() => {}}>{"Logout"}</div>,
              },
            ],
          }}
        >
          <UserLabel />
        </Dropdown>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
