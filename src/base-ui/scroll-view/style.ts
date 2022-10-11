import styled from "styled-components"

export const ScrollViewWrapper = styled.div`
  overflow: hidden;

  .scroll-content {
    position: relative;
    display: flex;
    transform: translateX();
    transition: transform .3s ease;
  }
`
