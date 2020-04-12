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

document.querySelector('.loja').innerHTML = renderizaProdutos();