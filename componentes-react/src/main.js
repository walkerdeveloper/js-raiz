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

function ProdutoComponent({ item, onAddCarrinho }) {
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

function ListaProdutosComponet(props) {
    return (
        <div className="row loja">
            {props.children}
        </div>
    );
};

function CarrinhoItemComponent(props) {
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

function CarrinhoTotalComponent({ itens }) {

    function valorTotal(carrinhoItens) {
        return Object.values(carrinhoItens).reduce((acc, itemAtual) => acc += (itemAtual.preco * itemAtual.quantidade), 0);
    };

    return (
        <h6>Total: <strong>{`R$${valorTotal(itens)},00`}</strong> </h6>
    );
};

function CarrinhoComponent(props) {
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

function AppComponente() {
    const [carrinhoItens, addItemCarrinho] = React.useState({});

    function addCarrinho(produto) {
        if (!carrinhoItens[produto.id]) {
            addItemCarrinho({
                ...carrinhoItens,
                [produto.id]: {
                    ...produto,
                    quantidade: 1
                }
            });
        } else {
            addItemCarrinho({
                ...carrinhoItens,
                [produto.id]: {
                    ...produto,
                    quantidade: ++carrinhoItens[produto.id].quantidade
                }
            });
        }
    }

    function removeItemCarrinho(produtoId) {
        if (carrinhoItens[produtoId].quantidade <= 1) {
            delete carrinhoItens[produtoId];
            addItemCarrinho({ ...carrinhoItens })
        } else {
            addItemCarrinho({
                ...carrinhoItens,
                [produtoId]: {
                    ...carrinhoItens[produtoId],
                    quantidade: --carrinhoItens[produtoId].quantidade
                }
            });
        }
    }

    return (
        <React.Fragment>
            <div className="col-sm-8">
                <ListaProdutosComponet>
                    {produtosLista.map((produto, index) =>
                        <ProdutoComponent item={produto} onAddCarrinho={addCarrinho} key={`produto-${index}`} />)}
                </ListaProdutosComponet>
            </div>
            <div className="col-sm-4">
                <CarrinhoComponent itens={carrinhoItens} onRemoveItemCarrinho={removeItemCarrinho} />
            </div>
        </React.Fragment>
    );
};

ReactDOM.render(
    React.createElement(AppComponente),
    document.getElementById('app')
);