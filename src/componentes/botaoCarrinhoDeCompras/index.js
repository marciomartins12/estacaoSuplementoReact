import {BiCartAlt} from "react-icons/bi"
import {FcPlus} from "react-icons/fc"
import "./Carrinho.css"
const Carrinho = (props)=>{
    return (
        <div onClick={()=>{
            
        }}>
            <BiCartAlt className="carro"/>
{props.item.length > 0 ? <FcPlus className="adCarro"/>: ""} 

        </div>
    )
}
export default Carrinho