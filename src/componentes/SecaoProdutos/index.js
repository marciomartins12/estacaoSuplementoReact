import Item from "./ItemProduto"
import "./Produtos.css"
const Produtos = (props) => {

    return (
        <ul className="div-produtos">
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
        </ul>
    )
}

export default Produtos