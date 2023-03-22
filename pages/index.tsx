import * as localizer from '../locales/localizer';
import { createStyles } from '@mantine/core';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { Main } from '../sections/Main';
import { ProjectData } from '../@types';
import { Projects } from '../sections/Projects';
import { readFile } from 'fs/promises';
import { ScrollToTop } from '../components/ScrollToTop';
import { useMediaQuery, useScrollIntoView } from '@mantine/hooks';
import { useScrollY } from '../hooks/useScrollY';

import type { NextPage } from 'next';

localizer.setup();

const useStyles = createStyles(() => ({
  'language-switcher-wrapper': {
    position: 'fixed',
    bottom: 0,
    left: '50%',
    width: 400,
    zIndex: 999,
    transform: 'translateX(-50%)',
    '& > *': {
      transform: 'translateY(85%)',
      transition: 'transform 150ms ease',
    },
    '&[data-raise="true"] > *': {
      transform: 'translateY(50%)',
    },
    '&:hover > *': {
      transform: 'translateY(-1rem)',
    },
    '@media (max-width: 391px)': {
      width: '100vw',
    },
  },
}));

interface Props {
  projects: ProjectData[];
}

const Home: NextPage<Props> = ({ projects }) => {
  const { classes } = useStyles();
  const scrollY = useScrollY();
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    duration: 555,
  });
  const matchHideScrollToTop = useMediaQuery('(min-width: 645px)');

  const handleClickScrollToTop = () => scrollIntoView();

  return (
    <div ref={targetRef}>
      <div
        data-raise={scrollY < 70}
        className={classes['language-switcher-wrapper']}
      >
        <LanguageSwitcher />
      </div>
      {matchHideScrollToTop && <ScrollToTop onClick={handleClickScrollToTop} />}
      <Main />
      <Projects projects={projects} />
    </div>
  );
};

export async function getStaticProps() {
  const data = await readFile('./data/projects.json');
  const parsed = JSON.parse(data.toString());

  return {
    props: {
      projects: parsed as ProjectData[],
    },
  };
}

export default Home;
