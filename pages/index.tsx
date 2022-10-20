import { createStyles } from '@mantine/core';
import type { NextPage } from 'next'
import { Main } from '../sections/Main';

const useStyles = createStyles((theme) => ({
  'main': {}
}));

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.main}>
      <Main />
    </div>
  );
};

export default Home;