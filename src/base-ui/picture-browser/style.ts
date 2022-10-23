import styled from 'styled-components'

interface IProps {
  isNext: boolean
}

export const PictureBrowserWrapper = styled.div<IProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  z-index: 99;
  background-color: #333;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    flex: 1;

    .left-control,
    .right-control {
      position: absolute;
      display: flex;
      align-items: center;
      width: 83px;
      top: 0;
      bottom: 0;
      color: #fff;

      svg {
        cursor: pointer;
      }
    }

    .left-control {
      left: 0;
    }

    .right-control {
      right: 0;
    }

    .picture {
      position: relative;
      width: 100%;
      height: 100%;
      max-width: 105vh;
      margin: 0 auto;
      overflow: hidden;

      & > img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        user-select: none;
      }

      .pic-enter {
        transform: translateX(${(props) => (props.isNext ? '100%' : '-100%')});
        opacity: 0;
      }

      .pic-enter-active {
        transform: translateX(0);
        opacity: 1;
      }

      .pic-exit {
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
      }

      .pic-enter-active,
      .pic-exit-active {
        transition: all 0.2s ease;
      }
    }
  }

  .preview-wrap {
    height: 100px;

    .preview {
      position: relative;
      max-width: 105vh;
      height: 100%;
      margin: 0 auto;

      .info {
        position: absolute;
        right: 0;
        bottom: 10px;
        left: 0;
        overflow: hidden;

        .des {
          display: flex;
          justify-content: space-between;
          color: #fff;
          font-size: 14px;
        }

        .control-info {
          cursor: pointer;
        }
      }

      .scroll-imgs {
        width: 100%;
        height: 67px;

        .item {
          height: 100%;
          opacity: 0.5;

          & > img {
            width: 100%;
            height: 67px;
            user-select: none;
          }
        }

        .is-active {
          opacity: 1;
        }

        transition: all .3s ease;
      }
    }
  }
`
