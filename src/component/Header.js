import React, { useState, useContext } from 'react';
import '../css/Headercss.css';
import cart_img from '../img/cart.png'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MovieContext } from '../store/MovieProvider';
import { Text } from '../stlyed/stlyed'

function Header(props) {
      const [searchString, setSearchString] = useState('');
      const { cart, movies, setShowMovies } = useContext(MovieContext);


      const handleSearch = (e) => {
            setSearchString(e);
            search(e);
      }

      const search = (value) => {
            const searchedMovie = [];
            let tempMovie = [];
            if (value.length > 0) {
                  for (let item of movies) {
                        let checkData = item.title.toLowerCase().indexOf(value.toLowerCase())
                        if (checkData >= 0) {
                              searchedMovie.push(item)
                        }
                  }
                  tempMovie = searchedMovie
            } else {
                  tempMovie = movies
            }
            setShowMovies(tempMovie);
      }

      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      return (
            <div className="Header">
                  <Text logo>MOVIES</Text>
                  <div className="manage">
                        <div className="search">
                              <input
                                    type="text"
                                    value={searchString}
                                    onChange={(e) => handleSearch(e.target.value)}
                                    placeholder="search..."
                              />
                        </div>

                        <div onClick={handleShow} className="cart">
                              <img width="20px" height="20px" alt="" src={cart_img} />
                              <Text numCount>{cart.length}</Text>
                        </div>
                  </div>



                  <Modal show={show} onHide={handleClose} className="test">
                        <Modal.Header closeButton>
                              <Modal.Title>Product List</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                              <div>
                                    {cart.map((movie, index) => {
                                          return (
                                                <div key={movie.id}>
                                                      <div className="productList" >
                                                            <>
                                                                  <img alt={movie.title} src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} />
                                                                  <Text cart>{movie.title}</Text>
                                                            </>

                                                            <div className="cart-prices">
                                                                  <Text cart>{movie.price}$</Text>
                                                            </div>
                                                      </div>

                                                </div>
                                          )
                                    })
                                    }
                              </div>
                        </Modal.Body>
                        <Modal.Footer>
                              <Button variant="primary" onClick={handleClose}> OK</Button>
                        </Modal.Footer>
                  </Modal>
            </div>
      )
}

export default Header;