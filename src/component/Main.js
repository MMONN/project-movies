import React, { useContext } from 'react';
import { MovieContext } from '../store/MovieProvider';
import Content from './Content';
import Header from './Header';
export default function Main() {
      const {showMovies} = useContext(MovieContext)
      return (
            <>
                  <div className="App">
                        <Header />
                        {showMovies.map((item) => {
                              return (
                                    <Content key={item.id} item={item} />
                              )
                        })
                        }
                  </div>

            </>
      )
}