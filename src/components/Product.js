import {Link} from 'react-router-dom'
import Ratings from './Rating';

function Product(props){
    const {product} = props

    return(
        <div className="product card text-center" key={product.slug}>
        <Link to={`/product/${product.slug}`} >
            <img className="card-img-top" src={product.image} alt={product.name} width="300" height="300"/>
        </Link>
        <div className="card-body">
        <Link to={`/product/${product.slug}`} >
            <h5 className="card-title">{product.name}</h5>
        </Link>
        <Ratings rating={product.rating} numReviews={product.numReviews}></Ratings>
        <p className="card-text">{product.price}</p>
        <a href="/" className="btn btn-primary text-align-center">Add to Cart</a>
        </div>
    </div>
    )
}

export default Product;