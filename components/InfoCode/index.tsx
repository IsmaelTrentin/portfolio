import React, { useEffect, useState } from 'react';
import { LocaleKeys } from '../../locales/localizer';
import { materialDark as theme } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { useLocaleStore } from '../../stores/locale';
import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';

const TICK_RATE_MS = 23;
const TICK_START_DELAY = 200;

// TODO: refactor with bool for when reached end of infoData.
// shortest translation will have precedence
// (causes longer translations to instantly reach the end)

const age = Math.floor(
  (Date.now() - 1027807200000) / 1000 / 60 / 60 / 24 / 30.5 / 12
);

export const InfoCode: React.FC<Record<string, unknown>> = () => {
  const { classes } = useStyles();
  const [currentChar, setCurrentChar] = useState(0);
  const [currentLine, setCurrentLine] = useState(1);
  const { t } = useTranslation();
  const locale = useLocaleStore(s => s.locale);
  const [infoData, setInfoData] = useState(() =>
    t<LocaleKeys>('infoCode', { age })
  );
  const [text, setText] = useState('');

  useEffect(() => {
    setInfoData(() => t<LocaleKeys>('infoCode', { age }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale]);

  useEffect(() => {
    let intervalId: NodeJS.Timer;
    const handleTick = () => {
      setCurrentChar(ps => {
        if (ps >= infoData.length - 1) {
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
  }, [infoData]);

  useEffect(() => {
    infoData.charAt(currentChar) === '\n' && setCurrentLine(ps => ps + 1);

    let newText = infoData.substring(0, currentChar);

    if (currentChar < infoData.length - 1) {
      newText += '|';
    }
    setText(newText);
  }, [currentChar, infoData]);

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
