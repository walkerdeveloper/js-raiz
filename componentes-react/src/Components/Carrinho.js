import React from 'react';
import CarrinhoItemComponent from './CarrinhoItem';
import CarrinhoTotalComponent from './CarrinhoTotal'

export default function CarrinhoComponent(props) {
    return (

        <React.Fragment>
            <div className="carrinho">
                {Object.values(props.itens).map((carrinhoItem, index) =>
                    <CarrinhoItemComponent item={carrinhoItem} key={`item-carrinho-${index}`} onRemoveItemCarrinho={props.onRemoveItemCarrinho} />
                )}
            </div>
            <div className="carrinho__total mt-2 p-3">
                <CarrinhoTotalComponent itens={props.itens} />
            </div>
        </React.Fragment>
    );
};