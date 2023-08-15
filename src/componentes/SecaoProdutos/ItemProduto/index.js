import { MdAddShoppingCart } from "react-icons/md"
import "./Item.css"
import {MdOutlineDone} from "react-icons/md"
import { AiOutlineCloseCircle } from "react-icons/ai"
const Item = (props) => {
    return (

        <div className="produto">
            <div>
                <div>
                    <div onClick={(evento) => {
                        evento.target.closest(".produto").querySelector(".displayNone").classList.add("mostrar")
                    }}>
                        <img src={props.imagem} alt={props.nome} />
                        <h3>{props.nome}</h3>
                        <h4>{props.subtitulo}</h4>
                    </div>

                    <div className="divPreco">
                        <h5>R${props.preco}.00</h5>

                        {(props.item.confimarcao)?
                        <MdOutlineDone
                        className="iconeComprar"/>:
                        <MdAddShoppingCart
                        onClick={()=>{
                            props.carrinho(props.item)
                        }} className="iconeComprar" />
                        }
                    </div>
                </div>
            </div>
            <div className="displayNone">
                <AiOutlineCloseCircle onClick={(evento) => {
                    evento.target.closest(".produto").querySelector(".displayNone").classList.toggle("mostrar")

                }} className="iconeVoltar" />
                <img src={props.imagem} alt={props.nome} />
                <h3>{props.nome}</h3>
                <h4>{props.subtitulo}</h4>
                <p>{props.descricao}</p>
            </div>

        </div>

    )
}
export default Item