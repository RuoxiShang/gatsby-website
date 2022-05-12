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
      <Anchor href="https://camps.aptaracorp.com/ACM_PMS/PMS/ACM/FACCT22/106/3413b0c5-d102-11ec-a76e-16bb50361d1f/OUT/facct22-106.html">
      Understanding Lay Users' Needs of Counterfactual Explanations for Everyday Recommendations</b>. 
      Why Am I Not Seeing It? Understanding Users’ Needs for Counterfactual Explanations in Everyday Recommendations</Anchor>.Ruoxi Shang, K. J. Kevin Feng, and Chirag Shah. In 2022 ACM Conference on Fairness, Accountability, and Transparency (FAccT ’22)
      </Paragraph>

      <Paragraph>
      <br />
        <Anchor href="https://drive.google.com/file/d/1kBQ0hr0NB0ezOxey8rYjAonH71AU4_GH/view?usp=sharing">
          Giving and Receiving: Reciprocal Review Exchange in Online Fanfiction Communities</Anchor>.
        Ruoxi Shang, Zile Xiao, Jenna Frens, Cecilia Aragon. In Companion Publication of the 2021 Conference on Computer Supported Cooperative Work and Social Computing. (CSCW'21)
      </Paragraph>

      <Paragraph>
      <Anchor href="https://drive.google.com/file/d/1SNLLPRRzUCb7wv38IxNNnbKZEWDZjtvr/view?usp=sharing">
        Machine learning powered software for accurate prediction of biogas production: 
        A case study on industrial-scale Chinese production data</Anchor>. Djavan De Clercq, Devansh Jalota, 
        Ruoxi Shang, Kunyi Ni, Zhuxin Zhang, Areeb Khan, Zongguo Wen, Luis Caicedo, Kai Yuan. 
        Journal of Cleaner Production. 2019.<br /><br />
      </Paragraph>   
    
  
    </Section>


    
  );
}


