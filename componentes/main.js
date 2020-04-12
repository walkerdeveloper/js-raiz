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

const carrinhoItens = {};


function renderizaProduto(produto, index){
    return `
        <div class="col-sm-4 mb-3">
            <div class="card">
                <div class="card loja__item">
                    <img class="card-img-top" src="${produto.imagem}" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${produto.nome}</h5>
                        <small>R$${produto.preco},00</small>
                        <p class="card-text">${produto.descricao}</p>
                        <button data-index="${index}" href="#" data-value="300" class="btn btn-primary btn-add">Adicionar</button>
                    </div>
                </div>
            </div>
        </div>
    `
};

function renderizaProdutos(){
    return produtos.map((produto, ind) => renderizaProduto(produto, ind),).join('');
};

function renderizaItemCarrinho(item){
    return `
        <div class="card carrinho__item">
            <div class="card-body">
                <h5 class="card-title">${item.nome}</h5>
                <p class="card-text">Preço unidade: R$${item.preco},00 | Quantidade: ${item.quantidade}</p>
                <p class="card-text">Valor: R$${item.preco * item.quantidade},00</p>
                <button href="#" data-value="300" class="btn btn-danger btn-sm">Remover</button>
            </div>
        </div>
    `
}

function renderizaCarrinho(){
    let html = '';
    for(produtoId in carrinhoItens){
        html += renderizaItemCarrinho(carrinhoItens[produtoId]);
    }
    document.querySelector('.carrinho__itens').innerHTML = html;
}

document.body.addEventListener('click', (event) =>{
    if(event.target.classList.contains('btn-add')){
        const index = event.target.getAttribute('data-index');
        const produto = produtos[event.target.getAttribute('data-index')];

        if(!carrinhoItens[produto.id]){
            carrinhoItens[produto.id] = produto;
            carrinhoItens[produto.id].quantidade = 1;          
        } 

        renderizaCarrinho();
    }
})

document.querySelector('.loja').innerHTML = renderizaProdutos();