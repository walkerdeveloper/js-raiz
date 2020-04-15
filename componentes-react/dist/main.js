const produtosLista = [{
  id: 'abc123',
  nome: 'JSRaiz para FW',
  preco: 300,
  descricao: 'O melhor curso do mundo',
  imagem: 'http://lorempixel.com/400/200'
}, {
  id: 'bbc123',
  nome: 'JSRaiz para Node',
  preco: 1200,
  descricao: 'O melhor curso de todos',
  imagem: 'http://lorempixel.com/400/200'
}, {
  id: 'cbc123',
  nome: 'Programação funcional com JS',
  preco: 500,
  descricao: 'O melhor funcional de todos',
  imagem: 'http://lorempixel.com/400/200'
}];

function ProdutoComponent({
  item,
  onAddCarrinho
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "col-sm-4 mb-3"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card loja__item"
  }, /*#__PURE__*/React.createElement("img", {
    className: "card-img-top",
    src: item.imagem
  }), /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "card-title"
  }, item.nome), /*#__PURE__*/React.createElement("small", {
    className: ""
  }, item.descricao), /*#__PURE__*/React.createElement("p", {
    className: "card-text"
  }, `R$${item.preco}`), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-primary",
    onClick: onAddCarrinho.bind(null, item)
  }, "Adicionar"))));
}

;

function ListaProdutosComponet(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "row loja"
  }, props.children);
}

;

function CarrinhoItemComponent(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "carrinho__itens"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card carrinho__item"
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/React.createElement("h5", {
    className: "card-title"
  }, props.item.nome), /*#__PURE__*/React.createElement("p", {
    className: "card-text"
  }, `Preço unidade: R$${props.item.preco},00 | Quantidade: ${props.item.quantidade}`), /*#__PURE__*/React.createElement("p", {
    className: "card-text"
  }, `Valor: R$${props.item.preco * props.item.quantidade},00`), /*#__PURE__*/React.createElement("button", {
    className: "btn btn-danger btn-sm",
    onClick: props.onRemoveItemCarrinho.bind(null, props.item.id)
  }, "Remover"))));
}

;

function CarrinhoTotalComponent({
  itens
}) {
  function valorTotal(carrinhoItens) {
    return Object.values(carrinhoItens).reduce((acc, itemAtual) => acc += itemAtual.preco * itemAtual.quantidade, 0);
  }

  ;
  return /*#__PURE__*/React.createElement("h6", null, "Total: ", /*#__PURE__*/React.createElement("strong", null, `R$${valorTotal(itens)},00`), " ");
}

;

function CarrinhoComponent(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "carrinho"
  }, Object.values(props.itens).map((carrinhoItem, index) => /*#__PURE__*/React.createElement(CarrinhoItemComponent, {
    item: carrinhoItem,
    key: `item-carrinho-${index}`,
    onRemoveItemCarrinho: props.onRemoveItemCarrinho
  }))), /*#__PURE__*/React.createElement("div", {
    className: "carrinho__total mt-2 p-3"
  }, /*#__PURE__*/React.createElement(CarrinhoTotalComponent, {
    itens: props.itens
  })));
}

;

function AppComponente() {
  const [carrinhoItens, addItemCarrinho] = React.useState({});

  function addCarrinho(produto) {
    if (!carrinhoItens[produto.id]) {
      addItemCarrinho({ ...carrinhoItens,
        [produto.id]: { ...produto,
          quantidade: 1
        }
      });
    } else {
      addItemCarrinho({ ...carrinhoItens,
        [produto.id]: { ...produto,
          quantidade: ++carrinhoItens[produto.id].quantidade
        }
      });
    }
  }

  function removeItemCarrinho(produtoId) {
    if (carrinhoItens[produtoId].quantidade <= 1) {
      delete carrinhoItens[produtoId];
      addItemCarrinho({ ...carrinhoItens
      });
    } else {
      addItemCarrinho({ ...carrinhoItens,
        [produtoId]: { ...carrinhoItens[produtoId],
          quantidade: --carrinhoItens[produtoId].quantidade
        }
      });
    }
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "col-sm-8"
  }, /*#__PURE__*/React.createElement(ListaProdutosComponet, null, produtosLista.map((produto, index) => /*#__PURE__*/React.createElement(ProdutoComponent, {
    item: produto,
    onAddCarrinho: addCarrinho,
    key: `produto-${index}`
  })))), /*#__PURE__*/React.createElement("div", {
    className: "col-sm-4"
  }, /*#__PURE__*/React.createElement(CarrinhoComponent, {
    itens: carrinhoItens,
    onRemoveItemCarrinho: removeItemCarrinho
  })));
}

;
ReactDOM.render(React.createElement(AppComponente), document.getElementById('app'));
