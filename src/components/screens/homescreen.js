



import { useEffect,useReducer,useState } from 'react';
import axios from 'axios'
import data from '../data'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Product from '../Product';


const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_REQUEST':
            return {...state, loading: true};
        case 'FETCH_SUCCESS':
            return {...state, products: action.payload, loading: false};
        case 'FETCH_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state;

    }
}

function HomeScreen(){
    //const [products, setProducts] = useState([]);
    const [{loading, error, products}, dispatch] = useReducer(reducer, 
        {products:[],
        loading: true,
        error: ''});

    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: 'FETCH_REQUEST'});
            try{
                const result = await axios.get('/api/products')
                dispatch({type: 'FETCH_SUCCESS', payload: result.data.products});
            }
            catch(error){
                dispatch({type: 'FETCH_FAIL', payload: error.message})
            }
           
            // setProducts(result.data.products);
        }
        fetchData();
    }, []);

    return (
        <div className="container">
           <h4>Featured Products</h4>
           <div className="products">
           <Row>
            {
                products.map((product) => (
                <Col key={product.slug} sm={6} md={4} lg={6} className="mb-3">
                <Product product={product} />
              
                </Col>

            ))}
            </Row>
            </div>
        </div>
        )
    }

    export default HomeScreen