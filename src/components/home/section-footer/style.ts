import styled from "styled-components"

interface IProps {
  textColor: string
}

export const SectionFooterWrapper = styled.div<IProps>`
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 17px;
  font-weight: 700;
  color: ${ props => props.theme.color.second };
  cursor: pointer;

  .text {
    margin-right: 5px;
  }

  &:hover {
    text-decoration: underline;
  }
`
