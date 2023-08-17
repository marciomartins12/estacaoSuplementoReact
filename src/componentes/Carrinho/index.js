import { LiaArrowAltCircleLeftSolid } from "react-icons/lia"
import ItemCarrinho from "./ItemCarrinho"
import "./PageCompras.css"
const PageCompras = (props) => {
    return (
        <div className="container-p">
            <LiaArrowAltCircleLeftSolid className="i" onClick={() => { 
                if(props.produtosDaLista.length>0){
                   
                  }else{
                    window.location.reload()
                  }
                props.trocarMenu(+1) }} color="#fff" />
            <div className=" div-item-i">
                <div>
                    {props.produtosDaLista.map((item, index) => {
                        return <ItemCarrinho
                            key={index}
                            nome={item.nome}
                            preco={item.preco}
                            img={item.img}
                            id={item.id}
                            removerItemDaLista={props.remover}
                        />
                    })}

                   {props.produtosDaLista.length > 0? (<div>
                        <button>
                        enviar
                        </button>
                    </div>):""}
                            
                </div>

            </div>
        </div>
    )
}
export default PageCompras