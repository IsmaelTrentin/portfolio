import React, { useEffect, useState } from 'react';
import { materialDark as theme } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useStyles } from './styles';

const data = `// Me in 16 lines 🔍
{
  name: 'Ismael Trentin',
  gender: 'male',
  nationality: 'Swiss',
  age: ${Math.floor(
    (Date.now() - 1027807200000) / 1000 / 60 / 60 / 24 / 30.5 / 12
  )},
  email: 'ismaeltrentin@gmail.com',
  languages: ['Italian', 'English']
  pLanguages: [
    'TypeScript',
    'Java',
    'Rust'
  ],
  loves: 'Hiking ⛰️',
  dislikes: 'Hot weather 🥵'
}`;

const TICK_RATE_MS = 23;
const TICK_START_DELAY = 200;

export const InfoCode: React.FC<Record<string, unknown>> = () => {
  const { classes } = useStyles();
  const [currentChar, setCurrentChar] = useState(0);
  const [currentLine, setCurrentLine] = useState(1);
  const [text, setText] = useState('');

  useEffect(() => {
    let intervalId: NodeJS.Timer;
    const handleTick = () => {
      setCurrentChar(ps => {
        if (ps === data.length - 1) {
          clearInterval(intervalId);
        }
        return ps + 1;
      });
    };

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(handleTick, TICK_RATE_MS);
    }, TICK_START_DELAY);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    data.charAt(currentChar) === '\n' && setCurrentLine(ps => ps + 1);

    let newText = data.substring(0, currentChar);
    if (currentChar < data.length - 1) {
      newText += '|';
    }
    setText(newText);
  }, [currentChar]);

  return (
    <SyntaxHighlighter
      className={classes.main}
      customStyle={{
        maxHeight: 22.5 * 2 + currentLine * 27,
        overflow: 'hidden',
      }}
      language="javascript"
      showLineNumbers={true}
      style={theme}
    >
      {text}
    </SyntaxHighlighter>
  );
};
