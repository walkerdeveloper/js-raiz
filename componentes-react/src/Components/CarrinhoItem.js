import React from 'react';

export default function CarrinhoItemComponent(props) {
    return (

        <div className="carrinho__itens">
            <div className="card carrinho__item">
                <div className="card-body">
                    <h5 className="card-title">{props.item.nome}</h5>
                    <p className="card-text">{`Preço unidade: R$${props.item.preco},00 | Quantidade: ${props.item.quantidade}`}</p>
                    <p className="card-text">{`Valor: R$${props.item.preco * props.item.quantidade},00`}</p>
                    <button className="btn btn-danger btn-sm" onClick={props.onRemoveItemCarrinho.bind(null, props.item.id)}>Remover</button>
                </div>
            </div>
        </div>
    );
};