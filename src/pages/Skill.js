import React from 'react';

import Main from '../layouts/Main';

import Skills from '../components/Resume/Skills';

import { skills, categories } from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Skills: () => <Skills skills={skills} categories={categories} />,

};

const Skill = () => (
  <Main title="Skill">
    <article className="post" id="resume">
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
    </article>
  </Main>
);

export default Skill;
