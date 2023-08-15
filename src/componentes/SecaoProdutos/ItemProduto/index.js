import { MdAddShoppingCart } from "react-icons/md"
import "./Item.css"
import { AiOutlineCloseCircle } from "react-icons/ai"
const Item = (props) => {
    let mostrar = "";
    return (

        <div className="produto">
            <div>

                <div>
                    <div onClick={(evento) => {
                        console.log(evento.target.closest(".produto").querySelector(".displayNone").classList.add("mostrar"))
                    }}>
                        <img src={props.imagem} alt={props.nome} />
                        <h3>{props.nome}</h3>
                        <h4>{props.subtitulo}</h4>
                    </div>

                    <div className="divPreco">
                        <h5>{props.preco}</h5>
                        <MdAddShoppingCart />
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