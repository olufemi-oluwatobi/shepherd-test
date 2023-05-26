import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { IconType } from 'react-icons';

interface DropdownProps<T> {
  list: T[];
  labelKey?: keyof T | string;
  valueKey?: keyof T | string;
  prefixIcon?: IconType;
  suffixIcon?: IconType;
  onSelect?: (item: T) => void;
  hoverToShow?: boolean; // New prop
}

interface DropdownItemProps {
  active: boolean;
}

const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownToggle = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 6px 12px;
  margin-bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  color: #fff;
  background-color: #337ab7;
  border-color: #2e6da4;
  border: 1px solid transparent;
  border-radius: 4px;

  .caret {
    display: inline-block;
    width: 0;
    height: 0;
    margin-left: 2px;
    vertical-align: middle;
    border-top: 4px dashed;
    border-top: 4px solid\9;
    border-right: 4px solid transparent;
    border-left: 4px solid transparent;
  }
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  flex-direction: column;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  background-color: #fff;
  -webkit-background-clip: padding-box;
  background-clip: padding-box;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);

  ${DropdownWrapper}:hover & {
    display: block;
  }
`;

const DropdownItem = styled.li<DropdownItemProps>`
  cursor: pointer;
  ${(props) => props.active && 'background: #ddd;'}

  & > a {
    display: block;
    padding: 5px 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
    text-decoration: none;
  }
`;

const Dropdown: React.FC<DropdownProps<any>> = ({
  list,
  labelKey = 'label',
  valueKey = 'value',
  prefixIcon: PrefixIcon,
  suffixIcon: SuffixIcon,
  onSelect,
  hoverToShow = false // Default value is false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [labelItem, setLabelItem] = useState<any>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isMenuHovered, setIsMenuHovered] = useState(false); // New state variable

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const firstItem = list[0];
    const hasLabelKey = typeof firstItem[labelKey] !== 'undefined';
    setLabelItem(hasLabelKey ? firstItem[labelKey] : firstItem);
  }, [list, labelKey]);

  const showDropdown = () => {
    if (hoverToShow) { // Check if hoverToShow prop is true
      setIsOpen(true);
    }
  };

  const hideDropdown = () => {
    if (!hoverToShow && !isMenuHovered) { // Check if hoverToShow prop is false and menu is not hovered over
      setIsOpen(false);
    }
  };

  const chooseItem = (item: any) => {
    if (labelItem !== item) {
      setLabelItem(item);
      if (onSelect) {
        onSelect(item);
      }
    }
  };

  const renderDataDropDown = (item: any, index: number) => {
    const itemLabel = typeof item[labelKey] !== 'undefined' ? item[labelKey] : item;
    const itemValue = typeof item[valueKey] !== 'undefined' ? item[valueKey] : index;

    return (
      <DropdownItem key={index} active={labelItem === itemLabel} onClick={() => chooseItem(itemLabel)}>
        <a>{itemLabel}</a>
      </DropdownItem>
    );
  };

  return (
    <DropdownWrapper ref={dropdownRef}>
      <DropdownToggle type="button" onMouseEnter={showDropdown} onMouseLeave={hideDropdown}>
        {PrefixIcon && <PrefixIcon />}
        {labelItem}
        {SuffixIcon && <SuffixIcon />}
        <span className="caret" />
      </DropdownToggle>
      {isOpen && (
        <DropdownMenu onMouseEnter={() => setIsMenuHovered(true)} onMouseLeave={() => setIsMenuHovered(false)}>
        {list.map(renderDataDropDown)}
        </DropdownMenu>
      )}
    </DropdownWrapper>
  );
};

export default Dropdown;
