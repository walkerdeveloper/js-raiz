const produtosLista = [
    {
        id: 'abc123',
        nome: 'JSRaiz para FW',
        preco: 300,
        descricao: 'O melhor curso do mundo',
        imagem: 'http://lorempixel.com/400/200' 
    },
    {
        id: 'bbc123',
        nome: 'JSRaiz para Node',
        preco: 1200,
        descricao: 'O melhor curso de todos',
        imagem: 'http://lorempixel.com/400/200' 
    },
    {
        id: 'cbc123',
        nome: 'Programação funcional com JS',
        preco: 500,
        descricao: 'O melhor funcional de todos',
        imagem: 'http://lorempixel.com/400/200' 
    }
];

function ProdutoComponent(props){
    return(
        React.createElement('div', { className: 'col-sm-4 mb-3'},
                React.createElement('div', { className: 'card loja__item'},
                    React.createElement('img', { className: 'card-img-top', src:props.item.imagem}),
                    React.createElement('div', { className: 'card-body' },
                        React.createElement('h5', { className: 'card-title'}, props.item.nome),
                        React.createElement('small', null, props.item.descricao),
                        React.createElement('p', { className: "card-text" }, `R$${props.item.preco},00`),
                        React.createElement('button', { className: "btn btn-primary", onClick: props.onAddCarrinho }, 'Adicionar')
                )   
            )
        )
    );
};

function ListaProdutosComponet(props){
    return (
            React.createElement('div', { className: 'row loja'},
                props.itens.map(produto => React.createElement(ProdutoComponent, { item: produto, onAddCarrinho: props.onAddCarrinho }))
        )   
    );
};

function CarrinhoItemComponent(item){
    return(
        React.createElement('div', { className: 'carrinho__itens'},
            React.createElement('div', { className: 'card carrinho__item'},
                React.createElement('div', { className: 'card-body'},
                    React.createElement('h5', { className: 'card-title'}, item.nome),
                    React.createElement('p', { className: "card-text" }, `Preço unidade: R$${item.preco},00 | Quantidade: ${item.quantidade}`),
                    React.createElement('p', { className: "card-text" }, `Valor: R$${item.preco * item.quantidade},00`),
                    React.createElement('button', { className: "btn btn-danger btn-sm" }, 'Remover')
                )
            )
        )
    );
};

function CarrinhoTotalComponent(itens){

    function valorTotal(carrinhoItens){
        console.log(typeof(carrinhoItens))
        return Object.values(carrinhoItens).reduce((acc, itemAtual) => acc += (itemAtual.preco * itemAtual.quantidade), 0);
    };

    return(
        React.createElement('h6', null, 'Total: ',
            React.createElement('strong', null, `R$${valorTotal(itens)},00`)
        )
    );
};

function CarrinhoComponent(props){
    let arr = Object.values(props.itens);
    return (
        React.createElement('div', { className: 'carrinho'},
            arr.map( item => React.createElement(CarrinhoItemComponent, item) ),
            React.createElement('div', { className: 'carrinho__total mt-2 p-3"'},
                React.createElement(CarrinhoTotalComponent, props.itens)
            )
        )
    );
};

function AppComponente(){
    const carrinhoItens = {
        'bbc123': {
            id: 'bbc123',
            nome: 'JSRaiz para Node',
            preco: 1200,
            descricao: 'O melhor curso de todos',
            imagem: 'http://lorempixel.com/400/200',
            quantidade: 1
        },
        'cbc123': {
            id: 'cbc123',
            nome: 'Programação funcional com JS',
            preco: 500,
            descricao: 'O melhor funcional de todos',
            imagem: 'http://lorempixel.com/400/200',
            quantidade: 2
        }
    }

    function addCarrinho(){
        console.log('Oi produto');
    }
    return (
            React.createElement(React.Fragment, null,
                React.createElement('div', { className: 'col-sm-8'}, 
                React.createElement(ListaProdutosComponet, { itens: produtosLista, onAddCarrinho: addCarrinho })
            )
            ,
            React.createElement('div', { className: 'col-sm-4'}, 
                React.createElement(CarrinhoComponent, { itens: carrinhoItens })
            )   
        )
    );
};

ReactDOM.render(
    React.createElement(AppComponente),
    document.getElementById('app')
);