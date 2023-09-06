import { BiCartAlt } from "react-icons/bi"
import { FcPlus } from "react-icons/fc"
import "./Carrinho.css"
import { Link } from "react-router-dom"
const Carrinho = (props) => {
    return (
        <Link to={"/carrinhodecompras"}>
            <BiCartAlt className="carro" >

            </BiCartAlt>
            {props.item.length > 0 ? <FcPlus className="adCarro" /> : ""}
            <p className="comp">Carrinho</p>
        </Link>
    )
}
export default Carrinho