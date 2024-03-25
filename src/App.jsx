
import { useState } from 'react';
import './App.css';

import ButtonWithStyledComponents from './components/ButtonWithStyledComponents';
import ButtonWithModuleCSS from './components/ButtonWithModuleCSS';
import ButtonWithClass from './components/ButtonWithClass';


const App = () => {

  return (
    <>
      <ButtonWithClass />
      <ButtonWithStyledComponents />
      <ButtonWithModuleCSS />
    </>
  )
}

export default App;
