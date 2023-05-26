import React, { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import Dropdown from "@/components/ui.component/dropdown";
import styled from "styled-components";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import Input from "@/components/ui.component/input";
import Button from "@/components/ui.component/button";
import Divider from "@/components/ui.component/divider";
import Notification from "@/components/ui.component/notification";

interface NavbarProps {
  height?: string;
}

const NavbarWrapper = styled.nav<NavbarProps>`
  position: sticky;
  top: 0;
  width: 100vw;
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

  .right_section{
    display: flex;
  }

  .divider{
    margin: 0px 10px;
  }
`;

const Navbar: React.FC<NavbarProps> = ({ height }) => {
  const theme = useTheme();
  console.log("theme ====?", theme);
  const [hasScrolled, setHasScrolled] = useState(false);

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

  return (
    <NavbarWrapper className={hasScrolled ? "no-border" : ""} height={height}>
      <Input width={"300px"} prefixIcon={<AiOutlineSearch color={theme?.colors?.grey[100]} size={25} />} placeholder="Search" />
      <div className="right_section">
        <Button
          variant="light-blue"
          text="Create New"
          prefixIcon={<AiOutlinePlus width={50} size={20} />}
        />
        <Divider className="divider" position="vertical" color="lightgrey" length="1px" />
        <Notification />
        <Dropdown hoverToShow list={["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]} />
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
