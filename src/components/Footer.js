import React from 'react';
import styled from 'styled-components';

import Anchor from './shared/Anchor';

const StyledFooter = styled.footer`
  padding-bottom: 2rem;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 1.5;
  font-size: 1.15rem;

  @media (max-width: ${(props) => props.theme.breakpoint}) {
    font-size: 1rem;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <nav aria-label="External links">
        <List>
          <li>
            Website last updated in May 2022.
          </li>
          
        </List>
      </nav>
    </StyledFooter>
  );
}
