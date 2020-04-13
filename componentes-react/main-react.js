function ProdutoComponent(){
    return(
        React.createElement('div', { className: 'col-sm-4 mb-3'},
                React.createElement('div', { className: 'card loja__item'},
                    React.createElement('img', { className: 'card-img-top', src:"http://lorempixel.com/400/200"}),
                    React.createElement('div', { className: 'card-body' },
                        React.createElement('h5', { className: 'card-title'}, 'JSRaiz para FW'),
                        React.createElement('small', null, 'R$300,00'),
                        React.createElement('p', { className: "card-text" }, 'O melhor curso do mundo'),
                        React.createElement('button', { className: "btn btn-primary" }, 'Adicionar')
                )   
            )
        )
    );
};

function ListaProdutosComponet(){
    return (
            React.createElement('div', { className: 'row loja'},
                React.createElement(ProdutoComponent),
                React.createElement(ProdutoComponent),
                React.createElement(ProdutoComponent),
                React.createElement(ProdutoComponent),
                React.createElement(ProdutoComponent),
                React.createElement(ProdutoComponent)
        )   
    );
};

function CarrinhoItemComponent(){
    return(
        React.createElement('div', { className: 'carrinho__itens'},
            React.createElement('div', { className: 'card carrinho__item'},
                React.createElement('div', { className: 'card-body'},
                    React.createElement('h5', { className: 'card-title'}, 'JSRaiz para FW'),
                    React.createElement('p', { className: "card-text" }, 'Preço unidade: R$300,00 | Quantidade: 2'),
                    React.createElement('button', { className: "btn btn-danger btn-sm" }, 'Remover')
                )
            )
        )
    );
};

function CarrinhoTotalComponent(){
    return(
        React.createElement('h6', null, 'Total: ',
            React.createElement('strong', null, 'R$600,00')
        )
    );
};

function CarrinhoComponent(){
    return (
        React.createElement('div', { className: 'carrinho'},
            React.createElement(CarrinhoItemComponent),
            React.createElement('div', { className: 'carrinho__total mt-2 p-3"'},
                React.createElement(CarrinhoTotalComponent)
            )
        )
    );
};

function AppComponente(){
    return (
            React.createElement(React.Fragment, null,
                React.createElement('div', { className: 'col-sm-8'}, 
                React.createElement(ListaProdutosComponet)
            )
            ,
            React.createElement('div', { className: 'col-sm-4'}, 
                React.createElement(CarrinhoComponent)
            )   
        )
    );
};

ReactDOM.render(
    React.createElement(AppComponente),
    document.getElementById('app')
);