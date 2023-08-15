import Item from "./ItemProduto"
import "./Produtos.css"
const Produtos = (props) => {

    return (
        <div className="div-produtos">
            {props.produtos.map((item, index) => {
                return <Item
                    id={item.id}
                    key={index}
                    confirmacao={item.confirmacao}
                    sacola={props.sacola}
                    carrinho={props.carrinho}
                    imagem={item.img}
                    nome={item.nome}
                    subtitulo={item.subtitulo}
                    descricao={item.descricao}
                    preco={item.preco}
                    text={item.classe}
                />
            }
            )}
        </div>
    )
}

export default Produtos