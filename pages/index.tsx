import { createStyles } from '@mantine/core';
import { Main } from '../sections/Main';
import { ProjectData } from '../@types';
import { Projects } from '../sections/Projects';
import { readFile } from 'fs/promises';
import { ScrollProgress } from '../components/ScrollProgess';
import type { NextPage } from 'next';

const useStyles = createStyles(() => ({
  main: {},
  'scroll-progress-wrapper': {
    position: 'sticky',
    top: 0,
    left: 0,
    right: 0,
  },
}));

interface Props {
  projects: ProjectData[];
}

const Home: NextPage<Props> = ({ projects }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes['scroll-progress-wrapper']}>
        <ScrollProgress />
      </div>
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
