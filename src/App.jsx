import { useContext } from 'react';

import { ThemeProvider } from 'styled-components';

import Header from './components/Header/Header';
import Calculator from './components/Calculator/Calculator';

import { defaultSkin, minimalSkin, retroSkin } from './styles/Variables.styled';
import { ResetStyle } from './styles/Reset.styled';
import { BaseStyle } from './styles/Base.styled';
import { LayoutStyle } from './styles/Layout.styled';
import { GlobalStyles } from './styles/Globals.styled';

import { SkinContext } from './contexts/skin';


function App() {
  const { currentSkin } = useContext(SkinContext);
  let skin = null;

  switch(currentSkin) {
    case 'minimal':
      skin = minimalSkin;
      break;
    case 'retro':
      skin = retroSkin;
      break;
    default:
      skin = defaultSkin;
      break;
  }

  return (
    <ThemeProvider theme={skin}>
      <ResetStyle />
      <BaseStyle />
      <LayoutStyle />
      <GlobalStyles />

      <div className="wrapper">
        <Header />

        <div className="container">
          <Calculator />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
