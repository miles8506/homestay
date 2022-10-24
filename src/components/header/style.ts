import styled from 'styled-components'

interface IProps {
  customHeight: number
}

export const HeaderWrapper = styled.div`
  z-index: 9999;

  .header {
    position: relative;
    background-color: #fff;
    z-index: 99;

    .top-header {
      display: flex;
      align-items: center;
      height: 80px;
      padding: 0 24px;
      border-bottom: 1px solid #eee;
      font-size: 14px;
    }
  }

  &.is-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }

  .cover {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
  }
`

export const ButtonHeaderWrapper = styled.div<IProps>`
  height: ${props => props.customHeight + 'px'};
  transition: height .3s ease;
`
