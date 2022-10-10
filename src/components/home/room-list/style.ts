import styled from "styled-components"

interface IProps {
  customWidth: string
}

export const RoomListWrapper = styled.div<IProps>`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;

  .room-item-wrapper {
    width: ${props => props.customWidth};
    padding: 8px;
  }
`
