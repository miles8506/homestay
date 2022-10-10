import styled from "styled-components"

import { ThemePropsType } from "@/theme"

export const TabsWrapper = styled.div<ThemePropsType>`
  display: flex;

  .tabs-item {
    margin-right: 16px;
    padding: 14px 16px;
    border: 0.5px solid #D8D8D8;
    border-radius: 3px;
    color: ${props => props.theme.text.primary};
    font-size: 17px;
    cursor: pointer;

    ${props => props.theme.mixin.boxShadow}
  }

  .active {
    background-color: ${props => props.theme.color.second};
    color: #fff;
  }
`
