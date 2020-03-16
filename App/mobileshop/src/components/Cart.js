import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardText, CardHeader, CardBody, Button } from 'reactstrap'
import { RemoveProductFromCart } from '../actions/CartActions'

class Cart extends Component {

    // Event handler for button click "Remove"
    handleRemoveFromCart = (id)=>{
        this.props.removeProductFromCart(id); 
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
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardBody>
                            <div style={{ display: 'flex',  justifyContent: 'space-between' }}>
                                <img width='25px' height='50px' src={product.Image} alt={product.Name} />
                                <span style={{ fontSize: 'calc(2px + 2vmin)' }}>{product.Name} - {product.PriceDisplay}</span>
                                <Button className="red" onClick={()=>{this.handleRemoveFromCart(product.Id)}}>Remove</Button>
                            </div>
                        </CardBody>
                    </Card>                      
                )
            })
        ) : <CardText>No items to display.</CardText>       

        return (
            <div>
                <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', marginTop: '20px', marginRight: '15px' }}>
                    <CardHeader style={{ backgroundColor: '#ff6d00' }}>Shopping Cart Total: { currentTotal }</CardHeader>
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
        removeProductFromCart: (id) => { dispatch(RemoveProductFromCart(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);