import React from 'react';
import './css/App.css';
import MovieProvider from './store/MovieProvider';
import Main from './component/Main'

function App() {
  return (
    <MovieProvider>
      <Main />
    </MovieProvider>
  )
}
export default App;
