import { createStyles } from '@mantine/core';
import type { NextPage } from 'next'

const useStyles = createStyles((theme) => ({
  'main': {}
}));

const Home: NextPage = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.main}>
      Hello NextJS + MantineUI
    </div>
  );
};

export default Home;