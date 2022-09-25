import React from 'react';

import Header from '../Header';
import MainMovie from './MainMovie';
import MoviesLists  from './MoviesLists';
import Footer from '../Footer'

function App() {
  return (
    <>
      <Header />
      <MainMovie />
      <MoviesLists />
      <Footer />
    </>
  );
}

export default App;
