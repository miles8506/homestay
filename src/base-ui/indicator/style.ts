import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  width: 100%;

  .indicator {
    overflow: hidden;
    &-content {
      position: relative;
      display: flex;
      transition: transform 0.3s ease;

      & > * {
        flex-shrink: 0;
      }
    }
  }
`