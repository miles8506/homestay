import styled from 'styled-components'

export const ScrollViewWrapper = styled.div`
  position: relative;
  width: 100%;

  .scroll-main {
    overflow: hidden;

    .scroll-content {
      display: flex;
      transform: translateX();
      transition: transform 0.3s ease;
    }
  }

  .scroll-left-icon {
    left: 0;
    transform: translate(-50%, -50%);
  }

  .scroll-right-icon {
    right: 0;
    transform: translate(50%, -50%);
  }

  & > span[class$="icon"] {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    box-shadow: 0px 1px 1px 1px rgb(0 0 0 / 14%);
    background-color: #fff;
    cursor: pointer;
  }
`
