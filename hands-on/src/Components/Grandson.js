import React from 'react';

export default function GrandsonComponent({ product }) {
    return (
        <React.Fragment >

            <h5 className="card-text">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{`R$${product.price}`}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>

        </React.Fragment>
    )
}