import {LiaArrowAltCircleLeftSolid} from "react-icons/lia"
import ItemCarrinho from "./ItemCarrinho"
const PageCompras = (props)=>{
   console.log(props.produtoDaLista)
    return (
        <div>
            <div>
            <LiaArrowAltCircleLeftSolid color="#fff"/>
                <div>
            {props.produtosDaLista.map((item)=>{
              console.log(item)  
            return <ItemCarrinho
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