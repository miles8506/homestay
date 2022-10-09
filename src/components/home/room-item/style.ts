import styled from "styled-components"
import { ThemePropsType } from '@/theme'

interface IProps extends ThemePropsType {
  textColor?: string
}

export const RoomItemWrapper = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;

  .room-img-cover {
    position: relative;
    width: 100%;
    padding: 66.66% 8px 0;

    & > img {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
    }
  }

  .room-detail {
    margin: 10px 0 5px;
    font-size: 12px;
    color: ${(props) => props?.textColor ? props.textColor : '#767676'}
  }

  .room-name {
    font-weight: 700;
  }

  .room-price {
    margin: 8px 0;
    font-size: 14px;
  }

  .room-evaluate {
    flex: 1;
    display: flex;
    align-items: flex-end;
    color: ${(props: ThemePropsType) => props.theme.text.primary};
    font-size: 12px;
    font-weight: 600;

    .MuiRating-decimal {
      margin-right: -2px;
    }

    .review-count {
      padding-left: 3px;
    }
  }
`
