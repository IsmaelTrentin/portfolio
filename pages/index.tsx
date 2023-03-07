import { Bio } from '../sections/Bio';
import { createStyles } from '@mantine/core';
import { Languages } from '../sections/Languages';
import { Main } from '../sections/Main';
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

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.main}>
      <div className={classes['scroll-progress-wrapper']}>
        <ScrollProgress />
      </div>
      <Main />
      <Bio />
      <Languages />
    </div>
  );
};

export default Home;
