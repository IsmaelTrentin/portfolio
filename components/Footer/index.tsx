import Link from 'next/link';
import { Anchor, Container, createStyles, Group } from '@mantine/core';
import { IconTriangle } from '@tabler/icons-react';

const useStyles = createStyles(theme => ({
  footer: {
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    backgroundColor: theme.colors.gray[0],
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterProps {
  links: { link: string; label: string }[];
}

export const Footer: React.FC<FooterProps> = ({ links }) => {
  const { classes } = useStyles();
  const items = links.map(link => (
    <Link
      href={link.link}
      target="_blank"
      key={link.label}
    >
      <Anchor<'a'>
        color="dimmed"
        href={link.link}
        target="_blank"
        size="sm"
      >
        {link.label}
      </Anchor>
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <IconTriangle
          size={28}
          strokeWidth={1}
        />
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
};
