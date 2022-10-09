import styled from "styled-components"

export const FooterWrapper = styled.div`
  margin-top: 100px;
  border-top: 1px solid #EBEBEB;

  .footer {
    display: flex;
    width: 1080px;
    margin: 0 auto;
    padding: 48px 24px;

    .list {
      flex: 1;

      &-title {
        margin-bottom: 16px;
        color: #484848;
        font-size: 14px;
        font-weight: 600;
      }

      &-item {
        display: block;
        margin-top: 6px;
        font-size: 14px;
        color: #767676;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
