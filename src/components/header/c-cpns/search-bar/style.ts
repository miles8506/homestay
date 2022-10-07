import styled from 'styled-components'

import { ThemePropsType } from '@/theme'

export const HeaderSearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 48px;
  padding: 0 8px 0 24px;
  border: 1px solid #ddd;
  border-radius: 24px;
  font-weight: 600;
  cursor: pointer;

  ${(props: ThemePropsType) => props.theme.mixin.boxShadow}

  .search-bar-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    color: #fff;
    background-color: ${(props: ThemePropsType) => props.theme.color.primary};
    border-radius: 50%;
  }
`
