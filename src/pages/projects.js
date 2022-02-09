import React from 'react';
import Section from '../components/Section';
import { VisuallyHidden } from '../components/VisuallyHidden';


export default function Projects() {

  return (
    <Section title="Projects">
      <Subtitle><b>Coming Soon...</b></Subtitle>

    </Section>
  );
}

function createSentenceEnd(months) {
  if (months === 0) {
    return '.';
  }

  if (months === 1) {
    return ' and 1 month.';
  }

  return ` and ${months} months.`;
}
