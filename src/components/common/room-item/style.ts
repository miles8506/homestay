import styled from 'styled-components'
import { ThemePropsType } from '@/theme'

interface IProps extends ThemePropsType {
  textColor?: string
}

export const RoomItemWrapper = styled.div<IProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;

  .room-img-cover {
    position: relative;
    width: 100%;
    padding: 66.66% 8px 0;

    .wrap {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .picture-wrap {
        width: 100%;
        height: 100%;

        &:hover .control {
          display: block;
        }

        .control {
          position: absolute;
          left: 0;
          top: 0;
          display: none;
          width: 100%;
          height: 100%;
          z-index: 99;

          .left-cover,
          .right-cover {
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40%;
            top: 0;
            bottom: 0;
            color: #fff;
            z-index: 9999;
          }

          .left-cover {
            left: 0;
            background: linear-gradient(
              to left,
              transparent 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }

          .right-cover {
            right: 0;
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
        }
      }
    }
  }

  .room-detail {
    margin: 10px 0 5px;
    font-size: 12px;
    color: ${(props) => (props?.textColor ? props.textColor : '#767676')};
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

  .indicator-list {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    z-index: 9;
  }

  .dot-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .dot-bar {
    display: flex;
    flex-wrap: nowrap;
    width: 100px;
    overflow: hidden;
  }

  .dot-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    width: 14.28%;

    .dot {
      width: 6px;
      height: 6px;
      background-color: #fff;
      border-radius: 50%;
    }

    .active {
      width: 8px;
      height: 8px;
    }
  }
`
