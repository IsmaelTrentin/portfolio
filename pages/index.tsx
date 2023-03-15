import * as localizer from '../locales/localizer';
import i18next from 'i18next';
import { createStyles } from '@mantine/core';
import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { Main } from '../sections/Main';
import { ProjectData } from '../@types';
import { Projects } from '../sections/Projects';
import { readFile } from 'fs/promises';
import { ScrollToTop } from '../components/ScrollToTop';
import { useEffect } from 'react';
import { useLocaleStore } from '../stores/locale';
import { useScrollIntoView } from '@mantine/hooks';
import { useScrollY } from '../hooks/useScrollY';

import type { NextPage } from 'next';

localizer.setup();

const useStyles = createStyles(() => ({
  main: {},
  'language-switcher-wrapper': {
    position: 'fixed',
    bottom: 0,
    left: '50%',
    width: 400,
    zIndex: 9999,
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
  },
}));

interface Props {
  projects: ProjectData[];
}

const Home: NextPage<Props> = ({ projects }) => {
  const { classes } = useStyles();
  const locale = useLocaleStore(s => s.locale);
  const scrollY = useScrollY();
  const { scrollIntoView, targetRef } = useScrollIntoView<HTMLDivElement>({
    duration: 555,
  });

  const handleClickScrollToTop = () => scrollIntoView();

  useEffect(() => {
    i18next.changeLanguage(locale);
  }, [locale]);

  return (
    <div
      className={classes.main}
      ref={targetRef}
    >
      <div
        data-raise={scrollY < 70}
        className={classes['language-switcher-wrapper']}
      >
        <LanguageSwitcher />
      </div>
      <ScrollToTop onClick={handleClickScrollToTop} />
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
