import axios from 'axios';
import { useContext, useEffect, useReducer, useState } from 'react';
import { useParams }  from 'react-router-dom'
import {Badge, ListGroup, ListGroupItem} from 'react-bootstrap'
import Ratings from '../Rating';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import { Store } from '../store';


const reducer = (state, action) => {
    switch(action.type){
        case 'FETCH_REQUEST':
            return {...state, loading: true};
        case 'FETCH_SUCCESS':
            return {...state, product: action.payload, loading: false};
        case 'FETCH_FAIL':
            return {...state, loading: false, error: action.payload}
        default:
            return state;
    }}



function ProductScreen(){
    const params = useParams();
    const { slug } = params;
   

    const [{loading, error, product}, dispatch] = useReducer(reducer, 
        {product:[],
        loading: true,
        error: ''});

    useEffect(() => {
        const fetchData = async () => {
            dispatch({type: 'FETCH_REQUEST'});
            try{
                const result = await axios.get(`/api/products/slug/${slug}`)
                dispatch({type: 'FETCH_SUCCESS', payload: result.data});
            }
            catch(error){
                dispatch({type: 'FETCH_FAIL', payload: error.message})
            }
        };
        fetchData();
    }, [slug]);

    const {state, dispatch: cxtDispatch} = useContext(Store)

    function addToCart(){
        cxtDispatch({type: 'CART_ADD_ITEM', payload: {...product, quantity: 1}})
    }

   

    return (
        loading ? (<div>Loading....</div>) :
        error ? (<div>{error}</div>)
        :
        (<div>
            <Row>
                <Col md={6}>
                    <img src={product.image}
                    alt={product.name}
                    className="img-large" />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Helmet>
                            <title>{product.name}</title>
                            </Helmet>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Ratings rating={product.rating} numReviews={product.numReviews} />
                        </ListGroup.Item>
                        <ListGroup.Item>
                           Price : {product.price}
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup.Item>
                           Description: {product.description}
                        </ListGroup.Item>
                </Col>
                <Col md={3}>
                    <div className="card">
                        <div className="card-body">
                            <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product.price}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock >0 ?
                                        <Badge bg="success">In Stock</Badge>
                                        :
                                        <Badge bg="danger">Sold Out</Badge>

                                        }
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            {
                                product.countInStock > 0 &&
                                <ListGroup.Item>
                                <div className="d-grid">
                                    <Button onClick={addToCart}>Add to cart</Button>
                                </div>
                                </ListGroup.Item>
                    
                            }
                            </ListGroup>
                        </div>
                    </div>
                </Col>
            </Row>

        </div>)
    )

}

export default ProductScreen;