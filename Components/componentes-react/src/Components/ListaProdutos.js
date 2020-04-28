import React from 'react';

export default function ListaProdutosComponet(props) {
    return (
        <div className="row loja">
            {props.children}
        </div>
    );
};