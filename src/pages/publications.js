import React from 'react';
import styled from 'styled-components';

import Section from '../components/Section';
import Paragraph from '../components/shared/Paragraph';
import Anchor from '../components/shared/Anchor';

const Quote = styled.blockquote`
  margin: 0 1rem 0.75rem;
  padding-left: 0.75rem;
  border-left: 2px solid currentColor;
  font-size: 1rem;
`;

export default function Publications() {
  return (
    <Section title="Publications">
      <Paragraph>
      <b>Understanding Lay Users' Needs of Counterfactual Explanations for Everyday Recommendations</b>. Ruoxi Shang, Kevin Feng, Chirag Shah. Under review for the ACM Conference on Fairness, Accountability, and Transparency. (FAccT'22)
      </Paragraph>

      <Paragraph>
      <b>Giving and Receiving: Reciprocal Review Exchange in Online Fanfiction Communities</b>. Ruoxi Shang, Zile Xiao, Jenna Frens, Cecilia Aragon. In Companion Publication of the 2021 Conference on Computer Supported Cooperative Work and Social Computing. (CSCW'21)
      </Paragraph>

      <Paragraph>
      <b>Reciprocity in Reviewing on Fanfiction.net</b>. Niamh Froelich, Arthur Liu, Ruoxi Shang, Zile Xiao, Travis Neils, Jenna Frens, Cecilia Aragon. In International Conference on Human-Computer Interaction. (HCII'21)
      </Paragraph>
      
    </Section>
  );
}
