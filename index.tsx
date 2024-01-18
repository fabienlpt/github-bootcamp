import React from 'react';
import { createRoot } from 'react-dom/client';
import { Deck, DefaultTemplate, MarkdownSlideSet, defaultTheme } from 'spectacle';
import mdContent from './slides.md';


const Presentation = () => {
const customTheme = {
  ...defaultTheme,
  colors: {
    primary: '#f6f7f0',
    secondary: '#f6f7f0',
    tertiary: '#333333',
  },
  fonts: {
    header: 'Helvetica, sans-serif',
    text: 'Arial, sans-serif',
    monospace: 'Consolas, "Courier New", monospace'
  }
};

  return (
  <Deck template={() => <DefaultTemplate />} theme={customTheme}>
    <MarkdownSlideSet>{mdContent}</MarkdownSlideSet>
  </Deck>
)};

createRoot(document.getElementById('app')!).render(<Presentation />);
