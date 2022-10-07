import { ThemeProps } from "styled-components"

const theme = {
  color: {
    primary: '#ff385c',
    second: '#00848A'
  },
  text: {
    primary: '#484848',
    second: '#222'
  },
  mixin: {
    boxShadow: `
      transition: box-shadow .4s ease;
      &:hover {
        box-shadow: 0 2px 4px rgb(0 0 0 / 18%);
        background-color: inherit;
      }
    `
  }
}

export default theme
export type ThemePropsType = ThemeProps<typeof theme>
