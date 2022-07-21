import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import PuzzleHolder from './PuzzleHolder.jpeg';

const CartList = ({ item }) => {

    const { name, price } = item;
    
    return (
        <div> 
            <h1>{{name}}</h1>
        </div>
     );
}
 
export default CartList;