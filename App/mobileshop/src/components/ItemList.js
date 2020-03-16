import React, { Component } from 'react';
import { CardDeck } from 'reactstrap'
import '../styles/ItemList.css';
import Item from './Item'

class ItemList extends Component{

    render(){
        return(
            <div className="box">
                <h3 className="center">Available Phones</h3>
                <CardDeck>
                    <Item />
                </CardDeck>
            </div>
        )
    }
}

export default ItemList;