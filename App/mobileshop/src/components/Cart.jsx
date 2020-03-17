import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../styles/Cart.css'
import { IconButton } from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
import { Card, CardText, CardHeader, CardBody, Button, Container, Row, Col } from 'reactstrap'
import { RemoveProductFromCart, IncreaseProductFromCart, DecreaseProductFromCart } from '../actions/CartActions'

class Cart extends Component {

    // Event handler for button click "Remove"
    handleRemoveFromCart = (id)=>{
        this.props.removeProductFromCart(id); 
    }

    // Event handler for button click "Increase"
    handleIncreaseProductFromCart = (id)=>{
        this.props.increaseProductFromCart(id); 
    }

    // Event handler for button click "Decrease"
    handleDecreaseProductFromCart = (id)=>{
        this.props.decreaseProductFromCart(id); 
    }    

    render() {

        let numberFormat = new Intl.NumberFormat('en-AU', { 
            style: 'currency', 
            currency: 'AUD', 
            minimumFractionDigits: 2, 
        }); 

        let currentTotal = numberFormat.format(this.props.total)

        let productsInCart = this.props.products.length ?
        (  
            this.props.products.map(product => {
                return(
                    <div key={product.Id} >
                        <Card body inverse className="cart-card">
                            <CardBody>
                                <div className="cart-cardbody-div">
                                    <Container fluid={true}>
                                        <Row>
                                            <Col xs="auto">
                                                <img className="cart-image" src={product.Image} alt={product.Name} />
                                            </Col>
                                            <Col xs="5">
                                                <Row>
                                                    <span className="cart-product-name">{product.Name}</span>
                                                </Row>
                                                <Row>
                                                    <span className="cart-product-price">{product.PriceDisplay}</span>
                                                </Row>
                                            </Col>
                                            <Col xs="auto">
                                                <Row>
                                                    <b className="cart-product-quantity-label">Quantity:</b> 
                                                    <IconButton aria-label="increase" size="small" onClick={()=>{this.handleIncreaseProductFromCart(product.Id)}}>
                                                        <Icon color="primary">add_circle</Icon>
                                                    </IconButton>
                                                    <b className="cart-product-quantity">{product.Quantity}</b>
                                                    <IconButton aria-label="decrese" size="small" onClick={()=>{this.handleDecreaseProductFromCart(product.Id)}}>
                                                        <Icon color="secondary">remove_circle</Icon>
                                                    </IconButton>
                                                </Row>
                                                <Row>
                                                    <Button className="red" onClick={()=>{this.handleRemoveFromCart(product.Id)}}>Remove</Button>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </CardBody>
                        </Card>
                    </div>                      
                )
            })
        ) : <CardText>No items to display.</CardText>       

        return (
            <div>
                <Card body inverse className="cart-main-card">
                    <CardHeader className="cart-cardheader">Shopping Cart Total: { currentTotal }</CardHeader>
                    <CardBody>
                        { productsInCart }
                    </CardBody>
                </Card>
            </div> 
        );
    }
}

// The properties to be used by this component.
const mapStateToProps = (state) => {
    return{
        products: state.addedProducts,
        total: state.total
    }
}

// The properties to be sent by the components caller.
const mapDispatchToProps = (dispatch) => {
    
    return{
        removeProductFromCart: (id) => { dispatch(RemoveProductFromCart(id))},
        increaseProductFromCart: (id) => { dispatch(IncreaseProductFromCart(id))},
        decreaseProductFromCart: (id) => { dispatch(DecreaseProductFromCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);