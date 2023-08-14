import { MdAddShoppingCart } from "react-icons/md"
import "./Item.css"
const Item = (props) => {
    return (
        <div className="produto">
            <div>

                <img src={props.imagem} alt={props.nome} />
                <h3>{props.nome}</h3>
                <h4>{props.subtitulo}</h4>

                <div className="divPreco">
                    <h5>{props.preco}</h5>
                    <MdAddShoppingCart />
                </div>
            </div>
        </div>
    )
}
export default Item