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
            View my CV {' '}
            <Anchor href="https://drive.google.com/file/d/1EHLbdD1SdTskFIV5XDm7gPbVqfsfsEwG/view?usp=sharing">
              here
            </Anchor>
          </li>
          <li>
            Reach me at rxshang <b>at</b> uw <b>dot</b> edu
          </li>
        </List>
      </nav>
    </StyledFooter>
  );
}
