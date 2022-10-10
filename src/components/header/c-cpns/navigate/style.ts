import styled from 'styled-components'
import { ThemePropsType } from '@/theme'

export const HeaderNavigateWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  text-align: right;

  [class$='-btn'] {
    padding: 12px 15px;
    border-radius: 22px;
    color: ${(props: ThemePropsType) => props.theme.text.primary };
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }
  }

  .profile-btn {
    position: relative;
    display: flex;
    align-items: center;
    gap: 0 10px;
    height: 42px;
    border: 1px solid #ccc;

    &:hover {
      background-color: #fff;
    }
    ${(props: ThemePropsType) => props.theme.mixin.boxShadow };
  }

  .penal {
    position: absolute;
    right: 0;
    top: 54px;
    width: 240px;
    padding: 10px 0;
    border-radius: 10px;
    box-shadow: 0 0 6px rgb(0 0 0 / 20%);
    background-color: #fff;

    .item {
      height: 40px;
      padding: 0 16px;
      line-height: 40px;
      text-align: left;
      color: #666;

      &:nth-child(2) {
        border-bottom: 1px solid #bbb;
      }
    }
  }
`
