import "./ItensCompras.css"
import { RiCloseCircleLine } from "react-icons/ri"
const ItemCarrinho = (props) => {
    return (
        <div className="containerItemCarrinhoDeCompras">
            <div>
                <img src={props.img} />
            </div>
            <div className="div">
                <h2>{props.nome}</h2>
                <h3>R${props.preco}.00</h3>
            </div>
                <div className="icone">
                    <RiCloseCircleLine  onClick={()=> props.removerItemDaLista(props.id)}/>
                </div>

        </div>
    )
}
export default ItemCarrinho