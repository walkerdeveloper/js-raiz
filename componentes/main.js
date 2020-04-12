const produtos = [
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

const carrinhoItens = {

    'bbc123': {
        id: 'bbc123',
        nome: 'JSRaiz para Node',
        preco: 1200,
        quantidade: 1,
        descricao: 'O melhor curso de todos',
        imagem: 'http://lorempixel.com/400/200' 
    },

    'cbc123': {
        id: 'cbc123',
        nome: 'Programação funcional com JS',
        preco: 500,
        quantidade: 2,
        descricao: 'O melhor funcional de todos',
        imagem: 'http://lorempixel.com/400/200' 
    }
}


function renderizaProduto(produto){
    return `
        <div class="col-sm-4 mb-3">
            <div class="card">
                <div class="card loja__item">
                    <img class="card-img-top" src="${produto.imagem}" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <small>R$${produto.preco},00</small>
                        <p class="card-text">${produto.descricao}</p>
                        <button href="#" data-value="300" class="btn btn-primary">Adicionar</button>
                    </div>
                </div>
            </div>
        </div>
    `
};

function renderizaProdutos(){
    return produtos.map(produto => renderizaProduto(produto)).join('');
};

function renderizaItemCarrinho(item){
    return `
        <div class="card carrinho__item">
            <div class="card-body">
                <h5 class="card-title">${item.nome}</h5>
                <p class="card-text">Preço unidade: R$${item.preco},00 | Quantidade: ${item.quantidade}</p>
                <p class="card-text">Valor: R$${item.preco * item.quantidade},00</p>
                <button href="#" data-value="300" class="btn btn-danger btn-sm">Adicionar</button>
            </div>
        </div>
    `
}

function renderizaCarrinho(){
    let html = '';
    for(produtoId in carrinhoItens){
        html += renderizaItemCarrinho(carrinhoItens[produtoId]);
    }
    return html;
}

document.querySelector('.loja').innerHTML = renderizaProdutos();
document.querySelector('.carrinho__itens').innerHTML = renderizaCarrinho();
renderizaCarrinho()