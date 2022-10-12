import styled from "styled-components"

import { ThemePropsType } from "@/theme"

export const TabsWrapper = styled.div<ThemePropsType>`
  display: flex;

  .tabs-item {
    flex-basis: 120px;
    flex-shrink: 0;
    margin-right: 16px;
    padding: 14px 16px;
    border: 0.5px solid #D8D8D8;
    border-radius: 3px;
    color: ${props => props.theme.text.primary};
    font-size: 17px;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;

    ${props => props.theme.mixin.boxShadow}
  }

  .active {
    background-color: ${props => props.theme.color.second};
    color: #fff;
  }
`
