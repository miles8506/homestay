import styled from "styled-components";

export const IndicatorWrapper = styled.div`
  .indicator {
    overflow: hidden;
    width: 100px;
    border: 1px solid #000;
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