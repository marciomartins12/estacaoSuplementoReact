import { BiCartAlt } from "react-icons/bi"
import { FcPlus } from "react-icons/fc"
import "./Carrinho.css"
const Carrinho = (props) => {
    return (
        <div onClick={() => {
            props.menu(0)
        }}>
            <BiCartAlt className="carro" />
            {props.item.length > 0 ? <FcPlus className="adCarro" /> : ""}
            <p className="comp">Carrinho</p>
        </div>
    )
}
export default Carrinho