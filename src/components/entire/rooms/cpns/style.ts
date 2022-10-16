import styled from 'styled-components'

export const PicturesWrapper = styled.div`
  height: 100%;

  .ant-carousel {
    width: 100%;
    height: 100%;

    .slick-slider {
      height: 100%;
    }

    .slick-list {
      height: 100%;
    }

    .slick-track {
      height: 100%;
    }

    .slick-slide {
      & > div {
        height: 100%;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .picture-wrap {
    position: relative;
    height: 100%;
  }
`
