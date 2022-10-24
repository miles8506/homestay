import styled from 'styled-components'

export const FilterTabWrapper = styled.div`
  position: relative;

  .filter-tab {
    display: flex;
    gap: 0 20px;
    color: #222;
    font-size: 16px;
  }

  .tab {
    padding: 10px 0;
    cursor: pointer;
  }

  .active {
    border-bottom: 2px solid #333;
  }
`
