import React from 'react';
import differenceInYears from 'date-fns/differenceInYears';
import differenceInMonths from 'date-fns/differenceInMonths';

import Section from '../components/Section';
import Paragraph from '../components/shared/Paragraph';
import { VisuallyHidden } from '../components/VisuallyHidden';
import { Split } from '../components/shared/Split';

const startDate = new Date(2013, 9, 1);

export default function Projects() {
  const today = new Date();

  const years = differenceInYears(today, startDate);
  const months = differenceInMonths(today, startDate) - years * 12;

  const firstPart = "";
  const secondPart = `Coming Soon`;

  return (
    <Section title="Projects">
      
      <VisuallyHidden>
        {secondPart}
      </VisuallyHidden>

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
