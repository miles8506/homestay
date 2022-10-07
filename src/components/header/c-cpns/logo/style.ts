import styled from 'styled-components'
import type { ThemePropsType } from '@/theme'

export const HeaderLogoWrapper = styled.div`
  flex: 1;
  display: inline-block;
  cursor: pointer;

  .logo {
    color: ${(props: ThemePropsType) => props.theme.color.primary};
  }
`
