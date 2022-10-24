import styled from "styled-components"

import { ThemePropsType } from "@/theme"

export const FilterBarWrapper = styled.div<ThemePropsType>`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  padding: 8px 16px;
  border-bottom: 1px solid #f2f2f2;
  background-color: #fff;
  z-index: 9999;

  .filter-list {
    display: flex;
  }

  .filter-item {
    margin: 0 4px 0 8px;
    padding: 6px 12px;
    font-size: 14px;
    color: ${props => props.theme.text.primary};
    border: 1px solid #dce0e0;
    border-radius: 4px;
    cursor: pointer;
  }

  .active {
    background-color: #008489;
    border-color: #008489;
    color: #fff;
  }
`
