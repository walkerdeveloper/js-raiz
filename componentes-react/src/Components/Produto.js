import React from 'react';

export default function ProdutoComponent({ item, onAddCarrinho }) {
    return (
        <div className="col-sm-4 mb-3">
            <div className="card loja__item" >
                <img className="card-img-top" src={item.imagem} />
                <div className="card-body">
                    <h5 className="card-title">{item.nome}</h5>
                    <small className="">{item.descricao}</small>
                    <p className="card-text">{`R$${item.preco}`}</p>
                    <button className="btn btn-primary" onClick={onAddCarrinho.bind(null, item)}>Adicionar</button>
                </div>
            </div>
        </div>
    );
};