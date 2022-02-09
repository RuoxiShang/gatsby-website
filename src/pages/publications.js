import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Paragraph from '../components/shared/Paragraph';
import Subtitle from '../../src/components/shared/Subtitle';
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
      
      <Subtitle>Selected Publications</Subtitle>

      <Paragraph>
      <br /><b><a href="./giving.pdf">Giving and Receiving: Reciprocal Review Exchange 
          in Online Fanfiction Communities</a></b>.
        Ruoxi Shang, Zile Xiao, Jenna Frens, Cecilia Aragon. In Companion Publication of the 2021 Conference on Computer Supported Cooperative Work and Social Computing. (CSCW'21)
      </Paragraph>

      <Paragraph>
      <b>Machine learning powered software for accurate prediction of biogas production: A case study on industrial-scale Chinese production data</b>. Djavan De Clercq, Devansh Jalota, Ruoxi Shang, Kunyi Ni, Zhuxin Zhang, Areeb Khan, Zongguo Wen, Luis Caicedo, Kai Yuan. Journal of Cleaner Production. 2019.
      </Paragraph>

      <Subtitle>Work under review</Subtitle>

      <Paragraph>
      <br /><b>Understanding Lay Users' Needs of Counterfactual Explanations for Everyday Recommendations</b>. Ruoxi Shang, Kevin Feng, Chirag Shah. Under review for the ACM Conference on Fairness, Accountability, and Transparency. (FAccT'22)
      </Paragraph>

    </Section>


    
  );
}


