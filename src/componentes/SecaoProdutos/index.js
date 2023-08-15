import Item from "./ItemProduto"
import "./Produtos.css"
const Produtos = (props) => {

    return (
        <div className="div-produtos">
            {props.produtos.map((item)=>{
                return <Item
                item={item}
              
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