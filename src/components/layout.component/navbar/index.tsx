import React, { useState, useEffect } from "react";
import { useTheme } from "styled-components";
import { Dropdown } from "antd";
import styled from "styled-components";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
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
    align-items center;

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

const AvatarBadge = styled.div`
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

const UserName = styled.span`
  font-weight: bold;
  font-size: 14px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UserLabelWrapper = styled.button`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  padding: 7px 8px;
  border: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme?.colors?.grey[100]};
`;
const UserLabel: React.FC = () => {
  const theme = useTheme()
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

const Navbar: React.FC<NavbarProps> = ({ height }) => {
  const theme = useTheme();
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
      <Input
        width={"300px"}
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
