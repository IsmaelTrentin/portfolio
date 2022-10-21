import { Bio } from '../sections/Bio';
import { Main } from '../sections/Main';
import type { NextPage } from 'next';
import { createStyles } from '@mantine/core';

const useStyles = createStyles(() => ({
  'main': {}
}));

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.main}>
      <Main />
      <Bio />
    </div>
  );
};

export default Home;