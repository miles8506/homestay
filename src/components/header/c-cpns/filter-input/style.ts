import styled from 'styled-components'

export const FilterInputWrapper = styled.div`
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  width: 850px;
  height: 66px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 32px;

  .filter-wrap {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    font-size: 14px;
    border-radius: 32px;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .filter-input {
      padding: 0 30px;
      border-right: 1px solid #ddd;
    }

    .city {
      display: block;
      margin-bottom: 3px;
      color: #222;
      font-weight: 700;
    }

    .desc {
      display: block;
      color: #666;
    }

    &:nth-child(3) {
      .filter-input {
        border-right: 0;
      }
    }
  }
`
