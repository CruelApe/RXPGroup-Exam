// Created this as a separate component to display a product
// and to be able to use by its parent list.

import React, { Component } from 'react'
import '../styles/Item.css'
import { Card, CardText, CardHeader, CardBody, Button } from 'reactstrap'
import { connect } from 'react-redux'
import { AddProductToCart } from '../actions/ProductActions'

class Item extends Component {

    // Event handler for button click "Add to cart"
    handleAddToCart = (id)=>{
        this.props.addProductToCart(id); 
    }

    render() {
        return this.props.products.map(product => {
            return(
                <div key={product.Id} >
                    <Card body inverse className="item-card">
                        <CardHeader>{product.Name}</CardHeader>
                        <img className="item-image" src={product.Image} alt={product.Name} />
                        <CardBody>
                            <CardText>{product.PriceDisplay}</CardText>
                            <Button onClick={()=>{this.handleAddToCart(product.Id)}}>Add to cart</Button>
                        </CardBody>
                    </Card>
                </div>                 
            )
        })
    }
}

// The properties to be used by this component.
const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

// The properties to be sent by the components caller.
const mapDispatchToProps = (dispatch) => {
    
    return{
        addProductToCart: (id) => { dispatch(AddProductToCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);