import { MdAddShoppingCart } from "react-icons/md"
import "./Item.css"
import ItemExibir from "./ItemExibir"
const Item = (props) => {
    let mostrar = false;
    return (

        <div className="produto">
            <div>
                <div onClick={()=> {mostrar = !mostrar
                console.log(mostrar)}}>
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
    )
}
export default Item