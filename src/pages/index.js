import React from 'react';
import Anchor from '../components/shared/Anchor'
import Section from '../components/Section';
import Paragraph from '../components/shared/Paragraph';

/*
export default function Index() {
  return (
    <Section title="About Me" keywords={['react', 'javascript', 'web']}>
      <Paragraph>
        I am from France, I{' '}
        <span role="img" aria-label="love">
          💖
        </span>{' '}
        crafting stuff in the Web. If I had to list my favorite tools and
        libraries in no particular order it would be: React, React Testing
        Library, TypeScript, Styled Components and GraphQL (I still love{' '}
        <abbr title="Backends for Frontends">BFF</abbr> pattern). The{' '}
        <abbr title="Keep it Simple, Stupid">KISS</abbr> principle is my mojo. I
        also try my best to act as an accessibility advocate.
      </Paragraph>
    </Section>
  );
}
*/

export default function Index() {
  return (
    <Section title="About Me" keywords={['react', 'javascript', 'web']}>
      <Paragraph>
        Hi, I’m Anna. 
        I am a Human-Computer Interaction (HCI) researcher and a 2nd year PhD student in 
        {' '}<Anchor href="https://www.hcde.washington.edu/">Human Centered Design & Engineering Department at University of Washington</Anchor>{''}. 
        My most recent work is about understanding 
        lay users' needs in why-not explanations for recommended content in everyday 
        intelligent applications.
        
        <br /><br />
        View my CV {' '}
        <Anchor href="https://drive.google.com/file/d/1EHLbdD1SdTskFIV5XDm7gPbVqfsfsEwG/view?usp=sharing">
        here
        </Anchor>
        
        <br /><br />
        Reach me at rxshang <b>at</b> uw <b>dot</b> edu

        </Paragraph>

    </Section>
  );
}
