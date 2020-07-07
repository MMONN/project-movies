import React, { useContext } from 'react'
import '../css/Contentcss.css'
import { MovieContext } from '../store/MovieProvider';
// import { Header } from './stlyed';

function Content(props) {

      const img = `https://image.tmdb.org/t/p/w200${props.item.poster_path}`;
      const { cart, setCart } = useContext(MovieContext);

      const increment = () => {
            if (cart.length === 0) {
                  setCart([props.item])
            } else {
                  const chekCart = cart.find((data) => data.id === props.item.id) //.find is method array return ค่ามาเลย ถ้าไม่มีค่า จะ return undifind or null
                  if (chekCart === undefined) {
                        return setCart(prevState => { //หมายความว่า ให้เอา state ก่อนหน้า แล้วคอยทำการ สิ่งที่เราต้องการ
                              const newCart = [...prevState] //เอาค่า state ที่เคยมี ใส่ใน cart 
                              newCart.push(props.item)
                              return newCart
                        })
                  }
            }
      };

      return (
            <div className="box-movie">
                  <div className="image">
                        <img alt={props.item.title} src={img} className="img-product"></img>
                  </div>

                  <div className="title">
                        <span className="title">
                              {props.item.title}
                        </span>
                  </div>

                  <div className="release">
                        <span className="release-date">
                              <p className="topic">Release :</p>
                              <p>  {props.item.release_date}</p>
                        </span>
                        <span className="popula">
                              <p className="topic">Popularity :</p>
                              <p>  {props.item.popularity}</p>
                        </span>
                  </div>

                  <div className="overview">
                        <p className="topic">overview : </p>
                        <p className="text">{props.item.overview}</p>
                  </div>

                  <div className="footer">
                        <span className="price">
                              <p >Price:{props.item.price}$</p>
                        </span>
                        <button onClick={increment} className="add"> Add to Cart </button>
                  </div>
            </div>
      )
}

export default Content;