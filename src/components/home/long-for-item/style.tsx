import styled from "styled-components"

export const LongForItemWrapper = styled.div`
  width: 20%;
  flex-shrink: 0;

  .long-for {
    padding: 8px;
  }

  .long-for-inner {
    position: relative;
    border-radius: 3px;
    overflow: hidden;
  }

  .long-for-img {
    width: 100%;
    height: 100%;
  }

  .long-for-info {
    position: absolute;
    top: 60%;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(-180deg,rgba(0,0,0,0) 3%,rgb(0,0,0) 100%);
    color: #fff;

    .city {
      margin-bottom: 5px;
      font-weight: 600;
      font-size: 18px;
      color: #fff;
    }

    .price {
      font-size: 14px;
    }
  }
`
