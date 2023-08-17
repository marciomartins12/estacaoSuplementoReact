import {LiaArrowAltCircleLeftSolid} from "react-icons/lia"
import ItemCarrinho from "./ItemCarrinho"
import "./PageCompras.css"
const PageCompras = (props)=>{
    return (
        <div>
            <div>
            <LiaArrowAltCircleLeftSolid onClick={()=>{props.trocarMenu(+1)}} color="#fff"/>
                <div>
            {props.produtosDaLista.map((item,index)=>{  
            return <ItemCarrinho
            key={index}
            nome={item.nome}
            preco={item.preco}
            img ={ item.img}
            />
            })}        
                </div>

            </div>
        </div>
    )
}
export default PageCompras