import styled from 'styled-components'

export const RoomsWrapper = styled.div`
  position: relative;
  padding: 30px 25px;
  margin-top: 128px;

  .title {
    margin-bottom: 10px;
    font-size: 22px;
    color: #222;
    font-weight: 700;
  }

  .loading-mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`
