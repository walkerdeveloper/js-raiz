import React from 'react';

function valorTotal(carrinhoItens) {
    return Object.values(carrinhoItens).reduce((acc, itemAtual) => acc += (itemAtual.preco * itemAtual.quantidade), 0);
};

export default function CarrinhoTotalComponent({ itens }) {

    return (
        <h6>Total: <strong>{`R$${valorTotal(itens)},00`}</strong> </h6>
    );
};